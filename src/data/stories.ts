import { Story } from '../types';

export const stories: Story[] = [
  {
    id: "chipo-makoni",
    title: "Reaping Life from Dry Earth",
    beneficiary: "Chipo Makoni",
    location: "Munhande Village",
    summary: "How a community garden transformed a single mother's capacity to feed and educate her children.",
    challenge: "Before the nutrition garden, droughts had devastated Chipo's maize crops three years in a row. She struggled to afford two meals a day for her four children and had to pull her eldest daughter out of school due to unpaid fees.",
    solution: "With the introduction of the Munhande Nutrition Garden and solar-powered irrigation, Chipo received a plot and training in climate-smart agriculture, focusing on drought-resistant vegetables.",
    outcome: "Today, Chipo harvests tomatoes, kale, and onions year-round. Her family enjoys a diverse, nutritious diet. 'I not only feed my family,' she says, 'but I sell the surplus at the local market to pay for my daughter's school fees.'",
    quote: "Before the nutrition garden, our harvests were unpredictable. Now, we not only feed our families year-round but sell the surplus to pay for school fees.",
    img: "/images/reaping life from dry earth.jpg",
    date: "2025-10-14"
  },
  {
    id: "tendai-water",
    title: "The Gift of Clean Water",
    beneficiary: "Tendai Moyo & Village Community",
    location: "Chaka District",
    summary: "A new solar borehole brings health and time back to the women of Chaka District.",
    challenge: "Women and girls in Chaka spent up to 5 hours a day walking to a distant river to collect water, which was often contaminated, leading to frequent outbreaks of waterborne diseases.",
    solution: "RVZ partnered with the community to drill a deep solar-powered borehole and install a 10,000-liter storage tank right in the village center.",
    outcome: "Cases of dysentery and cholera dropped by 80% within the first year. Girls now have time to attend school regularly, and women have formed a cooperative to start small businesses with their reclaimed time.",
    quote: "Water is life. Now that the water is here, right in our village, our daughters are back in school and our children are healthy.",
    img: "/images/the gift of clean water.jpeg",
    date: "2025-08-22"
  },
  {
    id: "empowering-rural-women",
    title: "The Plight of Rural Women: Why Empowerment is the Key to Development",
    beneficiary: "Rural Women & Children",
    location: "Global & Zimbabwe",
    summary: "Women and children form the backbone of rural economies, yet they face disproportionate challenges. Discover why empowering them transforms entire communities.",
    challenge: "According to the UN Food and Agriculture Organization, women make up over 40% of the agricultural labor force in developing countries, and up to 50% in sub-Saharan Africa. Despite this, women and children disproportionately bear the brunt of rural poverty. They perform the vast majority of unpaid manual labor, including traveling long distances for water, firewood, and healthcare. UN Women reports that women do 2.5 to 3 times more unpaid care work than men, bearing the primary responsibility for the sick and disabled. When political disturbances, droughts, or famines strike, women and children are severely affected, facing heightened risks.",
    solution: "Addressing these systemic inequalities requires targeted interventions. By providing rural communities with accessible clean water infrastructure (WASH) and climate-smart agricultural resources, we can eliminate the need for women and girls to walk hours each day for basic survival needs. Investing in localized healthcare access, education, and economic cooperatives shifts the paradigm from survival to opportunity.",
    outcome: "Empowering women is the most powerful tool for sustainable rural development. When women have access to education, health, and economic opportunities, the benefits multiply across the entire community. Girls return to school, household nutrition improves, and women lead the charge in building resilient villages capable of withstanding climate and economic shocks.",
    quote: "Empowering rural women is not just a moral imperative; it is the most powerful tool we have for sustainable rural development.",
    img: "/images/the plight of rural women.jpeg",
    date: "2026-06-02"
  }
];

export async function getStories(): Promise<Story[]> {
  return Promise.resolve(stories);
}
