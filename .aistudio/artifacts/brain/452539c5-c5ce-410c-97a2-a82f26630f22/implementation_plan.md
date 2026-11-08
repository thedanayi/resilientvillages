# Implementation Plan: Governance, Safeguarding & Leadership Pages for Resilient Villages Zimbabwe

Implementation plan for extending Resilient Villages Zimbabwe (resilientvillages.org) with an updated dropdown navigation, a dedicated Policies & Safeguarding Hub (`/policies`) with 4 full sub-pages, and a Board of Directors page (`/about/board`).

## User Review & Critical Decisions

> [!IMPORTANT]
> The confirmed choices from Phase 1 interactive alignment are reflected below:

- **Confirmed Policy Navigation**: Dedicated pages (`/policies/pseah`, `/policies/anti-fraud`, `/policies/child-protection`, `/policies/safeguarding`) each featuring a sticky side-nav for fast switching, cross-navigation links, and an index grid on `/policies`.
- **Confirmed Board Layout**: Executive portrait cards with member photos, titles, bio modals, and email/LinkedIn contact buttons for transparent governance.
- **Action Buttons & Incident Reporting**: Downloadable policy document buttons and confidential incident reporting callouts included on all policy sub-pages.

---

## 1. Overview & Core Concept

This update builds out key organizational governance, child protection, and leadership pages for Resilient Villages Zimbabwe (RVZ). It adds:
1. **Dropdown Navbar Navigation**: Adds an "About Us" dropdown menu on desktop and mobile containing links to "Overview (`/about`)", "Board of Directors (`/about/board`)", and "Policies & Safeguarding (`/policies`)".
2. **Policies & Safeguarding Index (`/policies`)**: Hero section on transparency & community protection, and a 4-card interactive grid linking to detailed policy pages.
3. **4 Detailed Policy Sub-Pages**:
   - `/policies/pseah` (Prevention of Sexual Exploitation, Abuse, and Harassment)
   - `/policies/anti-fraud` (Anti-Fraud, Money Laundering, Corruption & Bribery)
   - `/policies/child-protection` (Child Protection - PVO 74/20 & UN Rights of Child)
   - `/policies/safeguarding` (General Safeguarding & Preamble)
   - Includes a desktop sticky side-navigation, confidential reporting pathway, and downloadable PDF action callouts.
4. **Board of Directors Page (`/about/board`)**: Leadership header emphasizing ethical stewardship, profile grid featuring Sr Stellar Gaihai Khumalo (Board Chairperson), Jerald Ndungwani (Executive Director), and clean placeholder profiles with bio modal dialogs.

---

## 2. User Experience & Visual Design

### Visual Identity & Theme
- **Theme**: Institutional & Editorial (Archival warm tones, crisp white card fields, forest emerald primary `#14532D`/`#15803D`, stone `#1C1917` body text, hairline borders `border-stone-200`).
- **Typography**: Display serif headings paired with clean readable sans-serif body text (`Plus Jakarta Sans` / standard serif pairs).
- **Zero-Pill Discipline**: Metadata items (dates, categories, compliance codes like PVO 74/20) rendered as unboxed text with `·` separators.

### User Flows
```
                           [ Top Navbar ]
                                 │
           ┌─────────────────────┴─────────────────────┐
           ▼                                           ▼
   [ About Us Dropdown ]                       [ Direct Nav ]
   ├── Board of Directors (/about/board)             ...
   └── Policies & Safeguarding (/policies)
             │
             ├─► [ PSEAH Policy ] (/policies/pseah)
             ├─► [ Anti-Fraud Policy ] (/policies/anti-fraud)
             ├─► [ Child Protection ] (/policies/child-protection)
             └─► [ General Safeguarding ] (/policies/safeguarding)
```

---

## 3. Technical Architecture & Data Strategy

### System Layout & Route Diagram
```
┌────────────────────────────────────────────────────────────────────────┐
│                               App.tsx                                  │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │                             Layout                                 │ │
│ │  ┌──────────────────────────────────────────────────────────────┐  │ │
│ │  │                       Navbar Component                       │  │ │
│ │  │   [About Us ▼] -> /about, /about/board, /policies            │  │ │
│ │  └──────────────────────────────────────────────────────────────┘  │ │
│ │                                                                    │ │
│ │  Routes:                                                           │ │
│ │  ├── /about/board ────────► <BoardOfDirectors />                   │ │
│ │  ├── /policies ───────────► <PoliciesIndex />                      │ │
│ │  ├── /policies/pseah ─────┐                                        │ │
│ │  ├── /policies/anti-fraud ├─► <PolicyDetail /> (Layout + StickyNav)│ │
│ │  ├── /policies/child-prot │                                        │ │
│ │  └── /policies/safeguard ─┘                                        │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Proposed Changes & Sub-tasks

### 1. Navigation Updates (`/src/components/layout/Navbar.tsx`)
- Enhance the Navbar to support an "About Us" dropdown menu on desktop (hover/click popover with ChevronDown icon) and expandable sub-menu on mobile.
- Sub-items:
  - About Overview (`/about`)
  - Board of Directors (`/about/board`)
  - Policies & Safeguarding (`/policies`)

### 2. Routes & Data (`/src/App.tsx` & `/src/data/policies.ts`, `/src/data/board.ts`)
- Add lazy-loaded route declarations for `/about/board`, `/policies`, `/policies/pseah`, `/policies/anti-fraud`, `/policies/child-protection`, and `/policies/safeguarding`.
- Create structured data files:
  - `src/data/policies.ts`: Detailed copy for PSEAH, Anti-Fraud, Child Protection (PVO 74/20 compliance), and General Safeguarding policies, including scope, zero-tolerance principles, reporting contacts, and download metadata.
  - `src/data/board.ts`: Profiles for Sr Stellar Gaihai Khumalo (Chairperson), Jerald Ndungwani (Executive Director), and additional board members with bio text and contact links.

### 3. Policy Pages (`/src/pages/PoliciesIndex.tsx` & `/src/pages/PolicyDetail.tsx`)
- **Policies Index Page (`/policies`)**: Hero section highlighting RVZ's commitment to governance, transparency, and safeguarding; 4 interactive policy cards with icons, summary text, and "Read Full Policy" links.
- **Policy Detail Page (`/src/pages/PolicyDetail.tsx`)**:
  - Reusable layout handling any of the 4 policy slugs.
  - Desktop sticky sidebar (`sticky top-28`) for quick jump switching between policies.
  - Complete policy copy sections (PVO 74/20 compliance, UN Convention, zero tolerance, reporting pathways).
  - Confidential incident reporting callout box with email/phone contact.
  - Downloadable policy PDF action button.

### 4. Board of Directors Page (`/src/pages/BoardOfDirectors.tsx`)
- Hero header emphasizing ethical leadership and good stewardship.
- Responsive profile grid with portrait card overlays.
- Interactive Bio Modal dialog (`Dialog` / modal component) to view full biographies.
- Email and LinkedIn contact links.

---

## 5. Verification & Testing

1. Run `compile_applet` and `lint_applet` to confirm no TypeScript, syntax, or route bundle errors exist.
2. Verify route transitions for `/about/board`, `/policies`, and all 4 policy sub-pages (`/policies/pseah`, `/policies/anti-fraud`, `/policies/child-protection`, `/policies/safeguarding`).
3. Verify sticky side-nav operation on desktop and mobile menu responsiveness.
