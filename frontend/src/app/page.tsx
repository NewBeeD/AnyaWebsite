import Section1 from "@/components/HomePage/Section1";
import ImmediateValueSection from '@/components/HomePage/ImmediateValueSection/ImmediateValueSection'

import QuickStats from '@/components/HomePage/AnyaStats/QuickStats'

import RandomBibleText from '@/components/HomePage/BibleTexts/BibleTexts'
import Testimonials from '@/components/HomePage/Testimonials/Testimonials'

import ChurchPrograms from '@/components/HomePage/ChurchPrograms/ChurchPrograms'

import EventCategories from '@/components/HomePage/EventCategories/EventCategories'

import EventHighlights from '@/components/HomePage/EventHighlights/EventHighlights'

import ChurchMap from '@/components/HomePage/ChurchMap/ChurchMap'

import ActivityFeed from '@/components/HomePage/ActivityFeed/ActivityFeed'

import LeadershipSportlight from '@/components/HomePage/LeadershipSportlight/LeadershipSportlight'

import CommunityImpact from '@/components/HomePage/CommunityImpact/CommunityImpact'

import Newsletter from '@/components/HomePage/Newsletter/Newsletter'


export default function Home() {
  
  
  
  return (
    <div className="max-w-[1280px] m-auto!">

      <Section1 />
      <QuickStats />
      <ImmediateValueSection />
      {/* <KeyAudiences /> */}
      <EventCategories />
      <EventHighlights />
      <RandomBibleText />
      <ChurchPrograms />
      <ChurchMap />
      <ActivityFeed />
      <Testimonials />
      <LeadershipSportlight />
      {/* <SermonHighlights /> */}
      <CommunityImpact />
      <Newsletter />




      {/* <KeyAudiencesSection /> */}
      {/* <PrayerGroup /> */}
      


    </div>
  );
}
