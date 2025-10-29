import Section1 from "@/components/HomePage/Section1";
import ImmediateValueSection from '@/components/HomePage/ImmediateValueSection/ImmediateValueSection'

import QuickStats from '@/components/HomePage/AnyaStats/QuickStats'

import KeyAudiencesSection from "@/components/HomePage/KeyAudienceSection/KeyAudienceSection";

import RandomBibleText from '@/components/HomePage/BibleTexts/BibleTexts'
import Testimonials from '@/components/HomePage/Testimonials/Testimonials'
import PrayerGroup from '@/components/HomePage/PrayerGroup/PrayerGroup'
import ChurchPrograms from '@/components/HomePage/ChurchPrograms/ChurchPrograms'
import KeyAudiences from '@/components/HomePage/KeyAudiences/KeyAudiences'
import EventCategories from '@/components/HomePage/EventCategories/EventCategories'

import EventHighlights from '@/components/HomePage/EventHighlights/EventHighlights'

import ChurchMap from '@/components/HomePage/ChurchMap/ChurchMap'

import ActivityFeed from '@/components/HomePage/ActivityFeed/ActivityFeed'

import LeadershipSportlight from '@/components/HomePage/LeadershipSportlight/LeadershipSportlight'

import SermonHighlights from '@/components/HomePage/SermonHighlights/SermonHighlights'

import CommunityImpact from '@/components/HomePage/CommunityImpact/CommunityImpact'

import Newsletter from '@/components/HomePage/Newsletter/Newsletter'


export default function Home() {
  
  
  
  return (
    <div className="max-w-[1280px] m-auto!">

      <Section1 />
      <QuickStats />
      {/* <KeyAudiences /> */}
      {/* <EventCategories /> */}
      {/* <EventHighlights /> */}
      {/* <ChurchMap /> */}
      {/* <ActivityFeed /> */}
      {/* <LeadershipSportlight /> */}
      {/* <SermonHighlights /> */}
      {/* <CommunityImpact /> */}
      <Newsletter />




      {/* <ImmediateValueSection /> */}
      {/* <KeyAudiencesSection /> */}
      {/* <RandomBibleText /> */}
      {/* <ChurchPrograms /> */}
      {/* <Testimonials /> */}
      {/* <PrayerGroup /> */}
      


    </div>
  );
}
