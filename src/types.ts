export interface Program {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
  img: string;
}

export interface Project {
  id: string;
  programId: string;
  title: string;
  location: string;
  beneficiaries: string;
  challenge: string;
  intervention: string;
  results: string;
  img: string;
  images?: string[];
  beforeImage?: string;
  afterImage?: string;
  donor?: string;
  objectives?: string[];
  impacts?: {
    category: string;
    points: string[];
  }[];
  lessonsLearned?: string[];
  sustainability?: string[];
}

export interface Story {
  id: string;
  title: string;
  beneficiary: string;
  location: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  quote: string;
  img: string;
  videoUrl?: string;
  date: string;
}

export interface Publication {
  id: string;
  title: string;
  category: 'Annual Report' | 'Strategic Plan' | 'Research' | 'Policy' | 'Newsletter';
  year: number;
  description: string;
  downloadUrl: string;
  fileSize: string;
  img?: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  tier: 'Strategic' | 'Funding' | 'Implementing';
}
