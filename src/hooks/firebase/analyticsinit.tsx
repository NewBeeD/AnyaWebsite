"use client";

import { useEffect } from "react";
import { analytics } from "@/libs/firebase";

export default function AnalyticsInit() {
  useEffect(() => {
    // Importing analytics already initializes automatic tracking
    // This useEffect ensures it only runs on client mount
  }, []);

  return null;
}
