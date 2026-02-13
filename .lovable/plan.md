

# Comprehensive Homepage & Case Study Updates
## Before/After Layout, Navigation, Cover Images, Titles & Tiered Portfolio Structure

---

## Overview of All Changes

This plan covers multiple interconnected updates:

| Area | Changes |
|------|---------|
| **CUBE Case Study** | Grid layout for Before/After, carousel update, new cover, Concept 1-4 images |
| **Cathay Title** | Simplify to "Designing Trust for 7 Million Users" |
| **Dark Page Navigation** | White text for NewOTC & KVB Prime headers |
| **Homepage Works** | Remove filters, implement 3-tier project hierarchy |

---

## Phase 1: CUBE Case Study Updates

### 1.1 Replace Cover Image

Copy uploaded `CUBE_cover.png` to `src/assets/cube-cover.png` and update the cover export.

### 1.2 Update Concept Exploration Carousel

Remove first slide "App Interface Design" — start directly with "Three Design Directions":

**Current proposalImages array (lines 37-81):**
```tsx
const proposalImages = [{
  src: cover,
  title: "App Interface Design",  // REMOVE THIS FIRST ITEM
  ...
}, {
  src: cube3plans,
  title: "Three Design Directions",  // THIS BECOMES FIRST
  ...
}]
```

**New array:** Start from `cube3plans` (index 1 becomes index 0)

### 1.3 Add Concept 1-4 Images for Phase 2

Copy uploaded images to assets:
- `Concept_1.png` → `src/assets/cube-concept-1.png`
- `Concept_2.png` → `src/assets/cube-concept-2.png`
- `Concept_3.png` → `src/assets/cube-concept-3.png`
- `Concept_4.png` → `src/assets/cube-concept-4.png`

Update Phase 2 section (lines 402-413) with actual image gallery.

### 1.4 Before/After Section Grid Layout

Change from single column to responsive grid:

**Desktop Layout:**
- Row 1: Home + Account + Card (3 columns)
- Row 2: CUBE Homepage + CUBE Benefit (2 columns)

**Update lines 415-493:**
```tsx
<section className="container-wide mb-24">
  <h2 className="text-display-sm mb-4">Before & After Redesign</h2>
  <p className="text-muted-foreground mb-12 max-w-3xl">...</p>
  
  {/* Row 1: Home + Account + Card */}
  <div className="grid md:grid-cols-3 gap-6 mb-8">
    {/* Home */}
    <div className="space-y-3">
      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Home</span>
      <div className="rounded-xl overflow-hidden border border-border">
        <ReactCompareSlider ... />
      </div>
    </div>
    {/* Account */}
    <div className="space-y-3">...</div>
    {/* Card */}
    <div className="space-y-3">...</div>
  </div>
  
  {/* Row 2: CUBE Homepage + CUBE Benefit */}
  <div className="grid md:grid-cols-2 gap-6">
    {/* CUBE Homepage */}
    <div className="space-y-3">...</div>
    {/* CUBE Benefit */}
    <div className="space-y-3">...</div>
  </div>
</section>
```

---

## Phase 2: Cathay Bank Title Update

### 2.1 Update projects.ts (lines 27-37)

**Before:**
```tsx
title: "Redesigning Trust at Scale — Reframing Credit Card Management for 7 Million Users",
subtitle: "Cathay Bank App — Account & Transfer Experience",
```

**After:**
```tsx
title: "Designing Trust for 7 Million Users",
subtitle: "Cathay Bank App — A Large-Scale Redesign of a National Banking App",
```

### 2.2 Update CathayCaseStudy.tsx (lines 50-55)

**Before:**
```tsx
<h1>Redesigning Trust at Scale — Reframing Credit Card Management for 7 Million Users</h1>
<p>Cathay Bank App — Account & Transfer Experience</p>
```

