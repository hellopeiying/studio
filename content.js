/**
 * ─────────────────────────────────────────────────
 *  PEIYING LOH — CONTENT
 *  Edit everything here. No need to touch HTML.
 *
 *  ACCENT CLASSES (use inside prose strings):
 *    <span class="ag">word</span>  →  green
 *    <span class="ay">word</span>  →  yellow highlight
 * ─────────────────────────────────────────────────
 */

const CONTENT = {

  /* ── SITE META ─────────────────────────────── */
  meta: {
    name:       "Peiying Loh",
    role:       "Co-Founder & Data Storyteller",
    location:   "Singapore & Uppsala, Sweden",
    email:      "x",
    linkedin:   "https://linkedin.com/in/peiyingloh",
    studio:     "https://kontinentalist.com",
  },

  /* ── ABOUT ──────────────────────────────────── */
  about: {
    chapter: "About",
    // Each string = one paragraph. Use <span class="ag"> for green, <span class="ay"> for yellow highlight.
    prose: [
      `I co-founded <span class="ag">Kontinentalist</span> in 2017 — an award-winning studio that advocates for a more equitable world, fostering connections between <span class="ag">Asia's</span> sources of knowledge.`,
      `As a <span class="ag">data storyteller</span> and visualisation practitioner, I transform research into visually stunning, interactive essays. I work with organisations of all kinds to help them communicate better with the public.`,
      `I'm passionate about telling stories with <span class="ay">history</span>, exploring cultural contexts, and helping others understand the systems that societies inherit and continue.`,
    ],
    // Replace null with your photo path, e.g. "images/peiying.jpg"
    photo: "images/peiying.jpg",
  },

  /* ── WORK ───────────────────────────────────── */
  work: {
    chapter: "Work",
    heading:  "Work &amp; roles",
    // First previewCount items show by default; the rest expand on click
    previewCount: 3,
    roles: [
      { title: "Co-Founder",                      org: "Kontinentalist",               period: "2017–present" },
      { title: "Board Member",                    org: "Society for News Design",       period: "Current"      },
      { title: "MSc, Data, Inequality & Society", org: "University of Edinburgh",       period: "2023–2024"    },
      { title: "Curatorial Research Assistant",   org: "Asian Civilisations Museum",    period: "3 years"      },
      // Add more roles here:
      // { title: "", org: "", period: "" },
    ],
  },

  /* ── FEATURES ───────────────────────────────── */
  features: {
    chapter: "Features",
    heading:  "Podcasts, articles &amp; interviews",
    // First previewCount items show by default; the rest expand on click
    previewCount: 4,
    // type options: "podcast" | "article" | "interview" | "newsletter" | "talk"
    items: [
      { type: "podcast",    title: "Your podcast episode title here",   publisher: "Podcast Name",     year: "2024", url: "#" },
      { type: "article",    title: "Your article title here",           publisher: "Publication",       year: "2024", url: "#" },
      { type: "interview",  title: "Your interview title here",         publisher: "Media Outlet",      year: "2023", url: "#" },
      { type: "newsletter", title: "Your newsletter issue title here",  publisher: "Newsletter Name",   year: "2023", url: "#" },
      { type: "talk",       title: "Your talk title here",              publisher: "Conference Name",   year: "2022", url: "#" },
      // Add more items here:
      // { type: "podcast", title: "", publisher: "", year: "", url: "" },
    ],
    // Replace null with a photo path, e.g. "images/features.jpg"
    photo: null,
  },

  /* ── STUDIO ─────────────────────────────────── */
  studio: {
    chapter: "Studio",
    // Each string = one paragraph
    prose: [
      `At the intersection of <span class="ag">data</span>, <span class="ay">feminism</span>, craft &amp; history.`,
      `Making things with hands and head — thinking through how we represent knowledge, who gets to tell stories, and what it means to work across the digital and the physical.`,
    ],
    // Carousel projects. Add your own images by setting imageSrc.
    // Each project links to project.html?id=YOUR_ID
    projects: [
      {
        id:          "rubber-race",
        title:       "Rubber, Race & Colonial Exploitation",
        tags:        ["data", "history", "colonialism"],
        year:        "2024",
        description: "How the rubber industry in Singapore and Malaysia was built on colonial extraction: a story of land, labour, and racial hierarchy that shaped the modern economy.",
        imageSrc:    null,  // e.g. "images/rubber-race.jpg"
        accentColor: "#4BA840",
      },
      {
        id:          "mekong",
        title:       "A River Drained",
        tags:        ["data", "environment", "food systems"],
        year:        "2020",
        description: "Food security along the Mekong River: how damming, climate change, and geopolitics are threatening fish stocks and the livelihoods of millions.",
        imageSrc:    null,
        accentColor: "#F2D94E",
      },
      {
        id:          "pasar",
        title:       "Pasar",
        tags:        ["culture", "singapore", "society"],
        year:        "2021",
        description: "What makes Singapore's wet markets unique: their history, social role, and why they persist in a city defined by modernity.",
        imageSrc:    null,
        accentColor: "#111111",
      },
      {
        id:          "housing",
        title:       "The Singapore Dream",
        tags:        ["housing", "inequality", "data"],
        year:        "2022",
        description: "An investigation into public housing and the gap between the dream and the reality for different communities.",
        imageSrc:    null,
        accentColor: "#4BA840",
      },
      // Add more projects here:
      // { id: "", title: "", tags: [], year: "", description: "", imageSrc: null, accentColor: "#4BA840" },
    ],
  },

  /* ── CONTACT ─────────────────────────────────── */
  contact: {
    chapter: "Contact",
    prose: `I'm open to collaborations, speaking engagements, consultancy, and conversations about <span class="ag">data</span>, <span class="ay">history</span>, and Asia.`,
    links: [
      { label: "Email",       value: "hello@peiyingloh.com", href: "mailto:hello@peiyingloh.com",       external: false },
      { label: "LinkedIn",    value: "Peiying Loh",          href: "https://linkedin.com/in/peiyingloh", external: true  },
      { label: "Studio",      value: "Kontinentalist",       href: "https://kontinentalist.com",          external: true  },
    ],
  },

};
