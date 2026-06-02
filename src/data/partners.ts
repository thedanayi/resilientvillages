import { Partner } from '../types';

export const partners: Partner[] = [
  {
    id: "partner-1",
    name: "Global Food Security Fund",
    logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80",
    tier: "Strategic"
  },
  {
    id: "partner-2",
    name: "Clean Water Initiative",
    logoUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&h=150&fit=crop&q=80",
    tier: "Funding"
  },
  {
    id: "partner-3",
    name: "Earth Alliance",
    logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&h=150&fit=crop&q=80",
    tier: "Strategic"
  },
  {
    id: "partner-4",
    name: "AgriTech Zimbabwe",
    logoUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&h=150&fit=crop&q=80",
    tier: "Implementing"
  }
];

export async function getPartners(): Promise<Partner[]> {
  return Promise.resolve(partners);
}
