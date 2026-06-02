import { Program } from '../types';

export const programs: Program[] = [
  {
    id: "climate-agriculture",
    title: "Climate-Smart Agriculture",
    description: "Equipping rural farmers with sustainable techniques to adapt to climate change, ensuring food security and economic stability.",
    outcomes: ["Increased crop yields", "Soil preservation", "Drought resilience"],
    img: "https://images.unsplash.com/photo-1592686884488-81df68153406?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "wash",
    title: "Water & Sanitation (WASH)",
    description: "Providing access to clean water infrastructure and sanitation facilities to eliminate waterborne diseases in vulnerable communities.",
    outcomes: ["Reduced disease rates", "Accessible clean water", "Improved hygiene"],
    img: "https://images.unsplash.com/photo-1498020359781-ccaf40989f5c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "environmental-healing",
    title: "Leading Environmental Healing",
    description: "Community-driven initiatives to restore degraded landscapes, plant trees, and manage natural resources sustainably.",
    outcomes: ["Reforestation", "Erosion control", "Community management"],
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
  }
];

export async function getPrograms(): Promise<Program[]> {
  // Simulating an API call for future CMS integration
  return Promise.resolve(programs);
}
