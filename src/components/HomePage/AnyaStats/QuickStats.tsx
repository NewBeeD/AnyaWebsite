'use client'

import React from 'react'
import { useState, useEffect, useMemo } from 'react';
import { churchData, getDominicaChurches, getBarbadosChurches } from '@/data/churchData';

const QuickStats = () => {
  
  const [churchesCount, setChurchesCount] = useState(0);
  const [regionsCount, setRegionsCount] = useState(0);

  // Calculate actual stats from church data
  const actualStats = useMemo(() => {
    const dominicaChurches = getDominicaChurches();
    const barbadosChurches = getBarbadosChurches();
    
    // Get unique regions for Dominica
    const dominicaRegions = new Set(dominicaChurches.map(c => c.region));
    // Get unique parishes for Barbados  
    const barbadosRegions = new Set(barbadosChurches.map(c => c.region));
    
    return {
      totalChurches: churchData.length,
      totalRegions: dominicaRegions.size + barbadosRegions.size
    };
  }, []);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds
    const steps = 60;
    const incrementChurches = actualStats.totalChurches / steps;
    const incrementRegions = actualStats.totalRegions / steps;
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      setChurchesCount(Math.min(actualStats.totalChurches, Math.floor(incrementChurches * currentStep)));
      setRegionsCount(Math.min(actualStats.totalRegions, Math.floor(incrementRegions * currentStep)));
      
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, duration / steps);
    
    return () => clearInterval(interval);
  }, [actualStats]);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 text-center py-3! w-full">

      <div className="grid grid-cols-4 gap-4">
        <div>
          <div className="text-2xl font-bold text-indigo-700">{churchesCount}+</div>
          <div className="text-sm text-gray-600 mt-1">Churches</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-indigo-700">{regionsCount}</div>
          <div className="text-sm text-gray-600 mt-1">Regions</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-indigo-700">2</div>
          <div className="text-sm text-gray-600 mt-1">Countries</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-indigo-700">2000</div>
          <div className="text-sm text-gray-600 mt-1">Serving Since</div>
        </div>
      </div>
    </div>
  );
}

export default QuickStats

