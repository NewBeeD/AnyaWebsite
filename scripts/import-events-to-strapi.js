/**
 * Strapi Bulk Import Script for ECC 2026 Calendar Events
 * 
 * Usage:
 * 1. Update STRAPI_URL with your Strapi API URL
 * 2. Update API_TOKEN with your Strapi API token (create in Strapi Admin > Settings > API Tokens)
 * 3. Run: node scripts/import-events-to-strapi.js
 * 
 * Prerequisites:
 * - Ensure the "Event" content type exists in Strapi with matching fields
 * - Create an API token with full access in Strapi admin panel
 */

const fs = require('fs');
const path = require('path');

// Configuration - Update these values
const STRAPI_URL = process.env.STRAPI_URL || 'https://anyabacken.onrender.com/api';
const API_TOKEN = process.env.STRAPI_API_TOKEN || 'YOUR_API_TOKEN_HERE';

// Load the events data
const eventsDataPath = path.join(__dirname, '..', 'strapi-data', 'ecc-2026-events.json');
const eventsData = JSON.parse(fs.readFileSync(eventsDataPath, 'utf8'));

// Map event types to Strapi EventCategory format (lowercase)
const eventCategoryMap = {
  'conference': 'conference',
  'workshop': 'workshop',
  'church': 'church',
  'youth': 'youth',
  'other': 'other'
};

// Map country values to Strapi format
const countryMap = {
  'dominica': 'Dominica',
  'barbados': 'Barbados',
  'both': 'All',
  'virtual': 'Virtual'
};

// Sleep function for rate limiting
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Create a single event in Strapi
async function createEvent(event) {
  const payload = {
    data: {
      Title: event.Title,
      Date: event.Date,
      EndDate: event.EndDate || null,
      Description: event.Description,
      Location: event.Location,
      Church: event.Location, // Use location as church name
      EventCategory: eventCategoryMap[event.EventType] || 'other',
      Country: countryMap[event.Country] || 'All',
      Ministries: event.Ministries,
      Featured: event.Featured || false,
      // Additional fields from Event schema
      RegistrationRequired: false,
      CostType: 'Free'
    }
  };

  try {
    const headers = {
      'Content-Type': 'application/json'
    };
    
    // Only add auth header if token is provided
    if (API_TOKEN && API_TOKEN !== 'YOUR_API_TOKEN_HERE') {
      headers['Authorization'] = `Bearer ${API_TOKEN}`;
    }

    const response = await fetch(`${STRAPI_URL}/events`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`Failed to create event "${event.Title}":`, errorData);
      return { success: false, event: event.Title, error: errorData };
    }

    const data = await response.json();
    console.log(`✓ Created: ${event.Title}`);
    return { success: true, event: event.Title, id: data.data.id };
  } catch (error) {
    console.error(`Error creating event "${event.Title}":`, error.message);
    return { success: false, event: event.Title, error: error.message };
  }
}

// Main import function
async function importEvents() {
  console.log('='.repeat(60));
  console.log('ECC 2026 Calendar Events - Strapi Bulk Import');
  console.log('='.repeat(60));
  console.log(`Total events to import: ${eventsData.events.length}`);
  console.log(`Strapi URL: ${STRAPI_URL}`);
  console.log('='.repeat(60));
  console.log();

  const results = {
    success: 0,
    failed: 0,
    errors: []
  };

  for (const event of eventsData.events) {
    const result = await createEvent(event);
    
    if (result.success) {
      results.success++;
    } else {
      results.failed++;
      results.errors.push(result);
    }

    // Rate limiting - wait 100ms between requests to avoid overwhelming the server
    await sleep(100);
  }

  console.log();
  console.log('='.repeat(60));
  console.log('Import Complete');
  console.log('='.repeat(60));
  console.log(`Successful: ${results.success}`);
  console.log(`Failed: ${results.failed}`);
  
  if (results.errors.length > 0) {
    console.log('\nFailed events:');
    results.errors.forEach(err => {
      console.log(`  - ${err.event}: ${JSON.stringify(err.error)}`);
    });
  }

  return results;
}

// Run the import
importEvents()
  .then(results => {
    process.exit(results.failed > 0 ? 1 : 0);
  })
  .catch(error => {
    console.error('Import failed:', error);
    process.exit(1);
  });
