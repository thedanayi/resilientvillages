import { Program } from '../types';

/**
 * MIGRATION TO NEXT.JS & SANITY CMS:
 * When migrating to Next.js App Router, you can call `await getPrograms()` directly within your Server Components.
 * 
 * Example Sanity CMS GROQ query replacement:
 * 
 * export async function getPrograms(): Promise<Program[]> {
 *   return await client.fetch(`*[_type == "program"] {
 *     _id, title, description, outcomes, "img": image.asset->url
 *   }`);
 * }
 */

export const programs: Program[] = [
  {
    id: "climate-agriculture",
    title: "Climate-Smart Agriculture and Livelihoods",
    description: "Equipping rural farmers with sustainable techniques to adapt to climate change, ensuring food security and economic stability.",
    outcomes: ["Increased crop yields", "Soil preservation", "Drought resilience"],
    img: "/images/Climate Smart Agriculture.jpg"
  },
  {
    id: "wash",
    title: "Water & Sanitation (WASH)",
    description: "Providing access to clean water infrastructure and sanitation facilities to eliminate waterborne diseases in vulnerable communities.",
    outcomes: ["Reduced disease rates", "Accessible clean water", "Improved hygiene"],
    img: "/images/water and sanitation.jpeg"
  },
  {
    id: "environmental-healing",
    title: "Leading Environmental Healing",
    description: "Community-driven initiatives to restore degraded landscapes, plant trees, and manage natural resources sustainably.",
    outcomes: ["Reforestation", "Erosion control", "Community management"],
    img: "/images/leading environmental healing.jpg"
  }
];

export async function getPrograms(): Promise<Program[]> {
  // Simulating an API call for future CMS integration
  return Promise.resolve(programs);
}
