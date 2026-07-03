export const profile = {
  name: "Omar Al-Midani",
  title: "Full Stack Developer",
  location: "Damascus, Syria",
  tagline: "Full Stack Developer with strong Laravel back-end expertise and modern ReactJS front-end delivery.",
  resume: "./Omar_Al-Midani_CV.pdf",
  contact: {
    email: "omarmidani90@gmail.com",
    linkedin: "https://www.linkedin.com/in/omar-al-midani",
    github: "https://github.com/Omarmidanii",
    codeforces: "https://codeforces.com/profile/Omar_Al_Midani"
  },
  metrics: [
    { value: "1500+", label: "Problems solved", detail: "Codeforces, AtCoder, LeetCode" },
    { value: "Bronze", label: "ACM medal", detail: "Damascus University Local Contest" },
    { value: "AI", label: "Bachelor track", detail: "Damascus University" },
    { value: "Full-stack", label: "Delivery", detail: "Laravel + ReactJS" }
  ],
  skills: [
    {
      group: "Languages & Frameworks",
      items: ["PHP", "JavaScript", "TypeScript", "C++", "Laravel", "ReactJS"]
    },
    {
      group: "Front-end Libraries",
      items: ["Zustand", "React Query", "React Router", "MUI", "Bootstrap", "Chakra UI"]
    },
    {
      group: "Back-end & Data",
      items: ["REST APIs", "MySQL", "ElasticSearch", "Firebase", "Payment Integration", "Pusher"]
    },
    {
      group: "Engineering Practices",
      items: ["SOLID", "MVC", "Repository-Service Pattern", "Clean Code", "Git", "Postman"]
    }
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "ZORBA Company",
      period: "Mar 2025 - Present",
      type: "Current role",
      summary: "Developing and maintaining full-stack web applications with Laravel and ReactJS.",
      highlights: [
        "Implemented payment integration, ElasticSearch for high-volume data, and real-time chat and notifications.",
        "Collaborated with a team to design scalable, maintainable application solutions.",
        "Contributed across front-end, back-end, integrations, and production feature delivery."
      ],
      stack: ["Laravel", "ReactJS", "ElasticSearch", "Pusher", "Payment APIs"]
    },
    {
      role: "Back-End Developer",
      company: "Mshwar - Tourism Website",
      period: "Oct 2024 - Mar 2025",
      type: "Product platform",
      summary: "Built the full Laravel back end for a proprietary tourism website.",
      highlights: [
        "Developed features for managing tourist content and site structure.",
        "Delivered a maintainable back-end foundation for tourism content operations.",
        "Worked on a proprietary project that is not publicly available."
      ],
      stack: ["Laravel", "MySQL", "REST APIs"],
      links: [{ label: "Website", href: "https://mshwar.sy" }]
    },
    {
      role: "Freelance Full Stack Developer",
      company: "The Magic of The East",
      period: "Jul 2024 - Nov 2024",
      type: "Freelance project",
      summary: "Built a Laravel and ReactJS application for furniture warehouse operations.",
      highlights: [
        "Implemented product tracking, customer purchase history, warehouse expenses, and admin views.",
        "Created operational interfaces to support warehouse visibility and administration.",
        "Delivered the project end-to-end as a full-stack freelance engagement."
      ],
      stack: ["Laravel", "ReactJS", "MySQL"],
      links: [
        { label: "Website", href: "https://sehr-alsharq.sy" },
        { label: "GitHub", href: "https://github.com/Omarmidanii/The-Magic-of-The-East" }
      ]
    },
    {
      role: "Full Stack Developer - Volunteer",
      company: "Syrian Red Crescent",
      period: "Apr 2024 - Aug 2024",
      type: "Volunteer impact",
      summary: "Led front-end development and assisted with back-end delivery for internal operational tools.",
      highlights: [
        "Developed tools to manage transactions between donors and warehouses.",
        "Supported reporting workflows and mobile-friendly access.",
        "The project was frozen due to war conditions."
      ],
      stack: ["ReactJS", "Laravel", "Reporting", "Mobile Access"],
      links: [{ label: "GitHub", href: "https://github.com/Ahmadkadoura/swis" }]
    }
  ],
  projects: [
    {
      name: "ZORBA Web Applications",
      category: "Full-stack product engineering",
      description: "Feature-rich applications using Laravel and ReactJS, including real-time communication, notifications, payment workflows, and search at scale.",
      impact: "Production-oriented engineering across back-end, front-end, and integrations.",
      tags: ["Laravel", "ReactJS", "ElasticSearch", "Real-time", "Payments"]
    },
    {
      name: "Mshwar Tourism Website",
      category: "Back-end architecture",
      description: "A proprietary Laravel back end for tourism content and website structure management.",
      impact: "Structured content operations for a tourism platform.",
      tags: ["Laravel", "REST APIs", "MySQL"],
      links: [{ label: "Visit", href: "https://mshwar.sy" }]
    },
    {
      name: "The Magic of The East",
      category: "Warehouse management system",
      description: "A furniture warehouse web app for product tracking, customer purchase history, expense management, and admin oversight.",
      impact: "Improved visibility across inventory, customers, and operational expenses.",
      tags: ["Laravel", "ReactJS", "Admin Views", "Warehouse"],
      links: [
        { label: "Visit", href: "https://sehr-alsharq.sy" },
        { label: "Code", href: "https://github.com/Omarmidanii/The-Magic-of-The-East" }
      ]
    },
    {
      name: "Syrian Red Crescent SWIS",
      category: "Volunteer operations platform",
      description: "A donor-to-warehouse transaction management tool with reporting and mobile access support.",
      impact: "Designed to support humanitarian operations and reporting workflows.",
      tags: ["ReactJS", "Laravel", "Reports", "Mobile Access"],
      links: [{ label: "Code", href: "https://github.com/Ahmadkadoura/swis" }]
    }
  ],
  education: [
    {
      title: "Bachelor of Artificial Intelligence",
      organization: "Damascus University",
      period: "2021 - Present",
      detail: "Academic foundation in AI, computer science, and technical problem solving."
    },
    {
      title: "Diploma in English",
      organization: "New Horizons Center",
      period: "2020 - 2021",
      detail: "English communication foundation for professional and technical environments."
    },
    {
      title: "ACM Programming Contest - Bronze Medal",
      organization: "Damascus University Local Contest",
      period: "Jun 2023",
      detail: "Bronze Medal, 9th place; competitive programming and algorithmic problem solving."
    },
    {
      title: "Competitive Programming Coach",
      organization: "Problem Solving",
      period: "Ongoing",
      detail: "Coaching algorithmic problem solving with experience across Codeforces, AtCoder, and LeetCode."
    }
  ]
};
