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
    img: "https://images.unsplash.com/photo-1542810634-71277d95dc8c?q=80&w=1000&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1498020359781-ccaf40989f5c?q=80&w=1000&auto=format&fit=crop",
    date: "2025-08-22"
  }
];

export async function getStories(): Promise<Story[]> {
  return Promise.resolve(stories);
}
