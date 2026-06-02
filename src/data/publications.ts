import { Publication } from '../types';

export const publications: Publication[] = [
  {
    id: "annual-report-2025",
    title: "Annual Impact Report 2025",
    category: "Annual Report",
    year: 2025,
    description: "A comprehensive review of our initiatives, community reach, and financial accountability for the year 2025.",
    downloadUrl: "#",
    fileSize: "4.2 MB",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "strategic-plan-2026",
    title: "Strategic Plan 2026-2030",
    category: "Strategic Plan",
    year: 2025,
    description: "Our five-year roadmap detailing our goals for expanding climate-smart agriculture and deepening community resilience.",
    downloadUrl: "#",
    fileSize: "2.8 MB",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "research-wash-impact",
    title: "Impact of Solar Boreholes on Village Health",
    category: "Research",
    year: 2024,
    description: "A detailed study conducted in the Chaka District showing the correlation between local water access and the reduction of disease.",
    downloadUrl: "#",
    fileSize: "1.5 MB",
    img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "newsletter-q3-2025",
    title: "Resilience Quarterly - Q3 2025",
    category: "Newsletter",
    year: 2025,
    description: "Highlights from our Munhande Nutrition Garden and stories from the field.",
    downloadUrl: "#",
    fileSize: "1.1 MB",
    img: "https://images.unsplash.com/photo-1557425955-df376b5903c8?q=80&w=800&auto=format&fit=crop"
  }
];

export async function getPublications(): Promise<Publication[]> {
  return Promise.resolve(publications);
}
