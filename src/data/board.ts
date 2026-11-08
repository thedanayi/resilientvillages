export interface BoardMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  fullBio: string;
  image?: string;
  linkedin?: string;
  qualifications: string[];
  expertise: string[];
}

export const boardMembers: BoardMember[] = [
  {
    id: "stellar-khumalo",
    name: "Sr. Stellar Gaihai Khumalo",
    role: "Board Chairperson",
    title: "Chairperson of the Board of Directors",
    bio: "Visionary leader and advocate for rural community empowerment, women's health, and ethical organizational governance.",
    fullBio: "Sr. Stellar Gaihai Khumalo serves as the Chairperson of the Board of Directors at Resilient Villages Zimbabwe. With extensive experience in public health, psychology, and executive community leadership, Sr. Stellar guides organizational strategy, ensuring strict adherence to ethical standards, community-led principles, gender equity, and moral integrity across all field programs.",
    image: "/images/Stella Gaihai Khumalo - Chairperson.jpg",
    qualifications: [
      "MSc Degree in Nursing Science (Mental Health/Psychiatric Nursing)",
      "BSc Honours Degree in Psychology",
      "Diploma in Mental Health Nursing",
      "Diploma in General Nursing"
    ],
    expertise: ["Ethical Governance", "Public Health", "Psychology", "Strategic Leadership"]
  },
  {
    id: "blazio-manobo",
    name: "Blazio Manobo",
    role: "Vice Chairperson",
    title: "Vice Chairperson & M&E Specialist",
    bio: "Development practitioner and monitoring & evaluation expert guiding program quality and sustainable village impact.",
    fullBio: "Blazio Manobo is the Vice Chairperson of the Board. A scholar and development specialist, Blazio oversees program quality assurance, baseline impact evaluations, and strategic monitoring frameworks for RVZ's multi-sectoral rural initiatives.",
    image: "/images/Manobo.png",
    qualifications: [
      "PhD Development Studies (Candidate)",
      "Master of Social Sciences (M&E)",
      "Master of Arts in Development Studies",
      "Master of Business Administration (MBA)",
      "BSc (Hons) Monitoring & Evaluation"
    ],
    expertise: ["Monitoring & Evaluation", "Development Strategy", "Program Design", "Data Analytics"]
  },
  {
    id: "modester-mutero",
    name: "Miss Modester Mutero",
    role: "Secretary",
    title: "Legal & Board Secretary",
    bio: "Human rights lawyer and corporate governance specialist overseeing legal risk, policy compliance, and board administrative protocols.",
    fullBio: "Miss Modester Mutero serves as Board Secretary and Legal Trustee. Combining her legal practice with strategic corporate governance qualifications, Modester oversees legal compliance under Zimbabwe's PVO Act, safeguarding policy enforcement, contract reviews, and constitutional governance at RVZ.",
    image: "/images/Modester Mutero - Secretary.jpg",
    qualifications: [
      "Master of Commerce in Strategic Management & Corporate Governance (MSU)",
      "Bachelor of Laws Honours Degree (UZ)"
    ],
    expertise: ["Corporate Governance", "Human Rights Law", "PVO Compliance", "Legal Oversight"]
  },
  {
    id: "maria-mushayi",
    name: "Mrs. Maria Tambudzai Mushayi",
    role: "Vice Secretary",
    title: "Vice Secretary & Counseling Trustee",
    bio: "Educator and professional counselor focusing on community wellbeing, child protection, and psychosocial support systems.",
    fullBio: "Mrs. Maria Tambudzai Mushayi is the Vice Secretary of the Board. Her deep background in counseling and education equips RVZ with trauma-informed perspectives on child safeguarding, community harmony, and grassroots psychosocial intervention.",
    image: "/images/Tambudzai Maria Mushayi - Vice Secretary.jpeg",
    qualifications: [
      "Bachelor of Science Degree in Counseling",
      "Certificate in Education"
    ],
    expertise: ["Community Counseling", "Child Safeguarding", "Psychosocial Support", "Education"]
  },
  {
    id: "rabson-mutumhe",
    name: "Mr. Rabson Mutumhe",
    role: "Treasurer",
    title: "Board Treasurer & Audit Chair",
    bio: "Chartered Accountant driving financial integrity, donor compliance, internal controls, and zero-tolerance anti-fraud measures.",
    fullBio: "Mr. Rabson Mutumhe leads the Audit & Finance Committee as Board Treasurer. A seasoned Chartered Accountant and financial executive, Rabson ensures that all donor grant funds, assets, and project investments undergo rigorous auditing, dual-authorization oversight, and transparent financial reporting.",
    image: "/images/Rabson Mutumhe - Treasurer.jpg",
    qualifications: [
      "Qualified Chartered Accountant (CA)",
      "Master of Business Administration (MBA)",
      "Chartered Institute of Management Accountants (CIMA)",
      "Institute of Chartered Secretaries & Administrators in Zimbabwe"
    ],
    expertise: ["Financial Audit", "Donor Compliance", "Anti-Fraud Controls", "Asset Management"]
  },
  {
    id: "johnson-masaka",
    name: "Professor Johnson Masaka",
    role: "Board Member",
    title: "Senior Advisory Trustee & Soil Scientist",
    bio: "Renowned agricultural scientist and soil specialist guiding climate-smart agriculture, land healing, and water harvesting techniques.",
    fullBio: "Professor Johnson Masaka serves as Senior Advisory Trustee for Agricultural Transformation. With a DPhil in Soil Science and decades of academic and field research, Prof. Masaka advises RVZ on agro-ecological interventions, soil conservation, and drought-mitigation technologies across dryland farming areas in Zimbabwe.",
    image: "/images/prof masaka.jpg",
    qualifications: [
      "Doctor of Philosophy (DPhil in Soil Science & Agricultural Engineering, UZ)",
      "MSc Soil Science (Kuban Agrarian University, Russia)",
      "BSc Agronomy Honours (Kuban Agrarian University, Russia)"
    ],
    expertise: ["Soil Conservation", "Climate-Smart Agriculture", "Agro-Ecology", "Land Rehabilitation"]
  },
  {
    id: "anthony-chirape",
    name: "Mr. Anthony T. Chirape",
    role: "Board Member",
    title: "Financial Audit & Risk Trustee",
    bio: "Financial auditor specializing in risk management, operational efficiency, and non-profit fiscal compliance.",
    fullBio: "Mr. Anthony T. Chirape serves on the Board of Directors, lending his expertise in accounting, risk assessment, and financial verification. Anthony supports the Treasurer in conducting internal audits and verifying field procurement integrity.",
    image: "/images/Anthont T Chirape - Board Member.jpeg",
    qualifications: [
      "Post Graduate Diploma in Auditing and Accounting (University of Cape Town)"
    ],
    expertise: ["Internal Auditing", "Risk Management", "Fiscal Compliance", "Financial Analysis"]
  },
  {
    id: "cynthia-changa",
    name: "Cynthia Changa",
    role: "Board Member",
    title: "Women's Empowerment Trustee",
    bio: "Grassroots advocate and organization founder dedicated to gender equity, rural livelihoods, and vulnerable family protection.",
    fullBio: "Cynthia Changa is a Board Member and passionate advocate for rural women and vulnerable households. As a founder member of the Family of Hope Organisation, Cynthia brings frontline experience in mobilizing women's savings clubs, craft cooperatives, and gender-inclusive community governance.",
    image: "/images/cynthia-changa.jpg",
    qualifications: [
      "Founder Member - Family of Hope Organisation",
      "Advocate for Women's & Children's Empowerment"
    ],
    expertise: ["Women's Empowerment", "Grassroots Mobilization", "Social Inclusion", "Family Welfare"]
  }
];
