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
    name: 'Pulse',
    description:
      'An open-source community emergency response network for the Philippines — hold one button to summon nearby volunteer responders with your location, no mobile subscription or load required. Built in Rust to fill the gaps that 911 leaves. Currently in active development.',
    language: 'Rust',
    stars: 2,
    url: 'https://pulse.mavyfaby.com',
    tags: ['emergency-response', 'bayanihan', 'in progress'],
    featured: true,
    highlight: true,
    status: 'in-progress',
  },
  {
    name: 'andri',
    description:
      'All-in-one LAN speed tester in one Rust binary — TCP throughput, UDP loss/jitter, and real file-transfer speed, with network-vs-disk isolation.',
    language: 'Rust',
    stars: null,
    url: 'https://github.com/mavyfaby/andri',
    tags: ['rust', 'networking', 'cli'],
    featured: true,
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
      'We, the SKLoud SDS team, helped secure the SKLoud Aurora proposal — a blockchain-based financial transparency platform for Sangguniang Kabataan units, powered by the SKLoud Blockchain Network. Granted ₱2.9M to develop as principal architect.',
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
    category: 'platform',
  },
  {
    title: 'ServiceNow — Course Completer',
    issuer: 'ServiceNow',
    year: '2024',
    description:
      'Completed the ServiceNow developer training program — application design, scripting, and platform fundamentals.',
    category: 'platform',
  },
  {
    title: 'Python for Everybody Specialization',
    issuer: 'Coursera',
    year: '2020',
    description: 'Specialization certificate covering Python fundamentals, data structures, web data, databases, and a capstone project.',
    category: 'coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/9LK6GM63LWPL?ref=mavyfaby.com',
  },
  {
    title: 'Capstone: Retrieving, Processing, and Visualizing Data with Python',
    issuer: 'Coursera',
    year: '2020',
    description: 'Course certificate for the Python for Everybody capstone project.',
    category: 'coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/8BLX3Q7UNWZJ?ref=mavyfaby.com',
  },
  {
    title: 'Using Databases with Python',
    issuer: 'Coursera',
    year: '2020',
    description: 'Course certificate covering Python database access and SQL-backed application data.',
    category: 'coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/M9UU9BQVN49A?ref=mavyfaby.com',
  },
  {
    title: 'Crash Course on Python',
    issuer: 'Coursera',
    year: '2020',
    description: 'Course certificate covering Python scripting, automation fundamentals, and problem solving.',
    category: 'coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/6T4YEQZD9A5W?ref=mavyfaby.com',
  },
  {
    title: 'Using Python to Access Web Data',
    issuer: 'Coursera',
    year: '2020',
    description: 'Course certificate covering web scraping, APIs, and networked data access with Python.',
    category: 'coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/GK5MTDMYKDSD?ref=mavyfaby.com',
  },
  {
    title: 'Java Programming: Solving Problems with Software',
    issuer: 'Coursera · With Honors',
    year: '2020',
    description: 'Honors certificate covering Java programming fundamentals and software problem solving.',
    category: 'coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/7GYA6WTLTDEX?ref=mavyfaby.com',
  },
  {
    title: 'Enterprise System Management and Security',
    issuer: 'Coursera',
    year: '2020',
    description: 'Course certificate covering enterprise system administration and security foundations.',
    category: 'coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/6LXDDSF2QGYC?ref=mavyfaby.com',
  },
  {
    title: 'Python Data Structures',
    issuer: 'Coursera',
    year: '2020',
    description: 'Course certificate covering Python collections, data handling, and program structure.',
    category: 'coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/KWDK27BZUMPZ?ref=mavyfaby.com',
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'Coursera',
    year: '2020',
    description: 'Course certificate for foundational Python programming and problem solving.',
    category: 'coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/FG6BJJMHVVEH?ref=mavyfaby.com',
  },
  {
    title: 'Building a Dynamic Web App using PHP & MySQL',
    issuer: 'Coursera',
    year: '2020',
    description: 'Course certificate covering server-side web application fundamentals with PHP and MySQL.',
    category: 'coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/KVPD4HMGUBMG?ref=mavyfaby.com',
  },
  {
    title: 'Programming Foundations with JavaScript, HTML and CSS',
    issuer: 'Coursera · With Honors',
    year: '2020',
    description: 'Honors certificate covering web programming foundations with JavaScript, HTML, and CSS.',
    category: 'coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/P6GCJMQPH7GC?ref=mavyfaby.com',
  },
  {
    title: 'Create Interactive Dashboards with Streamlit and Python',
    issuer: 'Coursera',
    year: '2020',
    description: 'Course certificate for building interactive Python dashboards with Streamlit.',
    category: 'coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/FAGCXRX9GACQ?ref=mavyfaby.com',
  },
  {
    title: 'Creating an Interactive Story with Flutter',
    issuer: 'Coursera',
    year: '2020',
    description: 'Course certificate covering Flutter app development fundamentals.',
    category: 'coursera',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/5XGBDMDDQZC3?ref=mavyfaby.com',
  },
  {
    title: 'SoloLearn — 4 Course Certificates',
    issuer: 'SoloLearn',
    year: '2018 — 2020',
    description:
      'Completed foundational programming courses in HTML, CSS, JavaScript, and Java.',
    category: 'foundation',
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
    role: 'Co-Founder & CTO',
    company: 'SKLoud App',
    period: '2024 — Present',
    description:
      'Co-founded SKLoud App and led it from concept to production. Authored SKLoud Aurora — the winning DOST-PCIEERD proposal (₱2.9M grant) — and lead the SKLoud Blockchain Network as principal architect.',
  },
  {
    role: 'Project Manager / Full-stack Developer / UI/UX Designer',
    company: 'Computing Society of the Philippines - Students · UC Main',
    period: 'Apr 2023 — Jun 2024',
    description:
      'Served as Project Manager and Lead Full-Stack Developer for UC Main CSP-S A.Y. 2023-2024, leading delivery of student organization systems and designing polished web experiences.',
  },
  {
    role: 'IT Supervisor / Senior Software Engineer',
    company: 'Wellmade Motors & Development Corp.',
    period: 'Nov 2019 — Present',
    description:
      'Current IT Supervisor / Senior Software Engineer. Previously Junior Software Engineer and Junior Full-stack Developer (Work Immersion Trainee). Designed and developed a full-scale ERP platform supporting modern, multi-branch operations.',
  },
]