**After:**
```tsx
<h1>Designing Trust for 7 Million Users</h1>
<p>Cathay Bank App — A Large-Scale Redesign of a National Banking App</p>
```

---

## Phase 3: Dark Theme Navigation Fix

For NewOTC and KVB Prime pages, the header navigation needs white text.

### 3.1 Create DarkCaseStudyNavigation Component

Create `src/components/DarkCaseStudyNavigation.tsx`:

```tsx
const DarkCaseStudyNavigation = () => {
  // Same logic as CaseStudyNavigation but with:
  // - text-white instead of text-foreground
  // - text-zinc-400 instead of text-muted-foreground
  // - Appropriate hover states for dark backgrounds
  
  return (
    <header className={`fixed ... ${
      scrolled 
        ? "bg-[#0a0a0b]/90 backdrop-blur-md border-b border-zinc-800/20" 
        : "bg-transparent"
    }`}>
      <nav>
        <Link to="/" className="text-lg font-bold text-white hover:text-emerald-400">
          Mitty Huang
        </Link>
        <div>
          <button className="text-zinc-400 hover:text-white">Works</button>
          <button className="text-zinc-400 hover:text-white">About</button>
          <button className="bg-emerald-500 text-white">Contact</button>
        </div>
      </nav>
    </header>
  );
};
```

### 3.2 Update Case Study Pages

| File | Change |
|------|--------|
| `NewOTCCaseStudy.tsx` | Import & use `DarkCaseStudyNavigation` |
| `KVBPrimeCaseStudy.tsx` | Import & use `DarkCaseStudyNavigation` |

---

## Phase 4: Homepage 3-Tier Project Structure

This is the largest change — completely restructure the Works section.

### 4.1 Update projects.ts — Add Tier Field

Add `tier` field to Project interface:

```tsx
export interface Project {
  // ... existing fields
  tier: 1 | 2 | 3;  // 1 = Work at Scale, 2 = Constraints, 3 = Beyond Products
}
```

### 4.2 Tier Assignment

| Tier | Projects |
|------|----------|
| **Tier 1: Work at Scale** (3 projects) | Cathay Bank, NewOTC, KKday |
| **Tier 2: Designing Through Constraints** (4 projects) | KVB Prime, OneCar, Tripgine, Round Taiwan Round |
| **Tier 3: Design Beyond Products** (3 projects) | OurCityLove, mHealth, CUBE |

### 4.3 Rewrite Works.tsx

Complete redesign of the Works component:

```tsx
const Works = () => {
  // Group projects by tier
  const tier1Projects = projects.filter(p => p.tier === 1);
  const tier2Projects = projects.filter(p => p.tier === 2);
  const tier3Projects = projects.filter(p => p.tier === 3);

  return (
    <section id="works" className="relative">
      {/* ======== TIER 1: Work at Scale ======== */}
      <div className="py-24 md:py-32">
        <div className="container-wide">
          <p className="text-caption mb-4">Selected Case Studies</p>
          <h2 className="text-display-lg md:text-display-xl mb-4">
            Work at <span className="highlight-underline">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-16">
            Products at scale. Decisions that matter.
          </p>

          {/* 1-2 cards per row, largest card size */}
          <div className="space-y-12">
            {tier1Projects.map((project, i) => (
              <FlagshipProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* ======== TIER 2: Designing Through Constraints ======== */}
      <div className="py-24 bg-secondary/20">
        <div className="container-wide">
          <p className="text-caption mb-4">Complex Problems</p>
          <h2 className="text-display-md mb-4">
            Designing Through Constraints
          </h2>
          <p className="text-muted-foreground mb-12">
            Where constraints shaped better decisions.
          </p>

          {/* 2-3 column grid, medium card size */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tier2Projects.map(project => (
              <StandardProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* ======== TIER 3: Design Beyond Products ======== */}
      <div className="py-24">
        <div className="container-wide">
          <p className="text-caption mb-4">Values & Impact</p>
          <h2 className="text-display-sm mb-4">
            Design Beyond Products
          </h2>
          <p className="text-muted-foreground mb-12">
            Empathy, inclusion, and long-term impact.
          </p>

          {/* Compact cards or list style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tier3Projects.map(project => (
              <CompactProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
```

