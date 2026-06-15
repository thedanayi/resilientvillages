import { Project } from '../types';

/**
 * MIGRATION TO NEXT.JS & SANITY CMS:
 * This data fetching pattern is specifically designed to be easily migrated to Next.js Server Components.
 * When you migrate:
 * 1. Convert this file to fetch from Sanity instead of returning a hardcoded array.
 * 2. Next.js App Router will allow calling `await getProjects()` directly in page components (Server Components).
 * 
 * Example Sanity CMS migration:
 * 
 * import { client } from '@/lib/sanity';
 * 
 * export async function getProjects(): Promise<Project[]> {
 *   // GROQ query to fetch projects
 *   return await client.fetch(`*[_type == "project"] {
 *     _id, title, location, beneficiaries, challenge, intervention, results, 
 *     "img": image.asset->url, programId
 *   }`);
 * }
 */

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
    location: "Chirumhanzu District",
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
