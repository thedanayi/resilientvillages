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
    img: "/images/munhande2.jpg"
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
    img: "/images/water-harvesting (1).jpg"
  }
];

export async function getProjects(): Promise<Project[]> {
  return Promise.resolve(projects);
}
