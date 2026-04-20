'use client';

import { useState, useEffect } from 'react';

export interface TeamMember {
  id: number;
  name: string;
  slug: string;
  role: string;
  department: string;
  departmentDescription?: string;
  church: string;
  email: string;
  phone: string;
  bio: string;
  shortBio?: string;
  expertise: string[];
  photo?: string;
  country: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  displayOrder: number;
  isActive: boolean;
  yearsOfService?: number;
  source: 'strapi' | 'mock';
}

export interface TeamDepartment {
  department: string;
  description: string;
  members: TeamMember[];
}

interface UseTeamApiResult {
  teamMembers: TeamMember[];
  departments: TeamDepartment[];
  loading: boolean;
  error: Error | null;
}

// Mock data based on the hardcoded team data
const mockTeamMembers: TeamMember[] = [
  // Executive Leadership
  {
    id: 1,
    name: "Pastor Sean Shepherd",
    slug: "pastor-sean-shepherd",
    role: "Youth Director",
    department: "executive_leadership",
    departmentDescription: "Overall vision and strategic direction for ANYA",
    church: "Roseau Central SDA Church",
    email: "s.shepherd@anyadominica.org",
    phone: "+1 (767) 440-1001",
    bio: "Provides spiritual leadership and strategic direction for youth ministry across all churches, focusing on spiritual growth and leadership development.",
    expertise: ["Youth Ministry", "Strategic Planning", "Spiritual Leadership", "Program Development"],
    country: "dominica",
    displayOrder: 1,
    isActive: true,
    source: 'mock'
  },
  {
    id: 2,
    name: "Ms. Kalisha Aaron",
    slug: "kalisha-aaron",
    role: "President",
    department: "executive_leadership",
    departmentDescription: "Overall vision and strategic direction for ANYA",
    church: "Portsmouth SDA Church",
    email: "k.aaron@anyadominica.org",
    phone: "+1 (767) 440-1002",
    bio: "Leads the executive team in setting vision and strategy for ANYA, overseeing all ministry operations and church collaborations.",
    expertise: ["Executive Leadership", "Strategic Vision", "Ministry Coordination", "Team Management"],
    country: "dominica",
    displayOrder: 2,
    isActive: true,
    source: 'mock'
  },
  // Vice Presidents
  {
    id: 3,
    name: "Ms. Cathy Dodds-Bully",
    slug: "cathy-dodds-bully",
    role: "1st Vice President",
    department: "vice_presidents",
    departmentDescription: "Leading ANYA activities across regions",
    church: "Portsmouth District Churches",
    email: "c.dodds-bully@anyadominica.org",
    phone: "+1 (767) 440-1010",
    bio: "Supports the President in executive leadership and oversees regional coordination, ensuring effective implementation of ANYA initiatives.",
    expertise: ["Executive Support", "Regional Coordination", "Leadership Development", "Program Implementation"],
    country: "dominica",
    displayOrder: 3,
    isActive: true,
    source: 'mock'
  },
  {
    id: 4,
    name: "Ms. Julia Martha Jarvis",
    slug: "julia-martha-jarvis",
    role: "2nd Vice President",
    department: "vice_presidents",
    departmentDescription: "Leading ANYA activities across regions",
    church: "Scott's Head SDA Church",
    email: "j.jarvis@anyadominica.org",
    phone: "+1 (767) 440-1011",
    bio: "Focuses on strategic partnerships and special projects, working closely with church leadership to expand ANYA's impact.",
    expertise: ["Strategic Partnerships", "Project Management", "Community Engagement", "Church Relations"],
    country: "dominica",
    displayOrder: 4,
    isActive: true,
    source: 'mock'
  },
  // Secretarial Team
  {
    id: 5,
    name: "Samine Darroux",
    slug: "samine-darroux",
    role: "Secretary",
    department: "secretarial_team",
    departmentDescription: "Administrative coordination and record keeping",
    church: "Goodwill SDA Church",
    email: "s.darroux@anyadominica.org",
    phone: "+1 (767) 440-1020",
    bio: "Manages all official records, meeting minutes, and correspondence for ANYA, ensuring efficient communication and documentation.",
    expertise: ["Record Keeping", "Administrative Management", "Communication", "Documentation"],
    country: "dominica",
    displayOrder: 5,
    isActive: true,
    source: 'mock'
  },
  {
    id: 6,
    name: "Dahlia Byam",
    slug: "dahlia-byam",
    role: "Assistant Secretary",
    department: "secretarial_team",
    departmentDescription: "Administrative coordination and record keeping",
    church: "St. Joseph SDA Church",
    email: "d.byam@anyadominica.org",
    phone: "+1 (767) 440-1021",
    bio: "Supports the Secretary in administrative tasks, manages member communications, and assists with meeting coordination.",
    expertise: ["Administrative Support", "Member Communications", "Meeting Coordination", "Follow-up Management"],
    country: "dominica",
    displayOrder: 6,
    isActive: true,
    source: 'mock'
  },
  // Finance Team
  {
    id: 7,
    name: "Mr. Kenuel Letang",
    slug: "kenuel-letang",
    role: "Treasurer",
    department: "finance_team",
    departmentDescription: "Financial management and stewardship",
    church: "Roseau Central SDA Church",
    email: "k.letang@anyadominica.org",
    phone: "+1 (767) 440-1030",
    bio: "Oversees all financial operations, budgeting, and stewardship of resources, ensuring transparency and accountability.",
    expertise: ["Financial Management", "Budgeting", "Stewardship", "Financial Reporting"],
    country: "dominica",
    displayOrder: 7,
    isActive: true,
    source: 'mock'
  },
  {
    id: 8,
    name: "Mrs. Annel Fredrick",
    slug: "annel-fredrick",
    role: "Assistant Treasurer",
    department: "finance_team",
    departmentDescription: "Financial management and stewardship",
    church: "Portsmouth SDA Church",
    email: "a.fredrick@anyadominica.org",
    phone: "+1 (767) 440-1031",
    bio: "Assists in financial management, handles day-to-day transactions, and supports church financial reporting and compliance.",
    expertise: ["Financial Operations", "Transaction Processing", "Compliance", "Financial Support"],
    country: "dominica",
    displayOrder: 8,
    isActive: true,
    source: 'mock'
  },
  // Chaplaincy
  {
    id: 9,
    name: "Mr. Dave Antoine",
    slug: "dave-antoine",
    role: "Chaplain",
    department: "chaplaincy",
    departmentDescription: "Spiritual guidance and pastoral care",
    church: "Roseau Central SDA Church",
    email: "d.antoine@anyadominica.org",
    phone: "+1 (767) 440-1040",
    bio: "Provides spiritual guidance, pastoral care, and counseling support for ANYA members and leaders, fostering spiritual growth.",
    expertise: ["Spiritual Guidance", "Pastoral Care", "Counseling", "Spiritual Development"],
    country: "dominica",
    displayOrder: 9,
    isActive: true,
    source: 'mock'
  },
  {
    id: 10,
    name: "Mr. Timothy Abraham",
    slug: "timothy-abraham",
    role: "Assistant Chaplain",
    department: "chaplaincy",
    departmentDescription: "Spiritual guidance and pastoral care",
    church: "Portsmouth SDA Church",
    email: "t.abraham@anyadominica.org",
    phone: "+1 (767) 440-1041",
    bio: "Supports the Chaplain in providing spiritual care, organizing prayer initiatives, and assisting with spiritual programming.",
    expertise: ["Spiritual Support", "Prayer Ministry", "Youth Counseling", "Program Assistance"],
    country: "dominica",
    displayOrder: 10,
    isActive: true,
    source: 'mock'
  },
  // Education Department
  {
    id: 11,
    name: "Mrs. Igna Vidal",
    slug: "igna-vidal",
    role: "Education Director",
    department: "education_department",
    departmentDescription: "Educational programs and leadership training",
    church: "Roseau Central SDA Church",
    email: "i.vidal@anyadominica.org",
    phone: "+1 (767) 440-1050",
    bio: "Develops and oversees educational programs, leadership training, and discipleship initiatives for youth across all churches.",
    expertise: ["Educational Programming", "Leadership Training", "Discipleship", "Curriculum Development"],
    country: "dominica",
    displayOrder: 11,
    isActive: true,
    source: 'mock'
  },
  // Public Relations Team
  {
    id: 12,
    name: "Mrs. Jeannette Languedoc-Barry",
    slug: "jeannette-languedoc-barry",
    role: "Public Relations Officer",
    department: "public_relations_team",
    departmentDescription: "Communication and public engagement",
    church: "Roseau Central SDA Church",
    email: "j.languedoc-barry@anyadominica.org",
    phone: "+1 (767) 440-1080",
    bio: "Manages all communications, media relations, and public engagement for ANYA, enhancing visibility and community impact.",
    expertise: ["Public Relations", "Media Management", "Community Engagement", "Strategic Communication"],
    country: "dominica",
    displayOrder: 12,
    isActive: true,
    source: 'mock'
  }
];

