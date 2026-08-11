export const profile = {
  name: 'Maverick Fabroa',
  handle: 'mavyfaby',
  role: 'Software Engineer · Architect · Designer',
  title: 'Co-Founder & CIO @ SKLoud App',
  location: 'Mandaue City, Cebu, Philippines',
  email: 'me@mavyfaby.com',
  bio: 'I build civic-tech infrastructure for youth councils across the Philippines — from Rust services to blockchain systems to the interfaces on top of them.',
  longBio:
    "I'm the Co-Founder & CIO of SKLoud App, where I work on engineering across web, mobile, and infrastructure. I've been on it since day one, and I'm the lead architect for SKLoud Aurora — a DOST-PCIEERD-funded project — and the blockchain network behind it. Day to day that means Rust and Go for systems, TypeScript with Vue/Nuxt/Astro on the web, Flutter on mobile, and distributed-ledger work on chain. I care about performance budgets, clean architecture, and interfaces that don't waste the user's time.",
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
    { label: 'Years Coding', value: '8+' },
    { label: 'Public Repos', value: '69+' },
  ],
}

export const skloud = {
  name: 'SKLoud App',
  tagline: 'Civic-tech infrastructure for the Sangguniang Kabataan.',
  description:
    'SKLoud App is a platform built to modernize how Sangguniang Kabataan (SK) units across the Philippines manage budgets, track projects, and stay compliant with government reporting requirements. We turn paperwork-heavy youth governance into a transparent, auditable, real-time system.',
  role: 'Co-Founder, CIO & Software Engineer',
  highlights: [
    {
      icon: 'award',
      title: 'SKLoud Aurora',
      description:
        'A DOST-PCIEERD-funded research project, started 2025, building a blockchain-based financial transparency system for SK units.',
    },
    {
      icon: 'shield',
      title: 'SKLoud Blockchain Network',
      description:
        'A purpose-built distributed ledger that records SK transactions immutably, so tampering is prevented by the system rather than by policy.',
    },
    {
      icon: 'cpu',
      title: 'End-to-End System',
      description:
        'Budget management, project tracking, and automated compliance with COA and DILG reporting requirements — all in one platform.',
    },
    {
      icon: 'users',
      title: 'Built to Scale',
      description:
        'Designed to work across the 42,000+ barangays nationwide, for youth councils that mostly run on paperwork today.',
    },
  ],
  myRole: [
    'Co-founded SKLoud App and worked on it from concept to production.',
    'Lead architect for the SKLoud Blockchain Network.',
    'Own the technical roadmap: smart contracts, ledger design, mobile/web stack, and infra.',
  ],
}

// Grouped by domain rather than self-rated percentages. Order within each
// group runs from what I reach for most often to least.
export const skillGroups = [
  {
    name: 'Web',
    items: ['TypeScript', 'JavaScript', 'Vue / Nuxt', 'Astro', 'Tailwind CSS', 'Bun / Node.js'],
  },
  {
    name: 'Systems',
    items: ['Rust', 'Go', 'Java', 'C / C#'],
  },
  {
    name: 'Mobile',
    items: ['Flutter / Dart', 'Kotlin'],
  },
  {
    name: 'Data & ML',
    items: ['PostgreSQL / SQLite', 'Python', 'PyTorch'],
  },
]

