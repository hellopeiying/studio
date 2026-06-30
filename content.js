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
    linkedin:   "https://linkedin.com/in/peiyingloh",
    studio:     "https://kontinentalist.com",
    year:       "2025",
  },

  /* ── ABOUT ──────────────────────────────────── */
  about: {
    chapter: "About",
    // Each string = one paragraph. Use <span class="ag"> for green, <span class="ay"> for yellow highlight.
    prose: [
      `I co-founded <span class="ag">Kontinentalist</span>, an award-winning data-driven editorial studio focused on Asian stories.`,
      `As a <span class="ag">data storyteller</span> and visualisation practitioner, I work with organisations of all kinds to help them communicate better with the public.`,
      `I'm passionate about telling stories with <span class="ay">history</span>, exploring cultural contexts, and helping others understand the systems that societies inherit and continue.`,
    ],
    // Replace null with your photo path, e.g. "images/peiying.jpg"
    photo: "peiying.jpg",
  },

  /* ── WORK ───────────────────────────────────── */
  work: {
    chapter: "Experiences",
    heading:  "Work, education &amp; roles",
    // First previewCount items show by default; the rest expand on click
    previewCount: 4,
    roles: [
      { title: "Co-Founder",                                  org: "Kontinentalist",                                period: "Mar 2017–present" },
      { title: "Board Member",                                org: "Society for News Design",                      period: "2024–present"      },
      { title: "MSc Data, Inequality & Society",             org: "University of Edinburgh · Distinction · Chevening Scholar", period: "2024" },
      { title: "Judge",                                       org: "Information is Beautiful Awards",               period: "2023, 2024"       },
      { title: "Selected Participant",                        org: "Google News Initiative, Asia Pacific Product Lab", period: "2022"            },
      { title: "Singapore Representative",                    org: "IATSS Forum Leadership Programme, 62nd batch",  period: "Sep–Nov 2019"      },
      { title: "Curatorial Research Assistant",               org: "Asian Civilisations Museum",                    period: "Oct 2014–Jan 2017" },
      { title: "BA (Hons), History & European Studies",       org: "National University of Singapore | Second Class Upper", period: "2010–2014" },
      // Add more roles here:
      // { title: "", org: "", period: "" },
    ],
  },

  /* ── AWARDS ─────────────────────────────────── */
  awards: {
    chapter: "Awards",
    heading:  "Prizes &amp; recognition",
    // First previewCount items show by default; the rest expand on click
    previewCount: 4,
    items: [
      { title: "Final Shortlist", org: "Sigma Data Journalism Awards", year: "2024", project: "Rubber, Race, and Colonial Exploitation", url: "https://kontinentalist.com/stories/rubber-race-and-colonial-exploitation" },
      { title: "Rising Star Young Digital Journalist Award", org: "Singapore Press Club", year: "2023", project: "", url: "" },
      { title: "Award of Excellence — Design: Regional/Local", org: "Society for News Design", year: "2023", project: "How attainable is the Singapore dream: An investigation into public housing", url: "https://kontinentalist.com/stories/affordability-of-hdb-housing-policies-and-living-cost-for-low-income-singaporeans" },
      { title: "Silver — Best News Website or Mobile Service", org: "WAN-IFRA Asian Digital Media Awards", year: "2022", project: "", url: "" },
      { title: "Gold — Best Data Visualisation", org: "WAN-IFRA Asian Digital Media Awards", year: "2022", project: "Sexual Violence in Singapore: a crisis", url: "https://kontinentalist.com/stories/sexual-assault-and-abuse-in-singapore-need-more-than-the-law" },
      { title: "Gold — Humanitarian Category", org: "Information is Beautiful Awards", year: "2022", project: "Abandoned at Sea: The desperate journey of Rohingya refugees", url: "https://kontinentalist.com/stories/the-rohingya-in-myanmar-a-refugee-crisis-at-sea/" },
      { title: "Award of Excellence — Design: Features", org: "Society for News Design", year: "2021", project: "Pasar: What makes Singapore's wet markets unique?", url: "https://kontinentalist.com/stories/wet-markets-in-singapore-are-our-heritage-and-tradition" },
      { title: "Award of Excellence — Use of Maps", org: "Society for News Design", year: "2020", project: "A River Drained: Fish, Rice and Food Security in the Mekong", url: "https://cdn-images.kontinentalist.com/static-html/food-security-mekong-river-hydropower-dam-climate-change/index.html" },
      { title: "Benjamin Batson History Prize", org: "Best Student in History Examination, B.A. (Hons) Programme, NUS", year: "AY2013–14", project: "", url: "" },
      { title: "Dean's Scholars List & Dean's List", org: "Top 1% in the Faculty of Arts and Social Sciences, NUS", year: "AY2013–14", project: "", url: "" },
      { title: "George Edwin Bogaars Memorial Book Prize", org: "Best Student in History, Arts 3 Examination, NUS", year: "AY2012–13", project: "", url: "" },
      // Add more awards here:
      // { title: "", org: "", year: "", project: "", url: "" },
    ],
        photo: "peiying_3.jpg",
  },

  
  /* ── FEATURES ───────────────────────────────── */
  features: {
    chapter: "Features",
    heading:  "Talks, articles &amp; published works",
    // First previewCount items show by default; the rest expand on click
    previewCount: 4,
    // type options: "podcast" | "article" | "interview" | "newsletter" | "talk"
    // Sorted chronologically, most recent first.
    items: [

      // -- 2026 --
      { type: "talk",      title: "Threading Uncertainty: Co-Creating a Participatory Data Experience", publisher: "Workshop with Shirley Wu", year: "2026", url: "" },
 
      // ── 2025 ──
      { type: "article", title: "Rejecting Colonial Practices in Data Storytelling", publisher: "IEEE VISAP", year: "2025", url: "https://ieeexplore.ieee.org/document/11298987" },
      { type: "talk",      title: "Rejecting colonial practices in data storytelling",            publisher: "IEEE Visualizing Arts Programme (VISAP)",            year: "2025", url: "https://www.youtube.com/watch?v=NZ0Wwrqv6fA" },
      { type: "talk",      title: "Telling data stories with care",                                publisher: "Visualizing for Hope, On Data and Design",           year: "2025", url: "https://youtu.be/gr7aZXolH0c" },
      { type: "article",   title: "Asia Focus: Why data journalism in newsrooms needs more evidence", publisher: "Global Investigative Journalism Network (GIJN)",  year: "2025", url: "https://gijn.org/stories/asia-focus-data-journalism-newsrooms-evidence/" },
      { type: "interview", title: "Charting myths, debt, and monkey farms: How Kontinentalist is reimagining data journalism in Asia", publisher: "Nieman Journalism Lab | Reuters Institute for the Study of Journalism", year: "2025", url: "https://www.niemanlab.org/2025/07/charting-myths-debt-and-monkey-farms-how-kontinentalist-is-reimagining-data-journalism-in-asia/" },
      { type: "interview", title: "Making Meaning: Metrics, Climate Data & Storytelling",          publisher: "Stockholm Environment Institute (SEI)",              year: "2025", url: "https://www.sei.org/perspectives/making-meaning-metrics-climate-data-storytelling/" },
      { type: "podcast",   title: "Work with Data ethically w/Loh Pei Ying",                        publisher: "Finding Common Ground, S4EP7",      year: "2025", url: "https://open.spotify.com/episode/0IboSB9kxFjjpkYaBWzTFR" },
      
      // ── 2024 ──
      { type: "talk",      title: "A decolonial approach to data storytelling",                    publisher: "CEST-LA-VIZ, Graphic Hunters, Utrecht",              year: "2024", url: "" },
      { type: "talk",      title: "Running Feminist Data Studios",                                  publisher: "Outlier 2024, Data Visualisation Society, Chicago", year: "2024", url: "https://youtu.be/w_C9o-lbN8I?si=APFBzeCFNBpxHr6q" },
      { type: "talk",      title: "Data is just texture",                                          publisher: "Knowledge Praxis, AcademiaSG, Singapore",            year: "2024", url: "https://www.youtube.com/watch?v=0s1RjHrNYUs" },
 
      // ── 2023 ──
      { type: "interview", title: "Diversity through Data: A Conversation with Kontinentalist's Pei Ying Loh", publisher: "Global Investigative Journalism Network (GIJN) | In Old News", year: "2023", url: "https://gijn.org/stories/diversity-data-kontinentalist/" },
      { type: "podcast",   title: "Conversations with Data, Episode 54",                            publisher: "European Journalism Centre",        year: "2023", url: "https://ejc.net/resources/conversations-with-data-episode-54" },
      { type: "podcast",   title: "Talk Data to me w/Loh Pei Ying",                                 publisher: "Finding Common Ground, S2EP4",       year: "2023", url: "https://open.spotify.com/episode/1r1gmlUNPWBlcLi8GDTKpZ?si=679685fe588d4339&nd=1&dlsi=2681315fe23847a3" },

      // ── 2022 ──
      { type: "article",   title: "Asia's Data Scene Deserves Greater Attention. That's Why We're Starting a Movement", publisher: "Nightingale", year: "2022", url: "https://nightingaledvs.com/asias-data-scene-deserves-greater-attention/" },
      { type: "podcast",   title: "Pei Ying Loh, Kontinentalist",                                  publisher: "Potluck",                                            year: "2022", url: "https://www.buzzsprout.com/734903/episodes/10250078-pei-ying-loh-kontinentalist" },
 
      // ── 2021 ──
      { type: "podcast",   title: "Kontinentalist's Peiying Loh talks about creating data-driven stories on Asia", publisher: "Splice Lo-Fi", year: "2021", url: "https://open.spotify.com/show/5xH2addh28n7AVnt32mpsB" },
    
 
      // ── 2016–2015 ──
      { type: "article",   title: "Christianity in 19th-century Singapore",                         publisher: "Christianity in Asia: Sacred Art and Visual Splendour, Asian Civilisations Museum", year: "2016", url: "" },
      { type: "article",   title: "The Evolving Narrative",                                         publisher: "ISSUE: The History, Substation",                     year: "2015", url: "" },
      { type: "article",   title: "An Unlikely Tool",                                               publisher: "ISSUE: Propaganda, Substation",                      year: "2015", url: "" },
      // Add more items here:
      // { type: "podcast", title: "", publisher: "", year: "", url: "" },
    ],
    // Replace null with a photo path, e.g. "images/features.jpg"
    photo: "peiying_2.jpg",
  },

  /* ── STUDIO ─────────────────────────────────── */
  studio: {
    chapter: "My Works",
    // Each string = one paragraph
    prose: [
      `At the intersection of <span class="ag">data</span>, <span class="ay">feminism</span>, craft &amp; history.`,
      `Processing through knowledge and stories through tactile and slow experiences, and exploring what it means to work across digital and the physical.`,
    ],
    // Carousel projects. Add your own images by setting imageSrc.
    // Each project links to project.html?id=YOUR_ID
    projects: [
      {
        id:          "museum-orang-laut",
        title:       "Lawan Lupa (Fight the Forgetting) Orang Laut and Modes of Memory",
        tags:        ["data", "history", "decolonisation", "indigenity", "memory"],
        year:        "2024",
        description: "A two-fold epistemic conversation around Singapore’s Orang Laut and their representations in “modes of memory” that is explored through a knowledge product and this supporting paper.",
        imageSrc:    "lawanlupa.jpg",  // e.g. "images/rubber-race.jpg"
        accentColor: "#F2D94E",
        longDescription: "A group of Indigenous seafarers in the seas around Singapore, the Orang Laut’s presence has been erased from the nation-state’s collective memory and landscapes, and described as “forgotten”. In recent years, a rise in Indigenous activism has brought their narratives to greater awareness. This project and study adopts an interdisciplinary and decolonial approach, blending historical and narrative critique, qualitative text and data analysis, and participatory methods. I unpack how coloniality is constructed in Singapore through epistemic, material, and symbolic dimensions through an analysis of the state’s mechanisms of erasure in narratives and institutionalised memories. I argue that the Orang Laut are not forgotten, but erased, through these knowledge and narrative instruments. As a response and means to disrupt coloniality, my knowledge product draws on collective knowledge and wisdom of Orang Laut communities, and collaborates with them to offer a counter-mapping memory repository of inherently different construction.",
      },
      {
        id:          "rubber-race",
        title:       "Rubber, Race & Colonial Exploitation",
        tags:        ["data", "history", "colonialism"],
        year:        "2023",
        description: "How the rubber industry in Singapore and Malaysia was built on colonial extraction: a story of land, labour, and racial hierarchy that shaped the modern economy.",
        imageSrc:    "rubber.jpg",  // e.g. "images/rubber-race.jpg"
        accentColor: "#4BA840",
      },
      {
        id:          "mekong",
        title:       "A River Drained: Fish, Rice, and Food Security in the Mekong",
        tags:        ["data", "environment", "food systems", "climate change"],
        year:        "2020",
        description: "Food security along the Mekong River: how damming, climate change, and geopolitics are threatening fish stocks and the livelihoods of millions.",
        imageSrc:    "mekong.jpg",
        accentColor: "#F2D94E",
      },
      {
        id:          "pasar",
        title:       "Pasar: What makes Singapore's wet markets unique?",
        tags:        ["culture", "singapore", "society","heritage"],
        year:        "2021",
        description: "What makes Singapore's wet markets unique: their history, social role, and why they persist in a city defined by modernity.",
        imageSrc:    "pasar.jpg",
        accentColor: "#111111",
      },
      {
        id:          "housing",
        title:       "How attainable is the Singapore dream? An investigation into public housing",
        tags:        ["housing", "inequality", "data"],
        year:        "2022",
        description: "An investigation into public housing and the gap between the dream and the reality for different communities.",
        imageSrc:    "housing.jpg",
        accentColor: "#4BA840",
      },
      // Add more projects here:
      // { id: "", title: "", tags: [], year: "", description: "", imageSrc: null, accentColor: "#4BA840" },
    ],
  },

  /* ── CONTACT ─────────────────────────────────── */
  contact: {
    chapter: "Contact",
    prose: `I'm open to collaborations, speaking engagements, consultancy, workshops, and conversations about <span class="ag">data</span>, decolonisation, <span class="ay">history</span>, and Asia.`,
    links: [
      { label: "LinkedIn",    value: "Peiying Loh",          href: "https://linkedin.com/in/peiyingloh", external: true  },
      { label: "Studio",      value: "Kontinentalist",       href: "https://kontinentalist.com",          external: true  },
    ],
  },

};