export default function useTeamApi(): UseTeamApiResult {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        
        const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';
        const response = await fetch(`${STRAPI_URL}/team-members?populate=*&sort=DisplayOrder:asc`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch team members from Strapi');
        }
        
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          const strapiMembers: TeamMember[] = data.data.map((item: any) => ({
            id: item.id,
            name: item.Name || item.attributes?.Name,
            slug: item.Slug || item.attributes?.Slug,
            role: item.Role || item.attributes?.Role,
            department: item.Department || item.attributes?.Department,
            departmentDescription: item.DepartmentDescription || item.attributes?.DepartmentDescription,
            church: item.Church || item.attributes?.Church,
            email: item.Email || item.attributes?.Email,
            phone: item.Phone || item.attributes?.Phone,
            bio: item.Bio || item.attributes?.Bio,
            shortBio: item.ShortBio || item.attributes?.ShortBio,
            expertise: item.Expertise || item.attributes?.Expertise || [],
            photo: item.Photo?.url 
              ? `${STRAPI_URL.replace('/api', '')}${item.Photo.url}`
              : item.attributes?.Photo?.data?.attributes?.url 
                ? `${STRAPI_URL.replace('/api', '')}${item.attributes.Photo.data.attributes.url}`
                : undefined,
            country: item.Country || item.attributes?.Country || 'dominica',
            socialLinks: item.SocialLinks || item.attributes?.SocialLinks,
            displayOrder: item.DisplayOrder || item.attributes?.DisplayOrder || 0,
            isActive: item.IsActive ?? item.attributes?.IsActive ?? true,
            yearsOfService: item.YearsOfService || item.attributes?.YearsOfService,
            source: 'strapi' as const
          }));
          
          setTeamMembers(strapiMembers);
        } else {
          // Use mock data as fallback
          setTeamMembers(mockTeamMembers);
        }
      } catch (err) {
        console.log('Using mock team data:', err);
        setTeamMembers(mockTeamMembers);
        setError(null); // Don't set error, just use mock data
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // Group members by department
  const departments: TeamDepartment[] = teamMembers
    .reduce((acc: TeamDepartment[], member) => {
      const existingDept = acc.find(d => d.department === member.department);
      if (existingDept) {
        existingDept.members.push(member);
      } else {
        acc.push({
          department: member.department,
          description: member.departmentDescription || getDepartmentDescription(member.department),
          members: [member]
        });
      }
      return acc;
    }, [])
    .map(dept => ({
      ...dept,
      members: dept.members.sort((a, b) => a.displayOrder - b.displayOrder)
    }));

  return { teamMembers, departments, loading, error };
}

function getDepartmentDescription(department: string): string {
  const descriptions: Record<string, string> = {
    'executive_leadership': 'Overall vision and strategic direction for ANYA',
    'vice_presidents': 'Leading ANYA activities across regions',
    'secretarial_team': 'Administrative coordination and record keeping',
    'finance_team': 'Financial management and stewardship',
    'chaplaincy': 'Spiritual guidance and pastoral care',
    'education_department': 'Educational programs and leadership training',
    'uniform_club_leaders': 'Pathfinder and Adventurer club leadership',
    'fundraising_team': 'Resource development and financial support',
    'public_relations_team': 'Communication and public engagement',
    'social_cultural_team': 'Community engagement and cultural activities',
    'music_ministry': 'Worship and music coordination',
    'health_ministry': 'Health programs and wellness initiatives',
    'other': 'Other ministry support'
  };
  return descriptions[department] || 'Ministry support';
}

// Helper function to format department name for display
export function formatDepartmentName(department: string): string {
  return department
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
