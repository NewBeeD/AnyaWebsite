'use client';

import { useStrapiQuery } from '@/hooks/Events/UseEventsApi';

// Hardcoded ECC 2026 Calendar Events
// Theme: RISE – Year 01: Foundation & Readiness

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  endDate?: Date;
  church: string;
  type: 'conference' | 'workshop' | 'church' | 'youth' | 'other';
  description?: string;
  country?: string;
  ministries?: string;
  image?: string;
  source?: 'hardcoded' | 'strapi';
}

interface CalendarApiResult {
  events: CalendarEvent[];
  loading: boolean;
  error: any;
}

// Hardcoded events for 2026
const hardcodedEvents: CalendarEvent[] = [
  // JANUARY 2026
  { id: '1', title: 'Consecration Service (Pastors, Elders, Deacons)', date: new Date('2026-01-03'), church: 'ECC', type: 'church', country: 'Dominica', ministries: 'MA' },
  { id: '2', title: 'Communion with God – Hour of Prayer', date: new Date('2026-01-04'), church: 'ECC', type: 'church', country: 'All', ministries: 'PRY' },
  { id: '3', title: '10 Days of Prayer', date: new Date('2026-01-07'), endDate: new Date('2026-01-17'), church: 'ECC', type: 'church', country: 'All', ministries: 'GC' },
  { id: '4', title: 'ANYA Induction Service', date: new Date('2026-01-10'), church: 'ECC', type: 'youth', country: 'All', ministries: 'YM, PGATS' },
  { id: '5', title: 'Launch of RISE Health', date: new Date('2026-01-10'), church: 'ECC', type: 'other', country: 'All', ministries: 'HM' },
  { id: '6', title: 'Pathfinder Rally', date: new Date('2026-01-17'), church: 'ECC', type: 'youth', country: 'All', ministries: 'YM' },
  { id: '7', title: 'Zonal Conventions', date: new Date('2026-01-17'), church: 'ECC', type: 'conference', country: 'All', ministries: 'ECC' },
  { id: '8', title: 'Sabbath School Classroom Environment Training', date: new Date('2026-01-18'), church: 'ECC', type: 'workshop', country: 'Dominica', ministries: 'CHAM, YM' },
  { id: '9', title: 'Day of the Pastor', date: new Date('2026-01-21'), church: 'ECC', type: 'church', country: 'Dominica', ministries: 'EDU' },
  { id: '10', title: 'Church Revitalization Training Program', date: new Date('2026-01-22'), endDate: new Date('2026-02-01'), church: 'ECC', type: 'workshop', country: 'Dominica', ministries: 'ECC' },
  { id: '11', title: 'Quarterly Day of Prayer', date: new Date('2026-01-24'), church: 'ECC', type: 'church', country: 'All', ministries: 'PRY' },
  { id: '12', title: 'Consecration Service (Pastors, Elders, Deacons)', date: new Date('2026-01-24'), church: 'ECC', type: 'church', country: 'Barbados', ministries: 'ECC' },
  { id: '13', title: 'Stewardship – National Advisory', date: new Date('2026-01-24'), church: 'ECC', type: 'conference', country: 'Barbados', ministries: 'SM' },
  { id: '14', title: 'Bible Connect Launch', date: new Date('2026-01-24'), church: 'ECC', type: 'youth', country: 'All', ministries: 'YM' },
  { id: '15', title: 'Religious Liberty Day', date: new Date('2026-01-24'), church: 'ECC', type: 'other', country: 'All', ministries: 'PARL' },
  { id: '16', title: 'Sabbath School Classroom Environment Training', date: new Date('2026-01-25'), church: 'ECC', type: 'workshop', country: 'Barbados', ministries: 'CHAM, SS' },
  { id: '17', title: 'Sabbath School Teachers Meeting', date: new Date('2026-01-29'), church: 'ECC', type: 'workshop', country: 'Virtual', ministries: 'SS' },
  { id: '18', title: 'Youth Ministries Training', date: new Date('2026-01-30'), endDate: new Date('2026-01-31'), church: 'ECC', type: 'youth', country: 'Dominica', ministries: 'YM' },
  { id: '19', title: 'Publishing Coordinators Training', date: new Date('2026-01-31'), church: 'ECC', type: 'workshop', country: 'Barbados', ministries: 'PUB' },
  { id: '20', title: 'Ingathering National Harvest', date: new Date('2026-01-31'), endDate: new Date('2026-03-14'), church: 'ECC', type: 'other', country: 'All', ministries: 'ECC' },

  // FEBRUARY 2026
  { id: '21', title: 'Communion with God – Hour of Prayer', date: new Date('2026-02-01'), church: 'ECC', type: 'church', country: 'Barbados', ministries: 'PRY' },
  { id: '22', title: 'Secretariat Advisory & Gala', date: new Date('2026-02-07'), endDate: new Date('2026-02-08'), church: 'ECC', type: 'conference', country: 'Dominica', ministries: 'ECC' },
  { id: '23', title: 'In-Person Consultation with Pastors', date: new Date('2026-02-09'), endDate: new Date('2026-02-15'), church: 'ECC', type: 'conference', country: 'All', ministries: 'MA, ECC' },
  { id: '24', title: 'National Camp Meeting', date: new Date('2026-02-13'), endDate: new Date('2026-02-17'), church: 'ECC', type: 'conference', country: 'All', ministries: 'ECC' },
  { id: '25', title: 'Family and Singles Ministries Convention', date: new Date('2026-02-14'), church: 'ECC', type: 'conference', country: 'Dominica', ministries: 'FL' },
  { id: '26', title: 'Publishing Coordinator Training', date: new Date('2026-02-14'), church: 'ECC', type: 'workshop', country: 'Barbados', ministries: 'PUB' },
  { id: '27', title: 'Stewardship – National Advisory', date: new Date('2026-02-14'), church: 'ECC', type: 'conference', country: 'Dominica', ministries: 'SM' },
  { id: '28', title: 'Christian Home and Marriage Week', date: new Date('2026-02-14'), endDate: new Date('2026-02-21'), church: 'ECC', type: 'other', country: 'All', ministries: 'FL' },
  { id: '29', title: 'Spirit of Prophecy Symposium', date: new Date('2026-02-15'), church: 'ECC', type: 'conference', country: 'Barbados', ministries: 'SOP' },
  { id: '30', title: 'Elders\' Exchange', date: new Date('2026-02-21'), church: 'ECC', type: 'church', country: 'All', ministries: 'ECC, MA' },
  { id: '31', title: 'Spirit of Prophecy Symposium', date: new Date('2026-02-22'), church: 'ECC', type: 'conference', country: 'Dominica', ministries: 'SOP' },
  { id: '32', title: 'Divorce Care Conference', date: new Date('2026-02-22'), church: 'ECC', type: 'conference', country: 'Barbados', ministries: 'FL' },
  { id: '33', title: 'Induction Service – ADRA, Community Service & Possibility Ministries', date: new Date('2026-02-22'), church: 'ECC', type: 'church', country: 'Barbados', ministries: 'ADRA, APM, CS' },
  { id: '34', title: 'Adventurer National Induction Service', date: new Date('2026-02-28'), church: 'ECC', type: 'youth', country: 'Barbados', ministries: 'YM' },

  // MARCH 2026
  { id: '35', title: 'Communion with God – Hour of Prayer', date: new Date('2026-03-01'), church: 'ECC', type: 'church', country: 'All', ministries: 'PRY' },
  { id: '36', title: 'Induction Service – ADRA, Community Service & Possibility Ministries', date: new Date('2026-03-01'), church: 'ECC', type: 'church', country: 'Dominica', ministries: 'ADRA, APM, CS' },
  { id: '37', title: 'Women\'s Ministries Fair', date: new Date('2026-03-05'), church: 'ECC', type: 'other', country: 'Dominica', ministries: 'WM' },
  { id: '38', title: 'Sabbath School Teachers\' Training – Module 01', date: new Date('2026-03-05'), endDate: new Date('2026-03-26'), church: 'ECC', type: 'workshop', country: 'Virtual', ministries: 'SS' },
  { id: '39', title: 'Stewardship Certification Online Training – Level 2', date: new Date('2026-03-05'), endDate: new Date('2026-04-30'), church: 'ECC', type: 'workshop', country: 'Virtual', ministries: 'SM' },
  { id: '40', title: 'Women\'s Day of Prayer', date: new Date('2026-03-07'), church: 'ECC', type: 'church', country: 'All', ministries: 'WM, GC' },
  { id: '41', title: 'Women\'s Ministries Prayer Breakfast', date: new Date('2026-03-08'), church: 'ECC', type: 'church', country: 'Dominica', ministries: 'WM' },
  { id: '42', title: 'Week of Prayer for Primary & Secondary Schools', date: new Date('2026-03-08'), endDate: new Date('2026-03-13'), church: 'ECC', type: 'church', country: 'All', ministries: 'IAD' },
  { id: '43', title: 'Elders Leadership Summit', date: new Date('2026-03-14'), church: 'ECC', type: 'conference', country: 'All', ministries: 'ECC' },
  { id: '44', title: 'Global Youth Day', date: new Date('2026-03-21'), church: 'ECC', type: 'youth', country: 'All', ministries: 'YM' },
  { id: '45', title: 'Massive Distribution of the Missionary Book', date: new Date('2026-03-21'), church: 'ECC', type: 'other', country: 'All', ministries: 'PUB' },
  { id: '46', title: 'Youth Week of Prayer', date: new Date('2026-03-21'), endDate: new Date('2026-03-28'), church: 'ECC', type: 'youth', country: 'All', ministries: 'YM' },
  { id: '47', title: 'Elders\' Evangelism Exchange', date: new Date('2026-03-23'), endDate: new Date('2026-03-28'), church: 'ECC', type: 'church', country: 'All', ministries: 'MA' },
  { id: '48', title: 'Seniors\' Ministries Online Training', date: new Date('2026-03-24'), church: 'ECC', type: 'workshop', country: 'Virtual', ministries: 'CARU' },
  { id: '49', title: 'Relaunch – Weekly Online Sabbath School Lesson Discussion', date: new Date('2026-03-28'), church: 'ECC', type: 'workshop', country: 'Virtual', ministries: 'SS' },

  // APRIL 2026 (Mission & Evangelism Emphasis Month)
  { id: '50', title: 'Youth Ministries Training', date: new Date('2026-04-02'), endDate: new Date('2026-04-05'), church: 'ECC', type: 'youth', country: 'Barbados', ministries: 'YM' },
  { id: '51', title: 'National Camp Meeting', date: new Date('2026-04-02'), endDate: new Date('2026-04-05'), church: 'ECC', type: 'conference', country: 'Barbados', ministries: 'ECC' },
  { id: '52', title: 'Quarterly Day of Prayer', date: new Date('2026-04-04'), church: 'ECC', type: 'church', country: 'All', ministries: 'PRY' },
  { id: '53', title: '1st Sabbath Weekend Evangelism', date: new Date('2026-04-04'), church: 'ECC', type: 'church', country: 'All', ministries: 'PM' },
  { id: '54', title: 'Communion with God – Hour of Prayer', date: new Date('2026-04-05'), church: 'ECC', type: 'church', country: 'All', ministries: 'PRY' },
  { id: '55', title: 'Spanish for Clergy', date: new Date('2026-04-08'), endDate: new Date('2026-04-11'), church: 'ECC', type: 'workshop', country: 'Barbados', ministries: 'ECC' },
  { id: '56', title: 'Colporteur\'s Day', date: new Date('2026-04-11'), church: 'ECC', type: 'other', country: 'All', ministries: 'PUB' },
  { id: '57', title: 'Youth Prayer and Fast', date: new Date('2026-04-11'), church: 'ECC', type: 'youth', country: 'All', ministries: 'YM' },
  { id: '58', title: 'Publishing Directors Advisory', date: new Date('2026-04-15'), church: 'ECC', type: 'conference', country: 'Barbados', ministries: 'PUB' },
  { id: '59', title: 'Education and Evangelism Week', date: new Date('2026-04-18'), church: 'ECC', type: 'other', country: 'All', ministries: 'EDU' },
  { id: '60', title: 'Adventist Possibility Ministries Weekend', date: new Date('2026-04-18'), endDate: new Date('2026-04-19'), church: 'ECC', type: 'other', country: 'All', ministries: 'APM' },
  { id: '61', title: 'Adventist Education Celebration Week', date: new Date('2026-04-19'), endDate: new Date('2026-04-25'), church: 'ECC', type: 'other', country: 'All', ministries: 'EDU' },
  { id: '62', title: 'Parenting Workshop', date: new Date('2026-04-21'), endDate: new Date('2026-04-23'), church: 'ECC', type: 'workshop', country: 'Barbados', ministries: 'FL' },
  { id: '63', title: 'National Master Guide Camp', date: new Date('2026-04-22'), endDate: new Date('2026-04-25'), church: 'ECC', type: 'youth', country: 'Barbados', ministries: 'YM' },
  { id: '64', title: 'Ambassador\'s Day', date: new Date('2026-04-25'), church: 'ECC', type: 'youth', country: 'All', ministries: 'YM, ECC' },
  { id: '65', title: 'National Picnic', date: new Date('2026-04-26'), church: 'ECC', type: 'other', country: 'All', ministries: 'CARU' },

  // MAY 2026
  { id: '66', title: 'Marriage Retreat', date: new Date('2026-05-01'), endDate: new Date('2026-05-03'), church: 'ECC', type: 'other', country: 'Dominica', ministries: 'FL' },
  { id: '67', title: 'Public Campus Ministry Outreach', date: new Date('2026-05-01'), endDate: new Date('2026-05-03'), church: 'ECC', type: 'youth', country: 'All', ministries: 'PCM' },
  { id: '68', title: 'Communion with God – Hour of Prayer', date: new Date('2026-05-03'), church: 'ECC', type: 'church', country: 'All', ministries: 'PRY' },
  { id: '69', title: 'Adventist Volunteer / VividFaith Day', date: new Date('2026-05-03'), church: 'ECC', type: 'other', country: 'All', ministries: 'GC' },
  { id: '70', title: 'Parenting Workshop – Part 2', date: new Date('2026-05-05'), endDate: new Date('2026-05-09'), church: 'ECC', type: 'workshop', country: 'Dominica', ministries: 'FL' },
  { id: '71', title: 'Community Services Day & Disaster Preparedness', date: new Date('2026-05-09'), church: 'ECC', type: 'other', country: 'All', ministries: 'CS, ECC' },
  { id: '72', title: 'RISE Together Health – 5K Fun Walk', date: new Date('2026-05-10'), church: 'ECC', type: 'other', country: 'All', ministries: 'ECC' },
  { id: '73', title: 'Family Week of Prayer', date: new Date('2026-05-10'), endDate: new Date('2026-05-15'), church: 'ECC', type: 'church', country: 'All', ministries: 'FL' },
  { id: '74', title: 'Sabbath School Teachers\' Training – Module 02', date: new Date('2026-05-10'), endDate: new Date('2026-05-31'), church: 'ECC', type: 'workshop', country: 'Virtual', ministries: 'SS' },
  { id: '75', title: 'Men\'s Week of Prayer & Prayer Conference', date: new Date('2026-05-13'), endDate: new Date('2026-05-16'), church: 'ECC', type: 'church', country: 'Dominica', ministries: 'YM' },
  { id: '76', title: 'National Day of the Boy Child', date: new Date('2026-05-15'), church: 'ECC', type: 'youth', country: 'All', ministries: 'ECC' },
  { id: '77', title: 'Global Adventurer\'s Day', date: new Date('2026-05-16'), church: 'ECC', type: 'youth', country: 'Dominica', ministries: 'CHAM' },
  { id: '78', title: 'Youth Impact', date: new Date('2026-05-17'), church: 'ECC', type: 'youth', country: 'All', ministries: 'YM' },
  { id: '79', title: 'Staff of Schools Week of Prayer', date: new Date('2026-05-17'), endDate: new Date('2026-05-22'), church: 'ECC', type: 'church', country: 'All', ministries: 'ECC' },
  { id: '80', title: 'Day of Prayer for Children at Risk', date: new Date('2026-05-23'), church: 'ECC', type: 'church', country: 'Virtual', ministries: 'CHAM, GC' },
  { id: '81', title: 'Children\'s Fun Day', date: new Date('2026-05-24'), church: 'ECC', type: 'youth', country: 'All', ministries: 'CHAM, ECC' },
  { id: '82', title: 'Literature Distribution Week and Rally', date: new Date('2026-05-24'), endDate: new Date('2026-05-30'), church: 'ECC', type: 'other', country: 'All', ministries: 'ECC' },
  { id: '83', title: 'Couples Prayer Breakfast', date: new Date('2026-05-31'), church: 'ECC', type: 'church', country: 'All', ministries: 'FL' },

  // JUNE 2026
  { id: '84', title: 'SDA Health Message Day – 163rd Anniversary', date: new Date('2026-06-06'), church: 'ECC', type: 'other', country: 'Barbados', ministries: 'HM' },
  { id: '85', title: 'Communion with God – Hour of Prayer', date: new Date('2026-06-07'), church: 'ECC', type: 'church', country: 'Barbados', ministries: 'PRY' },
  { id: '86', title: 'Singles\' Prayer Breakfast', date: new Date('2026-06-07'), church: 'ECC', type: 'church', country: 'Barbados', ministries: 'FL' },
  { id: '87', title: 'Women\'s Ministries Emphasis Week', date: new Date('2026-06-07'), endDate: new Date('2026-06-13'), church: 'ECC', type: 'other', country: 'All', ministries: 'WM, GC' },
  { id: '88', title: 'Senior Youth Convention', date: new Date('2026-06-13'), church: 'ECC', type: 'youth', country: 'Barbados', ministries: 'YM' },
  { id: '89', title: 'Men\'s Week of Prayer & Prayer Conference', date: new Date('2026-06-15'), endDate: new Date('2026-06-21'), church: 'ECC', type: 'church', country: 'Barbados', ministries: 'FL' },
  { id: '90', title: 'Elders Retreat', date: new Date('2026-06-19'), endDate: new Date('2026-06-21'), church: 'ECC', type: 'conference', country: 'All', ministries: 'ECC' },
  { id: '91', title: 'Leadership Conference for Elders & Pastors', date: new Date('2026-06-24'), endDate: new Date('2026-06-28'), church: 'ECC', type: 'conference', country: 'All', ministries: 'YM, ECC' },
  { id: '92', title: 'ASI Emphasis Day', date: new Date('2026-06-27'), church: 'ECC', type: 'other', country: 'All', ministries: 'ASI, GC' },
  { id: '93', title: 'World Public Campus Ministries Day', date: new Date('2026-06-27'), church: 'ECC', type: 'youth', country: 'All', ministries: 'PCM, YM' },

  // JULY 2026 (Vacation Bible School Month)
  { id: '94', title: 'NextGen Evangelism (VBS Month)', date: new Date('2026-07-01'), endDate: new Date('2026-07-31'), church: 'ECC', type: 'youth', country: 'Dominica', ministries: 'ECC' },
  { id: '95', title: 'Singles\' Conference & Prayer Breakfast', date: new Date('2026-07-03'), endDate: new Date('2026-07-05'), church: 'ECC', type: 'conference', country: 'Barbados', ministries: 'FL' },
  { id: '96', title: 'Bible Truth Weekend', date: new Date('2026-07-03'), endDate: new Date('2026-07-05'), church: 'ECC', type: 'church', country: 'Barbados', ministries: 'NCC, ECC' },
  { id: '97', title: 'Quarterly Day of Prayer', date: new Date('2026-07-04'), church: 'ECC', type: 'church', country: 'All', ministries: 'PRY' },
  { id: '98', title: 'Communion with God – Hour of Prayer', date: new Date('2026-07-05'), church: 'ECC', type: 'church', country: 'All', ministries: 'PRY' },
  { id: '99', title: 'Sermon Presentation Online Training', date: new Date('2026-07-05'), endDate: new Date('2026-07-16'), church: 'ECC', type: 'workshop', country: 'Virtual', ministries: 'ECC' },
  { id: '100', title: 'Senior Youth Camp', date: new Date('2026-07-09'), endDate: new Date('2026-07-20'), church: 'ECC', type: 'youth', country: 'All', ministries: 'YM' },
  { id: '101', title: 'Elders\' Retreat', date: new Date('2026-07-17'), church: 'ECC', type: 'conference', country: 'All', ministries: 'ECC' },
  { id: '102', title: 'Seniors\' Ministry Day', date: new Date('2026-07-18'), church: 'ECC', type: 'other', country: 'All', ministries: 'GC' },
  { id: '103', title: 'Children\'s Week of Prayer', date: new Date('2026-07-19'), endDate: new Date('2026-07-25'), church: 'ECC', type: 'youth', country: 'All', ministries: 'CHAM' },
  { id: '104', title: 'Children\'s Day & Bible Extravaganza', date: new Date('2026-07-25'), church: 'ECC', type: 'youth', country: 'All', ministries: 'CHAM' },
  { id: '105', title: 'Creative Sabbath', date: new Date('2026-07-25'), church: 'ECC', type: 'church', country: 'All', ministries: 'ECC' },
  { id: '106', title: 'Secondary School Student LE Program', date: new Date('2026-07-27'), endDate: new Date('2026-08-14'), church: 'ECC', type: 'youth', country: 'All', ministries: 'EDU' },
  { id: '107', title: 'Singles Ministries Conference & Hike', date: new Date('2026-07-31'), endDate: new Date('2026-08-02'), church: 'ECC', type: 'conference', country: 'Dominica', ministries: 'FL' },
  { id: '108', title: 'National Adventurer Camp', date: new Date('2026-07-31'), endDate: new Date('2026-08-03'), church: 'ECC', type: 'youth', country: 'All', ministries: 'YM' },

  // AUGUST 2026
  { id: '109', title: 'Quarterly Day of Prayer', date: new Date('2026-08-02'), church: 'ECC', type: 'church', country: 'All', ministries: 'PRY' },
  { id: '110', title: 'Secondary School Student LE Program', date: new Date('2026-08-04'), endDate: new Date('2026-08-21'), church: 'ECC', type: 'youth', country: 'All', ministries: 'EDU' },
  { id: '111', title: 'National Stewardship Blitz', date: new Date('2026-08-08'), church: 'ECC', type: 'other', country: 'All', ministries: 'SM' },
  { id: '112', title: 'Principals\' Summit', date: new Date('2026-08-19'), endDate: new Date('2026-08-22'), church: 'ECC', type: 'conference', country: 'Barbados', ministries: 'EDU' },
  { id: '113', title: 'Pastoral Retreat & Fun Day', date: new Date('2026-08-21'), endDate: new Date('2026-08-23'), church: 'ECC', type: 'conference', country: 'Dominica', ministries: 'ECC' },
  { id: '114', title: 'Women\'s Ministries Convention, EnditNow & Pantry Day', date: new Date('2026-08-22'), church: 'ECC', type: 'conference', country: 'All', ministries: 'WM, GC' },
  { id: '115', title: 'Men\'s Ministries Prayer Breakfast', date: new Date('2026-08-23'), church: 'ECC', type: 'church', country: 'All', ministries: 'FL' },
  { id: '116', title: '#Laypersons Day', date: new Date('2026-08-29'), church: 'ECC', type: 'church', country: 'All', ministries: 'IAD' },
  { id: '117', title: 'Pastoral Retreat & Fun Day', date: new Date('2026-08-29'), endDate: new Date('2026-08-30'), church: 'ECC', type: 'conference', country: 'Barbados', ministries: 'ECC' },
  { id: '118', title: 'National Sports Day', date: new Date('2026-08-30'), church: 'ECC', type: 'youth', country: 'All', ministries: 'YM' },

  // SEPTEMBER 2026 (Mission & Evangelism Emphasis Month)
  { id: '119', title: 'Marriage Enrichment Seminar', date: new Date('2026-09-04'), endDate: new Date('2026-09-05'), church: 'ECC', type: 'workshop', country: 'All', ministries: 'FL' },
  { id: '120', title: 'Back to School Sabbath', date: new Date('2026-09-05'), church: 'ECC', type: 'church', country: 'Dominica', ministries: 'EDU' },
  { id: '121', title: 'Communion with God – Hour of Prayer', date: new Date('2026-09-06'), church: 'ECC', type: 'church', country: 'Barbados', ministries: 'PRY' },
  { id: '122', title: 'Adventurer Literacy Week', date: new Date('2026-09-06'), endDate: new Date('2026-09-12'), church: 'ECC', type: 'youth', country: 'Barbados', ministries: 'YM' },
  { id: '123', title: 'Back to School Sabbath', date: new Date('2026-09-12'), church: 'ECC', type: 'church', country: 'Barbados', ministries: 'EDU' },
  { id: '124', title: 'Family Togetherness Day of Prayer', date: new Date('2026-09-12'), church: 'ECC', type: 'church', country: 'All', ministries: 'FL, GC' },
  { id: '125', title: 'Pathfinder Day', date: new Date('2026-09-19'), church: 'ECC', type: 'youth', country: 'All', ministries: 'YM' },
  { id: '126', title: 'Women On Fire For Jesus Evangelistic Series', date: new Date('2026-09-19'), endDate: new Date('2026-10-03'), church: 'ECC', type: 'church', country: 'All', ministries: 'WM' },
  { id: '127', title: 'Health and Evangelism Prayer Week', date: new Date('2026-09-20'), endDate: new Date('2026-09-26'), church: 'ECC', type: 'church', country: 'All', ministries: 'HM' },
  { id: '128', title: '#Sabbath School Guest Day', date: new Date('2026-09-26'), church: 'ECC', type: 'church', country: 'All', ministries: 'SS, IAD' },

  // OCTOBER 2026
  { id: '129', title: 'Quarterly Day of Prayer', date: new Date('2026-10-03'), church: 'ECC', type: 'church', country: 'All', ministries: 'PRY' },
  { id: '130', title: 'Celebrating the Adventist Teachers', date: new Date('2026-10-03'), church: 'ECC', type: 'other', country: 'All', ministries: 'EDU, CARU' },
  { id: '131', title: 'Bible Connect', date: new Date('2026-10-03'), church: 'ECC', type: 'youth', country: 'All', ministries: 'ECC' },
  { id: '132', title: 'Communion with God – Hour of Prayer', date: new Date('2026-10-04'), church: 'ECC', type: 'church', country: 'All', ministries: 'PRY' },
  { id: '133', title: 'Pastoral Family Appreciation Day', date: new Date('2026-10-10'), church: 'ECC', type: 'church', country: 'All', ministries: 'GC' },
  { id: '134', title: 'School of Evangelism', date: new Date('2026-10-17'), church: 'ECC', type: 'workshop', country: 'All', ministries: 'ECC' },
  { id: '135', title: 'SOP & Family Ministries Heritage Week', date: new Date('2026-10-17'), endDate: new Date('2026-10-24'), church: 'ECC', type: 'other', country: 'All', ministries: 'SOP, FL' },
  { id: '136', title: 'Creation Week', date: new Date('2026-10-18'), endDate: new Date('2026-10-24'), church: 'ECC', type: 'other', country: 'All', ministries: 'GC' },
  { id: '137', title: 'Deaconry Congressory', date: new Date('2026-10-23'), endDate: new Date('2026-10-25'), church: 'ECC', type: 'conference', country: 'Barbados', ministries: 'ECC' },
  { id: '138', title: 'Children\'s Ministry Convention', date: new Date('2026-10-24'), church: 'ECC', type: 'conference', country: 'Dominica', ministries: 'CHAM, CARU' },
  { id: '139', title: 'Deaconry Congressory', date: new Date('2026-10-24'), church: 'ECC', type: 'conference', country: 'Dominica', ministries: 'ECC' },
  { id: '140', title: 'Day of the Girl Child', date: new Date('2026-10-31'), church: 'ECC', type: 'youth', country: 'All', ministries: 'CHAM' },
  { id: '141', title: 'Elders & Pastors Overnight Hike', date: new Date('2026-10-31'), church: 'ECC', type: 'other', country: 'All', ministries: 'CARU' },
  { id: '142', title: 'Heritage Village Promotion', date: new Date('2026-10-31'), church: 'ECC', type: 'other', country: 'All', ministries: 'ECC' },

  // NOVEMBER 2026
  { id: '143', title: 'Communion with God – Hour of Prayer', date: new Date('2026-11-01'), church: 'ECC', type: 'church', country: 'Barbados', ministries: 'PRY' },
  { id: '144', title: 'Parenting Workshop – Part 2', date: new Date('2026-11-02'), endDate: new Date('2026-11-07'), church: 'ECC', type: 'workshop', country: 'All', ministries: 'FL' },
  { id: '145', title: 'Evangelism Prayer Emphasis Camp', date: new Date('2026-11-07'), endDate: new Date('2026-11-08'), church: 'ECC', type: 'church', country: 'Dominica', ministries: 'ECC' },
  { id: '146', title: 'Core of Adventist Families Program', date: new Date('2026-11-08'), endDate: new Date('2026-11-14'), church: 'ECC', type: 'other', country: 'Dominica', ministries: 'FL' },
  { id: '147', title: 'Community Service Investiture & Convention', date: new Date('2026-11-14'), church: 'ECC', type: 'conference', country: 'Barbados', ministries: 'CS' },
  { id: '148', title: 'E-Week Prayer Focus', date: new Date('2026-11-14'), endDate: new Date('2026-11-20'), church: 'ECC', type: 'church', country: 'All', ministries: 'ECC' },
  { id: '149', title: 'Evangelism Prayer Emphasis Camp', date: new Date('2026-11-21'), church: 'ECC', type: 'church', country: 'Barbados', ministries: 'ECC' },
  { id: '150', title: 'World Orphans Vulnerable Children Day', date: new Date('2026-11-21'), church: 'ECC', type: 'youth', country: 'All', ministries: 'CHAM, GC' },
  { id: '151', title: 'Pathfinder Investiture Service', date: new Date('2026-11-21'), church: 'ECC', type: 'youth', country: 'Dominica', ministries: 'YM' },
  { id: '152', title: 'Festival of the Laity', date: new Date('2026-11-28'), church: 'ECC', type: 'church', country: 'Dominica', ministries: 'ECC' },
  { id: '153', title: 'Parade', date: new Date('2026-11-29'), church: 'ECC', type: 'other', country: 'Barbados', ministries: 'ECC' },
  { id: '154', title: 'Stewardship Revival Week', date: new Date('2026-11-29'), endDate: new Date('2026-12-05'), church: 'ECC', type: 'church', country: 'All', ministries: 'SM, GC' },

  // DECEMBER 2026
  { id: '155', title: 'LE\'s Retreat, Blitz & Recognition Ceremony', date: new Date('2026-12-04'), endDate: new Date('2026-12-06'), church: 'ECC', type: 'conference', country: 'All', ministries: 'ECC' },
  { id: '156', title: 'Festival of the Laity', date: new Date('2026-12-05'), church: 'ECC', type: 'church', country: 'Barbados', ministries: 'ECC' },
  { id: '157', title: 'Annual Stewardship Sabbath', date: new Date('2026-12-05'), church: 'ECC', type: 'church', country: 'All', ministries: 'SM' },
  { id: '158', title: 'Communion with God – Hour of Prayer', date: new Date('2026-12-06'), church: 'ECC', type: 'church', country: 'All', ministries: 'PRY' },
  { id: '159', title: 'Uniform Congressory', date: new Date('2026-12-06'), endDate: new Date('2026-12-12'), church: 'ECC', type: 'youth', country: 'All', ministries: 'YM' },
  { id: '160', title: 'Officers Appreciation Day', date: new Date('2026-12-11'), church: 'ECC', type: 'church', country: 'All', ministries: 'ECC' },
  { id: '161', title: 'Community Service Investiture & Convention', date: new Date('2026-12-12'), church: 'ECC', type: 'conference', country: 'Dominica', ministries: 'CS' },
  { id: '162', title: 'Pathfinder Investiture Service', date: new Date('2026-12-12'), church: 'ECC', type: 'youth', country: 'Barbados', ministries: 'YM' },
  { id: '163', title: 'Health Emphasis Day', date: new Date('2026-12-19'), church: 'ECC', type: 'other', country: 'All', ministries: 'HM' },
  { id: '164', title: 'Christmas Day Evangelism', date: new Date('2026-12-25'), church: 'ECC', type: 'church', country: 'Barbados', ministries: 'ECC' },
];

