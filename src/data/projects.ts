import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "munhande-garden",
    programId: "climate-agriculture",
    title: "Munhande Nutrition Garden Project",
    location: "Munhande Village",
    beneficiaries: "120 Families",
    challenge: "Severe droughts led to chronic food insecurity and malnutrition among children.",
    intervention: "Established a solar-powered borehole and drip irrigation system for a 2-hectare community garden.",
    results: "Year-round vegetable production, improved household nutrition, and surplus sales paying school fees.",
    img: "https://images.unsplash.com/photo-1592424001807-fbd77732a39a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "water-harvesting",
    programId: "wash",
    title: "Water Harvesting Expansion",
    location: "Chaka District",
    beneficiaries: "3,500 People",
    challenge: "Women walked up to 8km daily to fetch unsafe surface water.",
    intervention: "Constructed 5 large-scale rainwater harvesting weirs and rehabilitated 3 community boreholes.",
    results: "Water access reduced to under 500m. 80% reduction in waterborne disease cases at local clinics.",
    img: "https://images.unsplash.com/photo-1541888046897-88981180cf2a?q=80&w=800&auto=format&fit=crop"
  }
];

export async function getProjects(): Promise<Project[]> {
  return Promise.resolve(projects);
}
