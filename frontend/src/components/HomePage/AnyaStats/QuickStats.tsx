'use client'

import React from 'react'
import { useState, useEffect } from 'react';

const QuickStats = () => {
  
  const [churchesCount, setChurchesCount] = useState(0);
  const [regionsCount, setRegionsCount] = useState(0);

  useEffect(() => {
  const duration = 1500; // 1 second
  const steps = 60;
  const incrementChurches = 99 / steps;
  const incrementRegions = 25 / steps;
  
  let currentStep = 0;
  
  const interval = setInterval(() => {
    currentStep++;
    setChurchesCount(Math.min(99, Math.floor(incrementChurches * currentStep)));
    setRegionsCount(Math.min(25, Math.floor(incrementRegions * currentStep)));
    
    if (currentStep >= steps) {
      clearInterval(interval);
    }
  }, duration / steps);
  
  return () => clearInterval(interval);
}, []);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 text-center py-3! w-full">

      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-2xl font-bold text-indigo-700">{churchesCount}+</div>
          <div className="text-sm text-gray-600 mt-1">Churches</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-indigo-700">{regionsCount}</div>
          <div className="text-sm text-gray-600 mt-1">Regions</div>
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

