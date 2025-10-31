// app/team/page.tsx
import Link from 'next/link';

export default function TeamPage() {
  // const leadershipTeams = [
  //   {
  //     department: "Executive Leadership",
  //     description: "Overall vision and strategic direction for ANYA Dominica",
  //     members: [
  //       {
  //         name: "Pastor Sean Shepherd",
  //         role: "Youth Director",
  //         church: "Roseau Central SDA Church",
  //         email: "m.laurent@anyadominica.org",
  //         phone: "+1 (767) 440-1001",
  //         bio: "With over 15 years in youth ministry, Pastor Laurent provides spiritual guidance and strategic leadership for ANYA's island-wide initiatives.",
  //         expertise: ["Youth Ministry", "Strategic Planning", "Leadership Development"],
  //         image: "/team/pastor-laurent.jpg"
  //       },
  //       {
  //         name: "Ms. Kalisha Aaron",
  //         role: "President",
  //         church: "Portsmouth SDA Church",
  //         email: "m.john@anyadominica.org",
  //         phone: "+1 (767) 440-1002",
  //         bio: "Sister John coordinates program implementation across all 90 churches and ensures effective communication between regions.",
  //         expertise: ["Program Management", "Communication", "Event Planning"],
  //         image: "/team/maria-john.jpg"
  //       },
        
  //     ]
  //   },
  //   {
  //     department: "Vice Presidents",
  //     description: "Leading ANYA activities across Dominica's 10 regions",
  //     members: [
  //       {
  //         name: "Ms. Cathy Dodds-Bully",
  //         role: "1st Vice President",
  //         church: "Portsmouth District Churches",
  //         email: "a.frederick@anyadominica.org",
  //         phone: "+1 (767) 440-1010",
  //         bio: "Coordinates youth activities across 12 churches in the northern region, focusing on leadership development.",
  //         expertise: ["Regional Coordination", "Youth Mentorship", "Community Outreach"],
  //         image: "/team/angela-frederick.jpg"
  //       },
  //       {
  //         name: "Ms. Julia Martha Jarvis",
  //         role: "2nd Vice President",
  //         church: "Scott's Head SDA Church",
  //         email: "j.pascal@anyadominica.org",
  //         phone: "+1 (767) 440-1011",
  //         bio: "Leads southern region initiatives with emphasis on evangelism and community service projects.",
  //         expertise: ["Evangelism", "Project Management", "Volunteer Coordination"],
  //         image: "/team/james-pascal.jpg"
  //       },
  //     ]
  //   },
  //   {
  //     department: "Secretarial Team",
  //     description: "Leading specific ministry areas across all churches",
  //     members: [
  //       {
  //         name: "Samine Darroux",
  //         role: "Secretary",
  //         church: "Goodwill SDA Church",
  //         email: "r.joseph@anyadominica.org",
  //         phone: "+1 (767) 440-1020",
  //         bio: "Develops worship teams and musical programs that engage youth across denominational and cultural backgrounds.",
  //         expertise: ["Worship Leading", "Music Ministry", "Team Building"],
  //         image: "/team/rachel-joseph.jpg"
  //       },
  //       {
  //         name: "Dahlia Byam",
  //         role: "Assistant Secretary",
  //         church: "St. Joseph SDA Church",
  //         email: "s.charles@anyadominica.org",
  //         phone: "+1 (767) 440-1021",
  //         bio: "Oversees Pathfinder and Adventurer clubs across Dominica, focusing on character development and outdoor education.",
  //         expertise: ["Youth Development", "Outdoor Education", "Character Building"],
  //         image: "/team/samuel-charles.jpg"
  //       },
        
  //     ]
  //   },
  //   {
  //     department: "Finance Team",
  //     description: "Administrative and operational support team",
  //     members: [
  //       {
  //         name: "Mr. Kenuel Letang",
  //         role: "Treasurer",
  //         church: "Roseau Central SDA Church",
  //         email: "s.matthew@anyadominica.org",
  //         phone: "+1 (767) 440-1030",
  //         bio: "Manages ALL communications, social media, and public relations for ANYA Dominica.",
  //         expertise: ["Communications", "Social Media", "Public Relations"],
  //         image: "/team/sarah-matthew.jpg"
  //       },
  //       {
  //         name: "Mrs. Annel Fredrick",
  //         role: "Assistant Treasurer",
  //         church: "Portsmouth SDA Church",
  //         email: "d.roberts@anyadominica.org",
  //         phone: "+1 (767) 440-1031",
  //         bio: "Manages website, digital platforms, and media production for ANYA's online presence.",
  //         expertise: ["IT Support", "Media Production", "Web Development"],
  //         image: "/team/daniel-roberts.jpg"
  //       },
  //       {
  //         name: "Mrs. Elenora James-Mitchel",
  //         role: "Assistant Treasurer",
  //         church: "Marigot SDA Church",
  //         email: "e.laurent@anyadominica.org",
  //         phone: "+1 (767) 440-1032",
  //         bio: "Provides administrative support, handles inquiries, and coordinates office operations.",
  //         expertise: ["Administration", "Customer Service", "Office Management"],
  //         image: "/team/emily-laurent.jpg"
  //       }
  //     ]
  //   },
  //   {
  //     department: "Chaplaincy",
  //     description: "Administrative and operational support team",
  //     members: [
  //       {
  //         name: "Mr. Dave Antoine",
  //         role: "Chaplian",
  //         church: "Roseau Central SDA Church",
  //         email: "s.matthew@anyadominica.org",
  //         phone: "+1 (767) 440-1030",
  //         bio: "Manages ALL communications, social media, and public relations for ANYA Dominica.",
  //         expertise: ["Communications", "Social Media", "Public Relations"],
  //         image: "/team/sarah-matthew.jpg"
  //       },
  //       {
  //         name: "Mr. Timothy Abraham",
  //         role: "Assistant Chaplian",
  //         church: "Portsmouth SDA Church",
  //         email: "d.roberts@anyadominica.org",
  //         phone: "+1 (767) 440-1031",
  //         bio: "Manages website, digital platforms, and media production for ANYA's online presence.",
  //         expertise: ["IT Support", "Media Production", "Web Development"],
  //         image: "/team/daniel-roberts.jpg"
  //       },
        
  //     ]
  //   },
  //   {
  //     department: "Education Department",
  //     description: "Administrative and operational support team",
  //     members: [
  //       {
  //         name: "Mrs. Igna Vidal",
  //         role: "Education Director",
  //         church: "Roseau Central SDA Church",
  //         email: "s.matthew@anyadominica.org",
  //         phone: "+1 (767) 440-1030",
  //         bio: "Manages ALL communications, social media, and public relations for ANYA Dominica.",
  //         expertise: ["Communications", "Social Media", "Public Relations"],
  //         image: "/team/sarah-matthew.jpg"
  //       },
  //       {
  //         name: "Ms. Sonita Toussaint",
  //         role: "Assistant",
  //         church: "Portsmouth SDA Church",
  //         email: "d.roberts@anyadominica.org",
  //         phone: "+1 (767) 440-1031",
  //         bio: "Manages website, digital platforms, and media production for ANYA's online presence.",
  //         expertise: ["IT Support", "Media Production", "Web Development"],
  //         image: "/team/daniel-roberts.jpg"
  //       },
        
  //     ]
  //   },
  //   {
  //     department: "Uniform Club Leaders",
  //     description: "Administrative and operational support team",
  //     members: [
  //       {
  //         name: "Mrs. Norma Leblanc-Abraham",
  //         role: "Master Guide Coordinator",
  //         church: "Roseau Central SDA Church",
  //         email: "s.matthew@anyadominica.org",
  //         phone: "+1 (767) 440-1030",
  //         bio: "Manages ALL communications, social media, and public relations for ANYA Dominica.",
  //         expertise: ["Communications", "Social Media", "Public Relations"],
  //         image: "/team/sarah-matthew.jpg"
  //       },
  //       {
  //         name: "Mrs. Fellicia Royer",
  //         role: "Pathfinder Coordinator",
  //         church: "Portsmouth SDA Church",
  //         email: "d.roberts@anyadominica.org",
  //         phone: "+1 (767) 440-1031",
  //         bio: "Manages website, digital platforms, and media production for ANYA's online presence.",
  //         expertise: ["IT Support", "Media Production", "Web Development"],
  //         image: "/team/daniel-roberts.jpg"
  //       },
  //       {
  //         name: "Ms. Verlyn James",
  //         role: "Adventurer",
  //         church: "Portsmouth SDA Church",
  //         email: "d.roberts@anyadominica.org",
  //         phone: "+1 (767) 440-1031",
  //         bio: "Manages website, digital platforms, and media production for ANYA's online presence.",
  //         expertise: ["IT Support", "Media Production", "Web Development"],
  //         image: "/team/daniel-roberts.jpg"
  //       },
  //       {
  //         name: "Mrs. sari Rolle",
  //         role: "Senior Youth Leader",
  //         church: "Portsmouth SDA Church",
  //         email: "d.roberts@anyadominica.org",
  //         phone: "+1 (767) 440-1031",
  //         bio: "Manages website, digital platforms, and media production for ANYA's online presence.",
  //         expertise: ["IT Support", "Media Production", "Web Development"],
  //         image: "/team/daniel-roberts.jpg"
  //       },
        
  //     ]
  //   },
  //   {
  //     department: "Fundraising Team",
  //     description: "Administrative and operational support team",
  //     members: [
  //       {
  //         name: "Mrs. sari Rolle",
  //         role: "Senior Youth Leader",
  //         church: "Portsmouth SDA Church",
  //         email: "d.roberts@anyadominica.org",
  //         phone: "+1 (767) 440-1031",
  //         bio: "Manages website, digital platforms, and media production for ANYA's online presence.",
  //         expertise: ["IT Support", "Media Production", "Web Development"],
  //         image: "/team/daniel-roberts.jpg"
  //       },
  //       {
  //         name: "Ms. Sonita Toussaint",
  //         role: "Assistant",
  //         church: "Portsmouth SDA Church",
  //         email: "d.roberts@anyadominica.org",
  //         phone: "+1 (767) 440-1031",
  //         bio: "Manages website, digital platforms, and media production for ANYA's online presence.",
  //         expertise: ["IT Support", "Media Production", "Web Development"],
  //         image: "/team/daniel-roberts.jpg"
  //       },
        
  //     ]
  //   },
  //   {
  //     department: "Public Relations Team",
  //     description: "Administrative and operational support team",
  //     members: [
  //       {
  //         name: "Mrs. Jeannette Languedoc-Barry",
  //         role: "PRO",
  //         church: "Roseau Central SDA Church",
  //         email: "s.matthew@anyadominica.org",
  //         phone: "+1 (767) 440-1030",
  //         bio: "Manages ALL communications, social media, and public relations for ANYA Dominica.",
  //         expertise: ["Communications", "Social Media", "Public Relations"],
  //         image: "/team/sarah-matthew.jpg"
  //       },
  //       {
  //         name: "Mrs. Igna Vidal",
  //         role: "Assistant PRO",
  //         church: "Portsmouth SDA Church",
  //         email: "d.roberts@anyadominica.org",
  //         phone: "+1 (767) 440-1031",
  //         bio: "Manages website, digital platforms, and media production for ANYA's online presence.",
  //         expertise: ["IT Support", "Media Production", "Web Development"],
  //         image: "/team/daniel-roberts.jpg"
  //       },
  //       {
  //         name: "Ms. Kelvida David",
  //         role: "Assistant PRO",
  //         church: "Portsmouth SDA Church",
  //         email: "d.roberts@anyadominica.org",
  //         phone: "+1 (767) 440-1031",
  //         bio: "Manages website, digital platforms, and media production for ANYA's online presence.",
  //         expertise: ["IT Support", "Media Production", "Web Development"],
  //         image: "/team/daniel-roberts.jpg"
  //       },
        
  //     ]
  //   },
  //   {
  //     department: "Social & Cultural Team",
  //     description: "Administrative and operational support team",
  //     members: [
  //       {
  //         name: "Mrs. navilla Challenger",
  //         role: "Leader",
  //         church: "Roseau Central SDA Church",
  //         email: "s.matthew@anyadominica.org",
  //         phone: "+1 (767) 440-1030",
  //         bio: "Manages ALL communications, social media, and public relations for ANYA Dominica.",
  //         expertise: ["Communications", "Social Media", "Public Relations"],
  //         image: "/team/sarah-matthew.jpg"
  //       },
  //       {
  //         name: "Mr. Delbert Defoe",
  //         role: "Assistant",
  //         church: "Portsmouth SDA Church",
  //         email: "d.roberts@anyadominica.org",
  //         phone: "+1 (767) 440-1031",
  //         bio: "Manages website, digital platforms, and media production for ANYA's online presence.",
  //         expertise: ["IT Support", "Media Production", "Web Development"],
  //         image: "/team/daniel-roberts.jpg"
  //       },
  //       {
  //         name: "Mr. Danphil Daniel",
  //         role: "Assistant",
  //         church: "Dublanc SDA Church",
  //         email: "d.roberts@anyadominica.org",
  //         phone: "+1 (767) 440-1031",
  //         bio: "Manages website, digital platforms, and media production for ANYA's online presence.",
  //         expertise: ["IT Support", "Media Production", "Web Development"],
  //         image: "/team/daniel-roberts.jpg"
  //       },
        
  //     ]
  //   },
  // ];


  const leadershipTeams = [
  {
    department: "Executive Leadership",
    description: "Overall vision and strategic direction for ANYA Dominica",
    members: [
      {
        name: "Pastor Sean Shepherd",
        role: "Youth Director",
        church: "Roseau Central SDA Church",
        email: "s.shepherd@anyadominica.org",
        phone: "+1 (767) 440-1001",
        bio: "Provides spiritual leadership and strategic direction for youth ministry across all 90 churches in Dominica, focusing on spiritual growth and leadership development.",
        expertise: ["Youth Ministry", "Strategic Planning", "Spiritual Leadership", "Program Development"],
        image: "/team/pastor-shepherd.jpg"
      },
      {
        name: "Ms. Kalisha Aaron",
        role: "President",
        church: "Portsmouth SDA Church",
        email: "k.aaron@anyadominica.org",
        phone: "+1 (767) 440-1002",
        bio: "Leads the executive team in setting vision and strategy for ANYA Dominica, overseeing all ministry operations and church collaborations across the island.",
        expertise: ["Executive Leadership", "Strategic Vision", "Ministry Coordination", "Team Management"],
        image: "/team/kalisha-aaron.jpg"
      },
    ]
  },
  {
    department: "Vice Presidents",
    description: "Leading ANYA activities across Dominica's 10 regions",
    members: [
      {
        name: "Ms. Cathy Dodds-Bully",
        role: "1st Vice President",
        church: "Portsmouth District Churches",
        email: "c.dodds-bully@anyadominica.org",
        phone: "+1 (767) 440-1010",
        bio: "Supports the President in executive leadership and oversees regional coordination, ensuring effective implementation of ANYA initiatives across all districts.",
        expertise: ["Executive Support", "Regional Coordination", "Leadership Development", "Program Implementation"],
        image: "/team/cathy-dodds-bully.jpg"
      },
      {
        name: "Ms. Julia Martha Jarvis",
        role: "2nd Vice President",
        church: "Scott's Head SDA Church",
        email: "j.jarvis@anyadominica.org",
        phone: "+1 (767) 440-1011",
        bio: "Focuses on strategic partnerships and special projects, working closely with church leadership to expand ANYA's impact in communities across Dominica.",
        expertise: ["Strategic Partnerships", "Project Management", "Community Engagement", "Church Relations"],
        image: "/team/julia-jarvis.jpg"
      },
    ]
  },
  {
    department: "Secretarial Team",
    description: "Administrative coordination and record keeping",
    members: [
      {
        name: "Samine Darroux",
        role: "Secretary",
        church: "Goodwill SDA Church",
        email: "s.darroux@anyadominica.org",
        phone: "+1 (767) 440-1020",
        bio: "Manages all official records, meeting minutes, and correspondence for ANYA Dominica, ensuring efficient communication and documentation across the organization.",
        expertise: ["Record Keeping", "Administrative Management", "Communication", "Documentation"],
        image: "/team/samine-darroux.jpg"
      },
      {
        name: "Dahlia Byam",
        role: "Assistant Secretary",
        church: "St. Joseph SDA Church",
        email: "d.byam@anyadominica.org",
        phone: "+1 (767) 440-1021",
        bio: "Supports the Secretary in administrative tasks, manages member communications, and assists with meeting coordination and follow-up actions.",
        expertise: ["Administrative Support", "Member Communications", "Meeting Coordination", "Follow-up Management"],
        image: "/team/dahlia-byam.jpg"
      },
    ]
  },
  {
    department: "Finance Team",
    description: "Financial management and stewardship",
    members: [
      {
        name: "Mr. Kenuel Letang",
        role: "Treasurer",
        church: "Roseau Central SDA Church",
        email: "k.letang@anyadominica.org",
        phone: "+1 (767) 440-1030",
        bio: "Oversees all financial operations, budgeting, and stewardship of resources for ANYA Dominica, ensuring transparency and accountability in all financial matters.",
        expertise: ["Financial Management", "Budgeting", "Stewardship", "Financial Reporting"],
        image: "/team/kenuel-letang.jpg"
      },
      {
        name: "Mrs. Annel Fredrick",
        role: "Assistant Treasurer",
        church: "Portsmouth SDA Church",
        email: "a.fredrick@anyadominica.org",
        phone: "+1 (767) 440-1031",
        bio: "Assists in financial management, handles day-to-day transactions, and supports church financial reporting and compliance across all regions.",
        expertise: ["Financial Operations", "Transaction Processing", "Compliance", "Financial Support"],
        image: "/team/annel-fredrick.jpg"
      },
      {
        name: "Mrs. Elenora James-Mitchel",
        role: "Assistant Treasurer",
        church: "Marigot SDA Church",
        email: "e.james-mitchel@anyadominica.org",
        phone: "+1 (767) 440-1032",
        bio: "Provides financial administrative support, assists with budget tracking, and helps coordinate financial communications with member churches.",
        expertise: ["Financial Administration", "Budget Tracking", "Church Communications", "Administrative Support"],
        image: "/team/elenora-james-mitchel.jpg"
      }
    ]
  },
  {
    department: "Chaplaincy",
    description: "Spiritual guidance and pastoral care",
    members: [
      {
        name: "Mr. Dave Antoine",
        role: "Chaplain",
        church: "Roseau Central SDA Church",
        email: "d.antoine@anyadominica.org",
        phone: "+1 (767) 440-1040",
        bio: "Provides spiritual guidance, pastoral care, and counseling support for ANYA members and leaders across Dominica, fostering spiritual growth and well-being.",
        expertise: ["Spiritual Guidance", "Pastoral Care", "Counseling", "Spiritual Development"],
        image: "/team/dave-antoine.jpg"
      },
      {
        name: "Mr. Timothy Abraham",
        role: "Assistant Chaplain",
        church: "Portsmouth SDA Church",
        email: "t.abraham@anyadominica.org",
        phone: "+1 (767) 440-1041",
        bio: "Supports the Chaplain in providing spiritual care, organizing prayer initiatives, and assisting with spiritual programming for youth across the island.",
        expertise: ["Spiritual Support", "Prayer Ministry", "Youth Counseling", "Program Assistance"],
        image: "/team/timothy-abraham.jpg"
      },
    ]
  },
  {
    department: "Education Department",
    description: "Educational programs and leadership training",
    members: [
      {
        name: "Mrs. Igna Vidal",
        role: "Education Director",
        church: "Roseau Central SDA Church",
        email: "i.vidal@anyadominica.org",
        phone: "+1 (767) 440-1050",
        bio: "Develops and oversees educational programs, leadership training, and discipleship initiatives for youth across all ANYA member churches in Dominica.",
        expertise: ["Educational Programming", "Leadership Training", "Discipleship", "Curriculum Development"],
        image: "/team/igna-vidal.jpg"
      },
      {
        name: "Ms. Sonita Toussaint",
        role: "Assistant Education Director",
        church: "Portsmouth SDA Church",
        email: "s.toussaint@anyadominica.org",
        phone: "+1 (767) 440-1051",
        bio: "Supports educational program implementation, assists with training coordination, and helps develop resources for youth spiritual development.",
        expertise: ["Program Implementation", "Training Coordination", "Resource Development", "Educational Support"],
        image: "/team/sonita-toussaint.jpg"
      },
    ]
  },
  {
    department: "Uniform Club Leaders",
    description: "Pathfinder and Adventurer club leadership",
    members: [
      {
        name: "Mrs. Norma Leblanc-Abraham",
        role: "Master Guide Coordinator",
        church: "Roseau Central SDA Church",
        email: "n.leblanc-abraham@anyadominica.org",
        phone: "+1 (767) 440-1060",
        bio: "Coordinates Master Guide training and development across Dominica, equipping leaders for effective Pathfinder and Adventurer ministry.",
        expertise: ["Master Guide Training", "Leadership Development", "Club Coordination", "Youth Ministry"],
        image: "/team/norma-leblanc-abraham.jpg"
      },
      {
        name: "Mrs. Fellicia Royer",
        role: "Pathfinder Coordinator",
        church: "Portsmouth SDA Church",
        email: "f.royer@anyadominica.org",
        phone: "+1 (767) 440-1061",
        bio: "Oversees Pathfinder club operations and activities across Dominica, focusing on character development and outdoor education for youth.",
        expertise: ["Pathfinder Leadership", "Character Development", "Outdoor Education", "Club Management"],
        image: "/team/fellicia-royer.jpg"
      },
      {
        name: "Ms. Verlyn James",
        role: "Adventurer Coordinator",
        church: "Portsmouth SDA Church",
        email: "v.james@anyadominica.org",
        phone: "+1 (767) 440-1062",
        bio: "Leads Adventurer club programs for younger children, creating engaging activities that build foundation for spiritual growth and development.",
        expertise: ["Adventurer Leadership", "Early Childhood Ministry", "Activity Planning", "Spiritual Foundations"],
        image: "/team/verlyn-james.jpg"
      },
      {
        name: "Mrs. Sari Rolle",
        role: "Senior Youth Leader",
        church: "Portsmouth SDA Church",
        email: "s.rolle@anyadominica.org",
        phone: "+1 (767) 440-1063",
        bio: "Mentors and guides senior youth in their spiritual journey, providing leadership opportunities and supporting their transition to adult roles in the church.",
        expertise: ["Youth Mentoring", "Leadership Development", "Spiritual Guidance", "Transition Support"],
        image: "/team/sari-rolle.jpg"
      },
    ]
  },
  {
    department: "Fundraising Team",
    description: "Resource development and financial support",
    members: [
      {
        name: "Mrs. Sari Rolle",
        role: "Fundraising Coordinator",
        church: "Portsmouth SDA Church",
        email: "s.rolle@anyadominica.org",
        phone: "+1 (767) 440-1070",
        bio: "Develops and implements fundraising strategies to support ANYA's ministry programs and initiatives across Dominica.",
        expertise: ["Fundraising Strategy", "Resource Development", "Donor Relations", "Financial Planning"],
        image: "/team/sari-rolle.jpg"
      },
      {
        name: "Ms. Sonita Toussaint",
        role: "Assistant Fundraising Coordinator",
        church: "Portsmouth SDA Church",
        email: "s.toussaint@anyadominica.org",
        phone: "+1 (767) 440-1071",
        bio: "Supports fundraising activities, coordinates events, and assists with donor communication and relationship management.",
        expertise: ["Event Coordination", "Donor Communication", "Fundraising Support", "Relationship Management"],
        image: "/team/sonita-toussaint.jpg"
      },
    ]
  },
  {
    department: "Public Relations Team",
    description: "Communication and public engagement",
    members: [
      {
        name: "Mrs. Jeannette Languedoc-Barry",
        role: "Public Relations Officer",
        church: "Roseau Central SDA Church",
        email: "j.languedoc-barry@anyadominica.org",
        phone: "+1 (767) 440-1080",
        bio: "Manages ALL communications, media relations, and public engagement for ANYA Dominica, enhancing visibility and community impact.",
        expertise: ["Public Relations", "Media Management", "Community Engagement", "Strategic Communication"],
        image: "/team/jeannette-languedoc-barry.jpg"
      },
      {
        name: "Mrs. Igna Vidal",
        role: "Assistant Public Relations Officer",
        church: "Portsmouth SDA Church",
        email: "i.vidal@anyadominica.org",
        phone: "+1 (767) 440-1081",
        bio: "Supports PR initiatives, manages social media platforms, and assists with content creation and distribution across communication channels.",
        expertise: ["Social Media Management", "Content Creation", "Digital Communication", "PR Support"],
        image: "/team/igna-vidal.jpg"
      },
      {
        name: "Ms. Kelvida David",
        role: "Assistant Public Relations Officer",
        church: "Portsmouth SDA Church",
        email: "k.david@anyadominica.org",
        phone: "+1 (767) 440-1082",
        bio: "Assists with media coordination, event promotion, and community outreach efforts to expand ANYA's presence across Dominica.",
        expertise: ["Media Coordination", "Event Promotion", "Community Outreach", "Publicity"],
        image: "/team/kelvida-david.jpg"
      },
    ]
  },
  {
    department: "Social & Cultural Team",
    description: "Community engagement and cultural activities",
    members: [
      {
        name: "Mrs. Navilla Challenger",
        role: "Social & Cultural Leader",
        church: "Roseau Central SDA Church",
        email: "n.challenger@anyadominica.org",
        phone: "+1 (767) 440-1090",
        bio: "Organizes social events, cultural activities, and community engagement initiatives that foster fellowship and celebrate Dominican heritage.",
        expertise: ["Event Planning", "Cultural Programming", "Community Engagement", "Fellowship Activities"],
        image: "/team/navilla-challenger.jpg"
      },
      {
        name: "Mr. Delbert Defoe",
        role: "Assistant Social & Cultural Leader",
        church: "Portsmouth SDA Church",
        email: "d.defoe@anyadominica.org",
        phone: "+1 (767) 440-1091",
        bio: "Supports social and cultural programming, assists with event coordination, and helps engage youth in community-building activities.",
        expertise: ["Program Support", "Event Coordination", "Youth Engagement", "Community Building"],
        image: "/team/delbert-defoe.jpg"
      },
      {
        name: "Mr. Danphil Daniel",
        role: "Assistant Social & Cultural Leader",
        church: "Dublanc SDA Church",
        email: "d.daniel@anyadominica.org",
        phone: "+1 (767) 440-1092",
        bio: "Assists in organizing cultural events and social activities, focusing on creating inclusive and engaging experiences for all ANYA members.",
        expertise: ["Cultural Events", "Social Activities", "Inclusive Programming", "Member Engagement"],
        image: "/team/danphil-daniel.jpg"
      },
    ]
  },
  ];
  const stats = [
    { number: "25", label: "Team Members" },
    { number: "5", label: "Regions Covered" },
    { number: "30+", label: "Churches Served" },
    { number: "24/7", label: "Dedicated Service" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20! bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center px-4! py-2! bg-white/20 rounded-full text-sm font-medium mb-4!">
              ANYA Dominica Leadership
            </div>
            <h1 className="text-5xl font-bold mb-6!">Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto! leading-relaxed">
              ANYA Executive is the governing body of the Adventist  National Youth Association that works with the youth department of the East Caribbean Conference of SDA to plan youth activites for SDA members ages 13-35 across the island.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12! bg-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6! text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-blue-50 rounded-2xl p-6!">
                <div className="text-3xl font-bold text-blue-600 mb-2!">{stat.number}</div>
                <div className="font-semibold text-gray-900">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-4xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">United in Service</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto! mb-6!"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              Our diverse team brings together experienced leaders, passionate coordinators, 
              and dedicated support staff—all working together to empower Adventist youth across Dominica.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Teams */}
      {leadershipTeams.map((team, teamIndex) => (
        <section key={teamIndex} className={`py-16! ${teamIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto! px-4! max-w-6xl">
            <div className="text-center mb-12!">
              <h2 className="text-3xl font-bold text-gray-900 mb-4!">{team.department}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto!">{team.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8!">
              {team.members.map((member, memberIndex) => (
                
                <div key={memberIndex} className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Member Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6! text-white">
                    <div className="flex items-center gap-x-4!">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{member.name}</h3>
                        <p className="text-blue-100 text-sm">{member.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="p-6!">
                    <div className="mb-4!">
                      <div className="flex items-center text-sm text-gray-600 mb-2!">
                        <svg className="w-4 h-4 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {member.church}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4!">{member.bio}</p>

                    {/* Expertise */}
                    <div className="mb-4!">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2!">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-1!">
                        {member.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="bg-blue-100 text-blue-700 px-2! py-1! rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="border-t border-gray-200 pt-4!">
                      <div className="space-y-2!">
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {member.email}
                        </a>
                        <div className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {member.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Volunteer Opportunities */}
      <section className="py-16! bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto! px-4! max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4!">Join Our Team</h2>
          <p className="text-xl text-green-100 mb-8! max-w-2xl mx-auto!">
            We're always looking for passionate individuals to help us empower Adventist youth across Dominica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4! justify-center">
            <Link 
              href="/volunteer"
              className="bg-white text-green-600 font-bold px-8! py-4! rounded-lg hover:bg-gray-100 transition-colors"
            >
              Volunteer Opportunities
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent text-white border-2 border-white font-bold px-8! py-4! rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16! bg-white">
        <div className="container mx-auto! px-4! max-w-4xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              Have questions or want to connect with our team? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8! text-center">
            <div className="bg-blue-50 rounded-2xl p-6!">
              <div className="text-3xl mb-4!">📧</div>
              <h3 className="font-bold text-gray-900 mb-2!">General Inquiries</h3>
              <a href="mailto:info@anyadominica.org" className="text-blue-600 hover:text-blue-700">
                info@anyadominica.org
              </a>
            </div>

            <div className="bg-green-50 rounded-2xl p-6!">
              <div className="text-3xl mb-4!">📞</div>
              <h3 className="font-bold text-gray-900 mb-2!">Main Office</h3>
              <div className="text-gray-600">+1 (767) 440-1000</div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6!">
              <div className="text-3xl mb-4!">🏢</div>
              <h3 className="font-bold text-gray-900 mb-2!">Visit Us</h3>
              <div className="text-gray-600 text-sm">ANYA Headquarters, Roseau, Dominica</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12! bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8! text-center">
            <div>
              <h3 className="font-bold text-gray-900 mb-3!">About ANYA</h3>
              <Link href="/about/mission" className="text-blue-600 hover:text-blue-700 block text-sm">
                Our Mission
              </Link>
              <Link href="/about/history" className="text-blue-600 hover:text-blue-700 block text-sm">
                Our History
              </Link>
              <Link href="/about/beliefs" className="text-blue-600 hover:text-blue-700 block text-sm">
                Our Beliefs
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3!">Get Involved</h3>
              <Link href="/volunteer" className="text-blue-600 hover:text-blue-700 block text-sm">
                Volunteer
              </Link>
              <Link href="/events/calendar" className="text-blue-600 hover:text-blue-700 block text-sm">
                Events
              </Link>
              <Link href="/donate" className="text-blue-600 hover:text-blue-700 block text-sm">
                Support Us
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3!">Resources</h3>
              <Link href="/churches/list" className="text-blue-600 hover:text-blue-700 block text-sm">
                30+ Churches
              </Link>
              <Link href="/news" className="text-blue-600 hover:text-blue-700 block text-sm">
                News & Updates
              </Link>
              <Link href="/resources/articles" className="text-blue-600 hover:text-blue-700 block text-sm">
                Downloads
              </Link>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3!">Connect</h3>
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 block text-sm">
                Contact
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}