export default function useCalendarApi(): CalendarApiResult {
  // Fetch events from Strapi
  const { data, loading, error }: any = useStrapiQuery('/events?populate=*&pagination[pageSize]=200');

  // Map Strapi EventCategory to our event types
  const mapEventCategory = (category: string): CalendarEvent['type'] => {
    const categoryMap: Record<string, CalendarEvent['type']> = {
      'youth': 'youth',
      'conference': 'conference',
      'workshop': 'workshop',
      'church': 'church',
      'prayer': 'church',
      'other': 'other'
    };
    return categoryMap[category?.toLowerCase()] || 'other';
  };

  // Transform Strapi events to match CalendarEvent interface
  const strapiEvents: CalendarEvent[] = data?.data?.map((item: any) => ({
    id: `strapi-${item.id}`,
    title: item.Title || 'Untitled Event',
    date: new Date(item.Date),
    endDate: item.EndDate ? new Date(item.EndDate) : undefined,
    church: item.Church || 'ECC',
    type: mapEventCategory(item.EventCategory),
    description: item.Description || undefined,
    country: item.Country || 'All',
    ministries: item.Ministries || undefined,
    image: item.Image?.url || undefined,
    source: 'strapi' as const
  })) || [];

  // Sort all events by date
  const sortedEvents = strapiEvents.sort((a, b) => a.date.getTime() - b.date.getTime());

  return { 
    events: sortedEvents, 
    loading, 
    error 
  };
}



// // hooks/Events/UseCalenderApi.js
// import { useStrapiQuery } from '@/hooks/Events/UseEventsApi';

// const useCalendarApi = () => {
//   const { data, loading, error } = useStrapiQuery('/events?populate=*');

//   // Transform Strapi data to CalendarEvent format
//   const events = data?.data?.map(item => ({
//     id: item.id.toString(),
//     title: item.attributes.title || 'Untitled Event',
//     date: new Date(item.attributes.date || item.attributes.createdAt),
//     church: item.attributes.church || 'Unknown Church',
//     type: item.attributes.type || 'other',
//     description: item.attributes.description || null,
//   })) || [];

//   return {
//     events,
//     loading,
//     error,
//   };
// };

// export default useCalendarApi;
