export const profile = {
  name: 'Maverick Fabroa',
  handle: 'mavyfaby',
  role: 'Software Engineer · Architect · Designer',
  title: 'Co-Founder & CTO @ SKLoud App',
  location: 'Mandaue City, Cebu, Philippines',
  email: 'me@mavyfaby.com',
  bio: 'Co-Founder & CTO of SKLoud App. I design and ship performance-driven, security-first systems — from low-level Rust services to blockchain infrastructure to polished interfaces.',
  longBio:
    "I'm the Co-Founder & CTO of SKLoud App, where I lead engineering across web, mobile, and infrastructure. I led the development of SKLoud App from day one, and I'm the principal architect and lead software engineer behind SKLoud Aurora — our DOST-PCIEERD-funded initiative — and the SKLoud Blockchain Network powering it. I work across the stack: Rust and Go for systems, TypeScript with Vue/Nuxt/Astro on the web, Flutter on mobile, and distributed-ledger tech on chain. Performance budgets, clean architecture, and design that respects the user — that's the bar.",
  socials: {
    github: 'https://github.com/mavyfaby',
    linkedin: 'https://linkedin.com/in/mavyfaby',
    twitter: 'https://twitter.com/mavyfaby',
    facebook: 'https://facebook.com/mavyfaby',
    instagram: 'https://instagram.com/mavyfaby',
    stackoverflow: 'https://stackoverflow.com/users/11555297/maverick-fabroa',
    website: 'https://mavyfaby.com',
  },
  stats: [
    { label: 'DOST Grant · SKLoud App', value: '₱2.9M' },
    { label: 'Public Repos', value: '69+' },
    { label: 'Years Coding', value: '7+' },
    { label: 'Hackathon Wins', value: '1' },
  ],
}

export const skloud = {
  name: 'SKLoud App',
  tagline: 'Civic-tech infrastructure for the Sangguniang Kabataan.',
  description:
    'SKLoud App is a platform built to modernize how Sangguniang Kabataan (SK) units across the Philippines manage budgets, track projects, and stay compliant with government reporting requirements. We turn paperwork-heavy youth governance into a transparent, auditable, real-time system.',
  role: 'Co-Founder, CTO & Lead Software Engineer',
  highlights: [
    {
      icon: 'award',
      title: 'SKLoud Aurora · DOST-PCIEERD Awardee',
      description:
        'SKLoud Aurora — our DOST-PCIEERD-funded initiative — won a ₱2.9M research grant in 2025 to build a blockchain-based financial transparency system for SK units nationwide.',
    },
    {
      icon: 'shield',
      title: 'SKLoud Blockchain Network',
      description:
        'The SKLoud Blockchain Network is our purpose-built distributed ledger that records every SK transaction immutably — making misuse and tampering structurally impossible, not just policy-discouraged.',
    },
    {
      icon: 'cpu',
      title: 'End-to-End System',
      description:
        'Budget management, project tracking, and automated compliance with COA and DILG reporting requirements — all in one platform.',
    },
    {
      icon: 'users',
      title: 'For Every Barangay',
      description:
        'Designed to scale across 42,000+ barangays nationwide. Built for the youth, by people who code.',
    },
  ],
  myRole: [
    'Co-founded SKLoud App and led it from concept to production.',
    'Authored and led the SKLoud Aurora DOST-PCIEERD proposal — securing ₱2.9M in research funding.',
    'Principal architect and lead engineer of the SKLoud Blockchain Network.',
    'Owning the technical roadmap: smart contracts, ledger design, mobile/web stack, and infra.',
  ],
}

