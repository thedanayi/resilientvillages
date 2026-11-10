export interface PolicySection {
  id: string;
  title: string;
  content: string[];
  bulletPoints?: string[];
}

export interface PolicyDocument {
  slug: string;
  id: string;
  title: string;
  shortTitle: string;
  code: string;
  effectiveDate: string;
  lastReviewed: string;
  summary: string;
  iconName: string;
  downloadUrl: string;
  reportingEmail: string;
  reportingPhone: string;
  preamble: string;
  sections: PolicySection[];
}

export const policiesData: Record<string, PolicyDocument> = {
  pseah: {
    slug: "pseah",
    id: "pseah-policy",
    title: "Prevention of Sexual Exploitation, Abuse, and Harassment (PSEAH) Policy",
    shortTitle: "PSEAH Policy",
    code: "POL-RVZ-2024-01",
    effectiveDate: "January 1, 2024",
    lastReviewed: "October 15, 2026",
    summary: "Resilient Villages Zimbabwe enforces a zero-tolerance policy against any form of sexual exploitation, abuse, or harassment by staff, contractors, volunteers, or partners.",
    iconName: "ShieldAlert",
    downloadUrl: "/policies/PSEAH Policy - Resilient Villages Zimbabwe.pdf",
    reportingEmail: "info@resilientvillages.org",
    reportingPhone: "+263 772 900 095",
    preamble: "Resilient Villages Zimbabwe (RVZ) is committed to maintaining a safe, respectful, and dignified environment for all community members, beneficiaries, staff, volunteers, and partner organizations. Sexual Exploitation, Abuse, and Harassment (SEAH) represent fundamental violations of human rights and a direct breach of organizational trust. RVZ maintains an absolute Zero-Tolerance stance toward SEAH in all project areas, field offices, and operational spheres.",
    sections: [
      {
        id: "scope-definitions",
        title: "1. Scope and Definitions",
        content: [
          "This policy applies strictly to all RVZ Board Members, full-time and part-time employees, field volunteers, independent contractors, consultants, interns, and third-party implementation partners operating on behalf of Resilient Villages Zimbabwe.",
          "Clear operational definitions govern this policy:"
        ],
        bulletPoints: [
          "Sexual Exploitation: Any actual or attempted abuse of a position of vulnerability, differential power, or trust for sexual purposes, including but not limited to profiting monetarily, socially, or politically from the sexual exploitation of another.",
          "Sexual Abuse: The actual or threatened physical intrusion of a sexual nature, whether by force or under unequal or coercive conditions.",
          "Sexual Harassment: Any unwelcome sexual advance, request for sexual favors, or verbal/physical conduct of a sexual nature that creates an intimidating, hostile, or offensive working or community environment."
        ]
      },
      {
        id: "zero-tolerance-principles",
        title: "2. Mandatory Core Principles & Zero Tolerance",
        content: [
          "All staff and representatives of RVZ must adhere to strict ethical standards at all times. Failure to comply results in immediate disciplinary action up to termination of employment and legal prosecution."
        ],
        bulletPoints: [
          "Prohibition of Exchange: It is strictly prohibited to exchange money, employment, goods, humanitarian aid, or services for sexual favors or sexual contact.",
          "Prohibition of Coercive Relationships: RVZ staff must not engage in sexual relationships with beneficiaries or vulnerable community members where power imbalances exist.",
          "Protection of Minors: Sexual activity with children (persons under 18 years of age) is strictly prohibited, regardless of local age of consent laws. Mistake of age is not a defense.",
          "Duty to Report: All personnel have an affirmative obligation to report any suspected or witnessed SEAH incident immediately through confidential reporting channels."
        ]
      },
      {
        id: "reporting-pathways",
        title: "3. Reporting Pathways & Whistleblower Protection",
        content: [
          "RVZ provides multiple safe, confidential, and accessible reporting channels for beneficiaries, community members, and staff members.",
          "Reports can be submitted anonymously through the following protected pathways:"
        ],
        bulletPoints: [
          "Confidential Email: info@resilientvillages.org (monitored exclusively by the Independent Board Legal Trustee).",
          "Toll-Free Hotline / WhatsApp: +263 772 900 095 (24/7 confidential reporting line).",
          "Community Feedback Boxes: Sealed boxes located at all community water harvesting project sites and local leadership centers.",
          "Non-Retaliation Guarantee: RVZ guarantees strict confidentiality and absolute protection against retaliation or adverse consequences for any whistleblower reporting in good faith."
        ]
      },
      {
        id: "survivor-centered-support",
        title: "4. Survivor-Centred Support & Investigation",
        content: [
          "All reports are handled using a survivor-centred approach, prioritizing the safety, privacy, dignity, and informed consent of the survivor at every stage.",
          "Key protocols during incident response include:"
        ],
        bulletPoints: [
          "Immediate Care & Referrals: Survivors are provided immediate access to medical treatment, psychological support, and legal assistance in partnership with certified local care providers.",
          "Independent Investigation: An independent investigation panel led by the Legal & Governance Committee conducts thorough, unbiased reviews of all allegations within 72 hours of notification.",
          "Sanctions & Legal Referral: Confirmed perpetrators face immediate dismissal, blacklisting, and referral to the Zimbabwe Republic Police (ZRP) for criminal prosecution."
        ]
      }
    ]
  },
  "anti-fraud": {
    slug: "anti-fraud",
    id: "anti-fraud-policy",
    title: "Anti-Fraud, Money Laundering, Corruption & Bribery Policy",
    shortTitle: "Anti-Fraud Policy",
    code: "POL-RVZ-2024-02",
    effectiveDate: "January 1, 2024",
    lastReviewed: "November 2, 2026",
    summary: "Comprehensive financial integrity guidelines prohibiting corruption, bribery, fraud, asset misuse, and money laundering across all RVZ operations.",
    iconName: "Banknote",
    downloadUrl: "/policies/Anti-Fraud, Money Laundering, Corruption and Bribery Policy - Resilient Villages Zimbabwe.pdf",
    reportingEmail: "info@resilientvillages.org",
    reportingPhone: "+263 772 900 095",
    preamble: "Resilient Villages Zimbabwe operates with absolute transparency, financial integrity, and strict accountability to donors, regulatory bodies, and community partners. Funds, assets, and resources entrusted to RVZ are dedicated solely to empowering rural communities. RVZ maintains a zero-tolerance policy regarding any form of financial dishonesty, fraud, bribery, corruption, kickbacks, or money laundering.",
    sections: [
      {
        id: "definitions-misconduct",
        title: "1. Definitions of Financial Misconduct",
        content: [
          "This policy defines clear categories of prohibited financial behaviors applicable to all staff, board members, suppliers, and contractor networks:"
        ],
        bulletPoints: [
          "Fraud: Any intentional act or omission designed to deceive others, resulting in the victim suffering a loss and/or the perpetrator achieving a gain (e.g. inflating invoices, fake receipts, ghost payroll).",
          "Corruption & Bribery: Offering, giving, receiving, or soliciting something of value to influence the action of an official or partner in procurement, licensing, or community distribution.",
          "Money Laundering: Engaging in transactions designed to conceal the origin of illegally obtained funds or property.",
          "Asset Misappropriation: Theft, improper personal use, or unauthorized transfer of organizational property, vehicles, solar hardware, or project inventory."
        ]
      },
      {
        id: "asset-protection-procurement",
        title: "2. Asset Protection & Internal Financial Controls",
        content: [
          "RVZ enforces strict multi-tier financial internal controls to safeguard organization assets and donor investments:"
        ],
        bulletPoints: [
          "Dual Authorization: All financial transactions exceeding designated thresholds require dual authorization by the Finance Director and Executive Director.",
          "Transparent Procurement: Open competitive bidding is required for all goods and services over $1,000 USD, evaluated by an independent procurement panel.",
          "Independent Annual Audit: Financial records undergo annual external audits conducted by an accredited independent auditing firm registered in Zimbabwe.",
          "Conflict of Interest Disclosure: All staff and board members must sign annual disclosures declaring any financial or personal interests in suppliers or contractors."
        ]
      },
      {
        id: "whistleblower-investigation",
        title: "3. Whistleblower Protection & Incident Management",
        content: [
          "Anyone who suspects financial wrongdoing is required to report it immediately. RVZ enforces strong legal and operational protections for whistleblowers."
        ],
        bulletPoints: [
          "Direct Reporting: Email info@resilientvillages.org or contact the Board Audit Committee Chair directly.",
          "Whistleblower Anonymity: Reports may be submitted anonymously without fear of employment termination, demotion, or harassment.",
          "Asset Recovery: In instances of proven financial loss, RVZ aggressively pursues asset recovery, civil litigation, and criminal prosecution."
        ]
      }
    ]
  },
  "child-protection": {
    slug: "child-protection",
    id: "child-protection-policy",
    title: "Child Protection & Child Safeguarding Policy",
    shortTitle: "Child Protection Policy",
    code: "POL-RVZ-2024-03",
    effectiveDate: "March 15, 2024",
    lastReviewed: "October 20, 2026",
    summary: "PVO 74/20 compliant protection framework safeguarding children and youth in rural Zimbabwe in alignment with the UN Convention on the Rights of the Child.",
    iconName: "HeartHandshake",
    downloadUrl: "/policies/Child Protection Policy - Resilient Villages Zimbabwe.pdf",
    reportingEmail: "info@resilientvillages.org",
    reportingPhone: "+263 772 900 095",
    preamble: "Children are at the heart of resilient rural communities. Resilient Villages Zimbabwe recognizes its fundamental duty to protect all children (under the age of 18) from harm, physical or emotional abuse, neglect, exploitation, and violence. This policy is aligned with Zimbabwe's Private Voluntary Organisations (PVO) guidelines (PVO 74/20 compliance), the Constitution of Zimbabwe, and the UN Convention on the Rights of the Child (UNCRC).",
    sections: [
      {
        id: "core-rights-legal",
        title: "1. Legal Framework & UNCRC Alignment",
        content: [
          "RVZ upholds the best interests of the child as the paramount consideration in all activities, program design, and community infrastructure projects."
        ],
        bulletPoints: [
          "PVO 74/20 Compliance: Direct adherence to child welfare guidelines mandated by the Ministry of Public Service, Labour and Social Welfare in Zimbabwe.",
          "UNCRC Article 19: Protection of children from all forms of physical or mental violence, injury, abuse, neglect, maltreatment, or exploitation.",
          "Non-Discrimination: Every child has equal right to protection regardless of gender, religion, disability, ethnicity, or socioeconomic status."
        ]
      },
      {
        id: "vetting-code-conduct",
        title: "2. Staff Vetting & Behavior Code of Conduct",
        content: [
          "RVZ enforces stringent background screening and field behavior protocols for anyone working directly or indirectly with children:"
        ],
        bulletPoints: [
          "Mandatory Police Vetting: Comprehensive criminal record checks and character references are required prior to employment or field deployment.",
          "Child-Safe Field Protocol: Staff must never be alone in unobserved areas with a child. All project activities must occur in open, visible community spaces.",
          "Photography & Media Consent: Written consent from parents/guardians and verbal assent from the child are required before photographing or recording any minor. Images must always preserve child dignity."
        ]
      },
      {
        id: "reporting-incidents",
        title: "3. Incident Reporting & Child-Centred Response",
        content: [
          "Any suspicion, disclosure, or allegation of child abuse or endangerment must be escalated immediately."
        ],
        bulletPoints: [
          "24-Hour Escalation: Reports must be escalated to the Child Protection Focal Person within 24 hours.",
          "Coordination with Local Authorities: Direct referral to Childline Zimbabwe, Department of Social Development, and Victim Friendly Unit (VFU) of the ZRP.",
          "Child Victim Support: Provision of immediate trauma-informed care and legal assistance."
        ]
      }
    ]
  },
  safeguarding: {
    slug: "safeguarding",
    id: "safeguarding-policy",
    title: "General Safeguarding Policy & Code of Conduct",
    shortTitle: "General Safeguarding Policy",
    code: "POL-RVZ-2024-04",
    effectiveDate: "January 1, 2024",
    lastReviewed: "September 30, 2026",
    summary: "Overarching organizational preamble establishing core values of integrity, transparency, accountability, and safety for all beneficiaries and personnel.",
    iconName: "ShieldCheck",
    downloadUrl: "/policies/Safeguarding Policy - Resilient Villages Zimbabwe.pdf",
    reportingEmail: "info@resilientvillages.org",
    reportingPhone: "+263 772 900 095",
    preamble: "Resilient Villages Zimbabwe believes that every human being has the right to live free from violence, exploitation, discrimination, and abuse. Safeguarding is the responsibility of everyone at RVZ. This overarching policy binds together our organizational values of integrity, transparency, accountability, and community partnership into a unified operational standard.",
    sections: [
      {
        id: "organizational-values",
        title: "1. Core Organizational Values",
        content: [
          "RVZ's operational philosophy rests upon four foundational pillars:"
        ],
        bulletPoints: [
          "Integrity: Honesty, moral courage, and alignment between words and field actions.",
          "Transparency: Open communication with community committees, traditional leaders, and donor partners.",
          "Accountability: Taking full responsibility for program outcomes, resource stewardship, and personnel behavior.",
          "Dignity & Respect: Treating all community members, women, youth, and vulnerable groups with equal honor."
        ]
      },
      {
        id: "do-no-harm-principle",
        title: "2. The 'Do No Harm' Operational Principle",
        content: [
          "All RVZ interventions—from water borehole drilling to agricultural training—must be risk-assessed to ensure they do not create secondary risks, exacerbate local conflicts, or expose community members to harm."
        ],
        bulletPoints: [
          "Community Risk Assessments: Mandatory safety and environmental risk mapping before launching project construction.",
          "Inclusive Access: Ensuring water points and community facilities are safely accessible to women, girls, elderly, and people with disabilities.",
          "Continuous Monitoring: Regular community feedback forums to identify potential safeguarding issues early."
        ]
      },
      {
        id: "governance-oversight",
        title: "3. Governance Oversight & Review",
        content: [
          "The Board of Directors oversees safeguarding implementation across all RVZ programs. Policies undergo mandatory bi-annual reviews to incorporate community feedback, local legal updates, and humanitarian best practices."
        ]
      }
    ]
  }
};