### 4.4 Create New Card Components

**FlagshipProjectCard (Tier 1):**
- Full-width or large 2-column layout
- Large image (16:9 or wider)
- H2 title size
- Impact statement with metrics
- "WORK AT SCALE" label

**StandardProjectCard (Tier 2):**
- Standard grid card
- Medium image
- Problem-solving focused title
- Emphasis on thinking, not just outcomes

**CompactProjectCard (Tier 3):**
- Smaller visual
- Horizontal thumbnail optional
- Personal/ethical framing
- Quick to scan

### 4.5 Mobile Layout Rules

| Tier | Mobile Behavior |
|------|-----------------|
| Tier 1 | ~80-100vh per project, one visible per screen |
| Tier 2 | ~60-70vh, continuous scroll |
| Tier 3 | Compressed cards, fast scanning |

---

## Phase 5: File Changes Summary

| File | Action |
|------|--------|
| `src/assets/cube-cover.png` | Replace with new cover image |
| `src/assets/cube-concept-1.png` | Add Concept 1 image |
| `src/assets/cube-concept-2.png` | Add Concept 2 image |
| `src/assets/cube-concept-3.png` | Add Concept 3 image |
| `src/assets/cube-concept-4.png` | Add Concept 4 image |
| `src/pages/CubeCaseStudy.tsx` | Update carousel, Before/After grid, Phase 2 images |
| `src/data/projects.ts` | Update Cathay title, add tier field |
| `src/pages/CathayCaseStudy.tsx` | Update title |
| `src/components/DarkCaseStudyNavigation.tsx` | Create new component |
| `src/pages/NewOTCCaseStudy.tsx` | Use DarkCaseStudyNavigation |
| `src/pages/KVBPrimeCaseStudy.tsx` | Use DarkCaseStudyNavigation |
| `src/components/Works.tsx` | Complete rewrite with 3-tier structure |
| `src/components/FlagshipProjectCard.tsx` | Create new component |
| `src/components/StandardProjectCard.tsx` | Create new component |
| `src/components/CompactProjectCard.tsx` | Create new component |

---

## Visual Hierarchy Preview

```text
HOMEPAGE WORKS SECTION

┌─────────────────────────────────────────────────┐
│  Selected Case Studies                          │
│  WORK AT SCALE                                  │
│  Products at scale. Decisions that matter.      │
├─────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────┐   │
│  │   [LARGE HERO IMAGE]                     │   │
│  │   Designing Trust for 7 Million Users    │   │  ← Tier 1
│  │   Reframing credit card UX at scale      │   │    (Full width)
│  │   View Case →                            │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │   [LARGE HERO IMAGE]                     │   │
│  │   NewOTC Crypto Exchange                 │   │
│  └─────────────────────────────────────────┘   │
├─────────────────────────────────────────────────┤
│  Complex Problems                               │
│  DESIGNING THROUGH CONSTRAINTS                  │  ← Background shift
├─────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │ KVB      │  │ OneCar   │  │ Tripgine │      │  ← Tier 2
│  │ Prime    │  │ MVP      │  │ B2B      │      │    (2-3 columns)
│  └──────────┘  └──────────┘  └──────────┘      │
├─────────────────────────────────────────────────┤
│  Values & Impact                                │
│  DESIGN BEYOND PRODUCTS                         │
├─────────────────────────────────────────────────┤
│  ┌────────┐  ┌────────┐  ┌────────┐            │  ← Tier 3
│  │ OCL    │  │ mHealth│  │ CUBE   │            │    (Compact)
│  └────────┘  └────────┘  └────────┘            │
└─────────────────────────────────────────────────┘
```