export const skills = [
  { name: 'TypeScript', level: 88 },
  { name: 'Vue / Nuxt', level: 85 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Bun / Node.js', level: 80 },
  { name: 'Astro', level: 70 },
  { name: 'Java', level: 72 },
  { name: 'JavaScript', level: 82 },
  { name: 'Flutter / Dart', level: 65 },
  { name: 'PostgreSQL / SQLite', level: 65 },
  { name: 'Go', level: 55 },
  { name: 'Kotlin', level: 50 },
  { name: 'Python', level: 50 },
  { name: 'Rust', level: 40 },
  { name: 'C / C#', level: 40 },
  { name: 'PyTorch', level: 35 },
]

export const languages = [
  { name: 'TypeScript', percent: 24, shade: 100 },
  { name: 'JavaScript', percent: 18, shade: 90 },
  { name: 'Vue (SFC)', percent: 15, shade: 80 },
  { name: 'Java', percent: 14, shade: 70 },
  { name: 'Dart', percent: 7, shade: 60 },
  { name: 'Python', percent: 5, shade: 50 },
  { name: 'Go', percent: 4, shade: 40 },
  { name: 'HTML / CSS', percent: 4, shade: 35 },
  { name: 'Kotlin', percent: 3, shade: 30 },
  { name: 'Rust', percent: 2, shade: 25 },
  { name: 'C / C#', percent: 2, shade: 20 },
  { name: 'Other', percent: 2, shade: 10 },
]

export const projects = [
  {
    name: 'SKLoud App',
    description:
      'Civic-tech platform for Sangguniang Kabataan: budgets, project tracking, and compliance — co-founded and led from concept to production.',
    language: 'TypeScript',
    stars: null,
    url: 'https://skloud.app',
    tags: ['co-founder', 'cto', 'flagship'],
    featured: true,
    highlight: true,
  },
  {
    name: 'SKLoud Aurora',
    description:
      'Our DOST-PCIEERD-funded R&D initiative (₱2.9M grant) building the SKLoud Blockchain Network — a financial transparency layer for SK units. I authored the proposal and lead it as principal architect. Currently in active development.',
    language: 'Rust',
    stars: null,
    url: 'https://skloud.app',
    tags: ['blockchain', 'dost-pcieerd', 'in progress'],
    featured: true,
    highlight: true,
    status: 'in-progress',
  },
  {
    name: 'tiny-excel',
    description: 'A promise-based, fast and simple .xlsx file editor using Bun APIs.',
    language: 'TypeScript',
    stars: 12,
    url: 'https://github.com/mavyfaby/tiny-excel',
    tags: ['bun', 'xlsx', 'performance'],
    featured: true,
  },
  {
    name: 'INTRVWR',
    description: '10th ICT Congress 2024 Hackathon Champion — AI-assisted interview platform.',
    language: 'Vue',
    stars: 2,
    url: 'https://github.com/mavyfaby/bytecode7-hackathon2024',
    tags: ['vue3', 'hackathon', 'champion'],
    featured: true,
  },
  {
    name: 'student_app',
    description: 'A Flutter + Material 3 student app with SQLite-backed local storage.',
    language: 'Dart',
    stars: 5,
    url: 'https://github.com/mavyfaby/student_app',
    tags: ['flutter', 'material3', 'sqflite'],
    featured: true,
  },
  {
    name: 'qualthea-api',
    description: 'Go-based REST API for a bookstore with AI-powered book recommendations.',
    language: 'Go',
    stars: 0,
    url: 'https://github.com/mavyfaby/qualthea-api',
    tags: ['go', 'rest', 'ai'],
    featured: true,
  },
  {
    name: 'url-shortener',
    description: 'A fast and minimal URL shortener service written in Rust.',
    language: 'Rust',
    stars: 1,
    url: 'https://github.com/mavyfaby/url-shortener',
    tags: ['rust', 'web'],
    featured: true,
  },
  {
    name: 'hlsc',
    description: 'A high-level Simpletron instructions compiler and interpreter written in Java.',
    language: 'Java',
    stars: 1,
    url: 'https://github.com/mavyfaby/hlsc',
    tags: ['compiler', 'interpreter'],
    featured: true,
  },
  {
    name: 'kv-store-rust-benchmark',
    description: 'Benchmarks comparing Rust KV store libraries under realistic workloads.',
    language: 'Rust',
    stars: 0,
    url: 'https://github.com/mavyfaby/kv-store-rust-benchmark',
    tags: ['rust', 'benchmark'],
    featured: false,
  },
  {
    name: 'baybayin-to-text',
    description: 'A tool that converts ancient Baybayin script into modern Filipino text.',
    language: 'HTML',
    stars: 1,
    url: 'https://github.com/mavyfaby/baybayin-to-text',
    tags: ['filipino', 'culture'],
    featured: false,
  },
  {
    name: 'gestx_animations',
    description: 'manim-based animations demonstrating how the GestX gesture model learns.',
    language: 'Jupyter Notebook',
    stars: 1,
    url: 'https://github.com/mavyfaby/gestx_animations',
    tags: ['ml', 'manim'],
    featured: false,
  },
]

export const contributions = [
  {
    name: 'PrimeVue',
    description: 'Next-generation Vue UI component library used by 100k+ developers.',
    role: 'Contributor',
    url: 'https://github.com/mavyfaby/primevue',
  },
  {
    name: 'Material Web',
    description: "Google's Material Design web components.",
    role: 'Contributor',
    url: 'https://github.com/mavyfaby/material-web',
  },
  {
    name: 'flutter_nearby_connections',
    description: 'Flutter plugin for peer-to-peer connectivity and device discovery.',
    role: 'Contributor',
    url: 'https://github.com/mavyfaby/flutter_nearby_connections',
  },
  {
    name: 'another-flushbar',
    description: 'Flexible Flutter widget for user notifications, replacing Snackbars.',
    role: 'Contributor',
    url: 'https://github.com/mavyfaby/another-flushbar',
  },
  {
    name: 'arduinoWebSockets',
    description: 'WebSocket client/server for Arduino and ESP devices.',
    role: 'Contributor',
    url: 'https://github.com/mavyfaby/arduinoWebSockets',
  },
  {
    name: 'vue-recaptcha',
    description: 'Google reCAPTCHA component for Vue.js applications.',
    role: 'Contributor',
    url: 'https://github.com/mavyfaby/vue-recaptcha',
  },
]

export const certificates = [
  {
    title: 'SKLoud Aurora — DOST-PCIEERD ₱2.9M Awardee',
    issuer: 'Department of Science and Technology · PCIEERD',
    year: '2025',
    description:
      'Authored and led the winning SKLoud Aurora proposal — a blockchain-based financial transparency platform for Sangguniang Kabataan units, powered by the SKLoud Blockchain Network. Granted ₱2.9M to develop as principal architect.',
    category: 'award',
  },
  {
    title: 'ICT Congress 2024 Hackathon — Champion',
    issuer: 'UC Main · ByteCode7',
    year: '2024',
    description:
      'Built INTRVWR, an AI-assisted interview platform — first place out of all participating teams at the 10th ICT Congress.',
    category: 'award',
  },
  {
    title: 'Hack4Gov 2023 CTF — Top 2 Overall (Individual Scoring)',
    issuer: 'DICT Region VII · Hack4Gov',
    year: '2023',
    description:
      'Placed 2nd overall in individual scoring at the Hack4Gov 2023 Capture-The-Flag competition, competing against participants from 7 schools across Region VII.',
    category: 'award',
  },
  {
    title: "Dean's Lister",
    issuer: 'University of Cebu, Main',
    year: '2020 — 2024',
    description:
      'Recognized for sustained academic excellence throughout the BS Computer Science program.',
    category: 'award',
  },
  {
    title: 'Project Manager — UC Main CSP-S',
    issuer: 'UC Main — CSP-S',
    year: '2023 — 2024',
    description:
      'Led project management for the UC Main CSP-S. Developed and shipped the webapp used for tatakforms for all UC Main campuses and the ICT Congress 2024 registration app.',
    category: 'role',
  },
  {
    title: 'AWS Academy — Academic Technology Associate (ATA) Completer',
    issuer: 'Amazon Web Services Academy',
    year: '2024',
    description:
      'Completed the AWS ATA program covering cloud architecture, core services, security, and operational best practices on AWS.',
    category: 'cert',
  },
  {
    title: 'ServiceNow — Course Completer',
    issuer: 'ServiceNow',
    year: '2024',
    description:
      'Completed the ServiceNow developer training program — application design, scripting, and platform fundamentals.',
    category: 'cert',
  },
  {
    title: 'Intercampus ICT Congress 2024 — Registration & Attendance App',
    issuer: 'University of Cebu',
    year: '2024',
    description:
      'Built the official intercampus registration and attendance system used across UC campuses for ICT Congress 2024.',
    category: 'shipped',
  },
  {
    title: 'UC Days — Registration & Tatakforms App',
    issuer: 'University of Cebu',
    year: '2023',
    description:
      'Co-developed the UC Days event registration platform and the Tatakforms submission system used by the university.',
    category: 'shipped',
  },
  {
    title: 'GestX — Hand-Gesture HCI System',
    issuer: 'Undergraduate Thesis · UC Main',
    year: '2024',
    description:
      'Designed and built a high-accuracy hand-gesture-based computer control system for Human-Computer Interaction. Includes a manim-based research animation explaining how the model learns.',
    category: 'shipped',
  },
  {
    title: 'BS Computer Science',
    issuer: 'University of Cebu, Main',
    year: '2020 — 2024',
    description:
      'Bachelor of Science in Computer Science. Focus on systems programming, machine learning, software architecture, and HCI.',
    category: 'education',
  },
  {
    title: 'Open-Source Maintainer',
    issuer: 'GitHub @mavyfaby',
    year: '2019 — Present',
    description:
      '69+ public repositories spanning systems, web, mobile, and ML. Active contributor to PrimeVue, Material Web, and the Flutter ecosystem.',
    category: 'role',
  },
]

export const experience = [
  {
    role: 'Co-Founder, CTO & Lead Engineer',
    company: 'SKLoud App',
    period: '2024 — Present',
    description:
      'Co-founded SKLoud App and led it from concept to production. Authored SKLoud Aurora — the winning DOST-PCIEERD proposal (₱2.9M grant) — and lead the SKLoud Blockchain Network as principal architect.',
  },
  {
    role: 'Full-Stack & Systems Engineer',
    company: 'Independent · Open Source',
    period: '2019 — Present',
    description:
      'Shipped 69+ public projects across Rust, Go, TypeScript, Vue, and Flutter. Contributed to PrimeVue, Material Web, and various Flutter plugins.',
  },
  {
    role: 'Project Manager — UC CSP-S',
    company: 'Computer Science Program Society · UC Main',
    period: '2023 — 2024',
    description:
      'Led project management for CSP-S. Built and shipped the UC Main CSP-S Web App used by the org. Outgoing PM after a year of cross-team delivery.',
  },
  {
    role: 'Hackathon Champion',
    company: 'ICT Congress 2024 · ByteCode7',
    period: '2024',
    description:
      'Led a winning team to build INTRVWR — an AI-assisted interview platform — taking first place at UC Main.',
  },
  {
    role: 'CTF Top 2 Individual · Region VII',
    company: 'Hack4Gov 2023 · DICT',
    period: '2023',
    description:
      'Placed 2nd overall in individual scoring at the Hack4Gov 2023 CTF, against participants from 7 schools across Region VII.',
  },
]
