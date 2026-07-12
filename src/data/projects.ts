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
    id: "mugari-tavagwisa-garden",
    programId: "climate-agriculture",
    title: "Mugari & Tavagwisa Nutrition Garden",
    location: "Ward 2, Chirumanzu District",
    beneficiaries: "Over 400 Households (>1,000 People)",
    donor: "GEF SGP (Global Environment Facility Small Grants Programme)",
    challenge: "Communities relied on unsafe, distant water sources and traditional brushwood fencing which caused severe deforestation and threatened forests. 80% of households face male migration, leaving women to manage alone.",
    intervention: "Established climate-smart diamond mesh-fenced gardens. Installed solar-powered boreholes with drip pipes and double Blair ventilated latrines. Established fruit tree nurseries.",
    results: "Saved 5,600 trees initially and 1,200 annually. Women saved ~4 hours per day in time poverty. Enhanced food security, community cohesion, and reduced waterborne diseases.",
    img: "/images/mugari (1).jpeg",
    images: [
      "/images/mugari (2).jpeg",
      "/images/mugari (3).jpeg"
    ],
    objectives: [
      "Promote natural environment regeneration through construction of diamond fenced community nutrition garden.",
      "Provide climate smart solar powered water for agriculture and domestic use.",
      "Promote health and sanitation of women, children and the community in entirety by constructing garden toilets.",
      "To reduce the rampant cutting down of trees as brushwood garden fencing and promote the growing of trees."
    ],
    impacts: [
      {
        category: "Water Access and Sanitation",
        points: [
          "Improved access to clean, reliable, and safe drinking water for over 400 households.",
          "Women, children, and the wider community now benefit from better health and sanitation, reducing waterborne diseases.",
          "Reduced need for long-distance water collection has enhanced safety, lowering risks of vulnerabilities."
        ]
      },
      {
        category: "Food Security and Nutrition",
        points: [
          "Families now enjoy sustainable, nutritious meals, improving dietary diversity and reducing malnutrition.",
          "Surplus produce is sold, generating increased household income and strengthening local economic resilience."
        ]
      },
      {
        category: "Environmental Conservation",
        points: [
          "By reducing reliance on brushwood fencing, the project has saved at least 5,600 trees.",
          "An additional 1,200 trees are saved annually, promoting natural regeneration of forests."
        ]
      },
      {
        category: "Gender and Social Empowerment",
        points: [
          "Time saved from water-fetching (up to 4 hours per day) is redirected to productive activities, education, and family care.",
          "Women's participation in nutrition gardens enhances their economic independence and decision-making power."
        ]
      }
    ],
    lessonsLearned: [
      "Young women and children play a significant role in provision of garden labour yet their contributions are often underrated.",
      "Most young women do not have access rights to land, which can sometimes lead to low motivation. Addressing this reinforces equality."
    ],
    sustainability: [
      "Supported weekly Community led monitoring sessions as a gradual strategy of handing over ownership.",
      "Community-led monitoring structures consist of 7 committee members (3 Women, 2 Youth, and 2 men).",
      "Supported local exchange visits between Tavagwisa and Mugari participants to promote learning."
    ]
  },
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
    img: "/images/water-harvesting (1).jpg",
    beforeImage: "/images/water-harvesting (2).jpg",
    afterImage: "/images/water-harvesting (1).jpg"
  }
];

export async function getProjects(): Promise<Project[]> {
  return Promise.resolve(projects);
}