// Flat list, kept for SEO keywords in the layout head.
export const skills = skillGroups.flatMap((group) =>
  group.items.map((name) => ({ name })),
)

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
      'Civic-tech platform for Sangguniang Kabataan: budgets, project tracking, and compliance. Co-founded it and worked on it from concept to production.',
    language: 'TypeScript',
    stars: null,
    url: 'https://skloud.app',
    tags: ['co-founder', 'cio', 'civic-tech'],
    featured: true,
    highlight: true,
  },
  {
    name: 'SKLoud Aurora',
    description:
      "A DOST-PCIEERD-funded R&D project building the SKLoud Blockchain Network — a financial transparency layer for SK units. I'm the lead architect. In active development.",
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
      'An open-source community emergency response network for the Philippines — hold one button to reach nearby volunteer responders with your location, no mobile subscription or load required. Written in Rust. In active development.',
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
    description: 'A promise-based .xlsx file editor built on Bun APIs.',
    language: 'TypeScript',
    stars: 12,
    url: 'https://github.com/mavyfaby/tiny-excel',
    tags: ['bun', 'xlsx', 'performance'],
    featured: true,
  },
  {
    name: 'INTRVWR',
    description: 'An AI-assisted interview platform, built for the 10th ICT Congress 2024 hackathon. Won first place.',
    language: 'Vue',
    stars: 2,
    url: 'https://github.com/mavyfaby/bytecode7-hackathon2024',
    tags: ['vue3', 'hackathon', 'ai'],
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
    description: 'A minimal URL shortener service written in Rust.',
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
    title: 'SKLoud Aurora — DOST-PCIEERD Research Grant',
    issuer: 'Department of Science and Technology · PCIEERD',
    year: '2025',
    description:
      'The SKLoud SDS team secured funding for SKLoud Aurora — a blockchain-based financial transparency platform for Sangguniang Kabataan units. I serve as its lead architect.',
    category: 'award',
  },
  {
    title: 'ICT Congress 2024 Hackathon — First Place',
    issuer: 'UC Main · ByteCode7',
    year: '2024',
    description:
      'Built INTRVWR, an AI-assisted interview platform, at the 10th ICT Congress hackathon.',
    category: 'award',
  },
  {
    title: 'Hack4Gov 2023 CTF — Top 2, Individual Scoring',
    issuer: 'DICT Region VII · Hack4Gov',
    year: '2023',
    description:
      'Placed 2nd in individual scoring at the Hack4Gov 2023 Capture-The-Flag competition, with participants from 7 schools across Region VII.',
    category: 'award',
  },
  {
    title: "Dean's Lister",
    issuer: 'University of Cebu, Main',
    year: '2020 — 2024',
    description: 'Named to the Dean\'s List across the BS Computer Science program.',
    category: 'award',
  },
  {
    title: 'Project Manager — UC Main CSP-S',
    issuer: 'UC Main — CSP-S',
    year: '2023 — 2024',
    description:
      'Handled project management for UC Main CSP-S. Built the tatakforms webapp used across UC Main campuses and the ICT Congress 2024 registration app.',
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
      'Built the intercampus registration and attendance system used across UC campuses for ICT Congress 2024.',
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
      'Built a hand-gesture-based computer control system for Human-Computer Interaction. Includes a manim-based animation explaining how the model learns.',
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
      '69+ public repositories spanning systems, web, mobile, and ML. Contributor to PrimeVue, Material Web, and the Flutter ecosystem.',
    category: 'role',
  },
]

export const experience = [
  {
    role: 'Co-Founder & CIO',
    company: 'SKLoud App',
    period: '2024 — Present',
    description:
      'Co-founded SKLoud App and worked on it from concept to production. Lead architect for SKLoud Aurora and the SKLoud Blockchain Network behind it.',
  },
  {
    role: 'Project Manager / Full-stack Developer / UI/UX Designer',
    company: 'Computing Society of the Philippines - Students · UC Main',
    period: 'Apr 2023 — Jun 2024',
    description:
      'Project Manager and Full-Stack Developer for UC Main CSP-S, A.Y. 2023-2024. Delivered student organization systems and designed the web experiences around them.',
  },
  {
    role: 'IT Supervisor / Senior Software Engineer',
    company: 'Wellmade Motors & Development Corp.',
    period: 'Nov 2019 — Present',
    description:
      'Currently IT Supervisor / Senior Software Engineer, after starting as a Work Immersion Trainee and Junior Software Engineer. Built the ERP platform that runs their multi-branch operations.',
  },
]
