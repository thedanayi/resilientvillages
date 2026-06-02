import { Partner } from '../types';

export const partners: Partner[] = [
  {
    id: "partner-1",
    name: "Global Food Security Fund",
    logoUrl: "https://cdn.logoipsum.com/logo/22.svg",
    tier: "Strategic"
  },
  {
    id: "partner-2",
    name: "Clean Water Initiative",
    logoUrl: "https://cdn.logoipsum.com/logo/29.svg",
    tier: "Funding"
  },
  {
    id: "partner-3",
    name: "Earth Alliance",
    logoUrl: "https://cdn.logoipsum.com/logo/31.svg",
    tier: "Strategic"
  },
  {
    id: "partner-4",
    name: "AgriTech Zimbabwe",
    logoUrl: "https://cdn.logoipsum.com/logo/15.svg",
    tier: "Implementing"
  }
];

export async function getPartners(): Promise<Partner[]> {
  return Promise.resolve(partners);
}
