export const profile = {
  name: "Omar Al-Midani",
  title: "Artificial Intelligence Engineer & Full Stack Developer",
  location: "Damascus, Syria",
  tagline: "I build practical AI and web systems: OCR pipelines, intelligent agents, healthcare automation, Laravel/React platforms, search, payments, and real-time tools.",
  resume: "./Omar-Al-Midani-Merged-Humanized-CV.pdf",
  contact: {
    email: "omarmidani90@gmail.com",
    linkedin: "https://www.linkedin.com/in/omar-al-midani/",
    github: "https://github.com/Omarmidanii",
    codeforces: "https://codeforces.com/profile/Omar_Al_Midani"
  },
  metrics: [
    { value: "AI + Web", label: "Main direction", detail: "OCR, agents, Laravel, React" },
    { value: "2000+", label: "Problems solved", detail: "Codeforces, AtCoder, LeetCode" },
    { value: "18th", label: "SCPC 2025", detail: "Top 20 national finish in Syria" },
    { value: "2x", label: "DCPC medalist", detail: "Damascus contests in 2022 and 2024" }
  ],
  sceneSkills: ["OCR", "Python", "Agents", "Laravel", "ReactJS", "MySQL", "WebSockets", "ElasticSearch"],
  skills: [
    {
      group: "Applied AI & Automation",
      items: ["OCR Optimization", "Model Fine-Tuning", "NLP", "NLU", "Email Classification", "Agent Systems", "Gesture Recognition"]
    },
    {
      group: "Full-Stack Development",
      items: ["Laravel", "Laravel Blade", "ReactJS", "TypeScript", "JavaScript", "PHP", "REST APIs", "MySQL"]
    },
    {
      group: "Product Systems",
      items: ["ElasticSearch", "WebSockets", "Pusher", "Stripe", "PayPal", "Webhooks", "Automated Invoicing", "Real-Time Chat"]
    },
    {
      group: "Front-End Toolkit",
      items: ["Zustand", "React Query", "React Router", "MUI", "Bootstrap", "Chakra UI", "Firebase"]
    },
    {
      group: "Engineering Practices",
      items: ["Git", "Postman", "Debugging", "Clean Code", "SOLID", "MVC", "Repository-Service Pattern"]
    },
    {
      group: "Algorithmic Strength",
      items: ["C++", "Dynamic Programming", "Graph Theory", "Advanced Data Structures", "Computational Geometry", "Complexity Optimization"]
    }
  ],
  experience: [
    {
      role: "Artificial Intelligence Engineer",
      company: "TOOLII",
      period: "Jul 2025 - Dec 2025",
      type: "Applied AI and healthcare automation",
      summary: "Worked on the kind of AI that has to survive real workflows: documents, patients, appointments, robots, dashboards, and automation around messy incoming data.",
      highlights: [
        "Replaced a paid Azure OCR workflow with a fine-tuned open-source alternative, reducing recurring OCR cost while keeping reliable document extraction.",
        "Designed an intelligent agent system for a robotic clinic receptionist and implemented gesture-control modules to make patient interaction more natural.",
        "Built a Python desktop tool that extracts and classifies incoming emails by patient-information interests, reducing manual triage and data entry.",
        "Developed a Laravel clinic management platform with Blade UI, doctor approval dashboards, appointment workflows, and an AI bot for patient questions and reservations."
      ],
      stack: ["Python", "OCR", "Fine-Tuning", "NLP/NLU", "Agents", "Gesture Recognition", "Laravel", "Blade", "MySQL"],
      links: [{ label: "TOOLII", href: "https://toolii.com.au" }]
    },
    {
      role: "Full Stack Developer",
      company: "ZORBA",
      period: "Jan 2025 - Jun 2025",
      type: "Laravel and React production systems",
      summary: "Built practical production features across back end, front end, search, payments, and real-time communication.",
      highlights: [
        "Built web applications using Laravel back ends and ReactJS front ends.",
        "Used ElasticSearch for faster retrieval over high-volume data and smoother peak-traffic search workflows.",
        "Managed Stripe and PayPal payment flows, including webhooks and automated invoicing.",
        "Developed real-time chat and notification workflows with WebSockets, Pusher, and modular React components."
      ],
      stack: ["Laravel", "ReactJS", "ElasticSearch", "Stripe", "PayPal", "Webhooks", "Pusher", "WebSockets"]
    },
    {
      role: "Back-End Developer",
      company: "Mshwar - Tourism Website",
      period: "Oct 2024 - Mar 2025",
      type: "Laravel back-end development",
      summary: "Built the Laravel back end for a proprietary tourism platform, focused on content management and site structure.",
      highlights: [
        "Developed the back-end foundation for managing tourism content and website sections.",
        "Kept the implementation focused on maintainable Laravel structure for a private production project."
      ],
      stack: ["Laravel", "MySQL", "REST APIs"],
      links: [{ label: "mshwar.sy", href: "https://mshwar.sy" }]
    },
    {
      role: "Freelance Full Stack Developer",
      company: "The Magic of The East",
      period: "Jul 2024 - Nov 2024",
      type: "Warehouse management web app",
      summary: "Built a furniture warehouse web app that made stock, customers, expenses, and admin workflows easier to track.",
      highlights: [
        "Built the application with Laravel and ReactJS.",
        "Implemented product tracking, customer purchase history, warehouse expenses, and admin views."
      ],
      stack: ["Laravel", "ReactJS", "MySQL", "Admin Views"],
      links: [
        { label: "Website", href: "https://sehr-alsharq.sy" },
        { label: "GitHub", href: "https://github.com/Omarmidanii/The-Magic-of-The-East" }
      ]
    },
    {
      role: "Volunteer Full Stack Developer",
      company: "Syrian Red Crescent",
      period: "Apr 2024 - Aug 2024",
      type: "Humanitarian operations tooling",
      summary: "Helped build tools for managing donor and warehouse transactions, reporting, and mobile access. The project was frozen due to war.",
      highlights: [
        "Led front-end work and supported back-end development.",
        "Developed workflows for transactions between donors and warehouses, report generation, and mobile-friendly access."
      ],
      stack: ["ReactJS", "Laravel", "Reports", "Mobile Access"],
      links: [{ label: "GitHub", href: "https://github.com/Ahmadkadoura/swis" }]
    }
  ],
  projects: [
    {
      name: "Open-Source OCR Replacement",
      category: "AI cost optimization",
      description: "Reworked an OCR workflow so it no longer depended on a paid Azure service, using a fine-tuned open-source alternative instead.",
      impact: "Lower recurring cost while keeping document extraction accurate enough for the workflow.",
      tags: ["OCR", "Fine-Tuning", "Open Source", "Cost Optimization", "Document AI"]
    },
    {
      name: "Robotic Clinic Receptionist Agent",
      category: "Robotics and human interaction",
      description: "Designed the agent architecture for a clinic receptionist robot and implemented gesture-control modules for more natural interactions.",
      impact: "Connected AI decision flow, robotic behavior, and patient-facing interaction in one system concept.",
      tags: ["Agents", "Robotics", "Gesture Control", "HRI", "System Design"]
    },
    {
      name: "Patient Email Automation Tool",
      category: "Python automation",
      description: "Built a desktop app that extracts and classifies incoming emails based on patient-information interests.",
      impact: "Reduced manual triage and made healthcare communication easier to organize.",
      tags: ["Python", "Email Parsing", "Classification", "Desktop App", "Automation"]
    },
    {
      name: "Clinic Management Platform with AI Bot",
      category: "Healthcare web platform",
      description: "Built Laravel clinic workflows with Blade UI, doctor dashboards, appointment registration, reservations, and AI-assisted patient inquiries.",
      impact: "Made patient requests easier to capture and gave doctors a dashboard to review and approve workflows.",
      tags: ["Laravel", "Blade", "AI Bot", "MySQL", "Healthcare"],
      links: [{ label: "TOOLII", href: "https://toolii.com.au" }]
    },
    {
      name: "Tourism Back End - Mshwar",
      category: "Laravel back-end system",
      description: "Built the Laravel back end for a tourism website with modules for tourist content and site-structure management.",
      impact: "Provided the private platform foundation needed to manage travel-related content.",
      tags: ["Laravel", "MySQL", "Back End", "CMS"],
      links: [{ label: "mshwar.sy", href: "https://mshwar.sy" }]
    },
    {
      name: "The Magic of The East Warehouse App",
      category: "Freelance full-stack app",
      description: "Built a furniture warehouse system for product tracking, customer purchase history, expenses, and admin views.",
      impact: "Turned warehouse operations into a trackable web workflow instead of scattered manual records.",
      tags: ["Laravel", "ReactJS", "Warehouse", "Admin Views"],
      links: [{ label: "GitHub", href: "https://github.com/Omarmidanii/The-Magic-of-The-East" }]
    },
    {
      name: "Syrian Red Crescent Operations Tool",
      category: "Volunteer humanitarian software",
      description: "Helped build a tool for donor-warehouse transaction management, reporting, and mobile access.",
      impact: "Supported humanitarian operations with clearer transaction and reporting workflows before the project was frozen due to war.",
      tags: ["ReactJS", "Laravel", "Reports", "Mobile Access"],
      links: [{ label: "GitHub", href: "https://github.com/Ahmadkadoura/swis" }]
    }
  ],
  leadership: [
    {
      title: "SCPC 2025 - 18th Nationally",
      organization: "Syrian Collegiate Programming Contest",
      period: "2025",
      detail: "Finished in the top 20 nationally among teams from across Syria."
    },
    {
      title: "DCPC Medalist and ACM Bronze Medalist",
      organization: "Damascus University / ICPC ecosystem",
      period: "2022, 2023, 2024",
      detail: "Earned two Damascus Collegiate Programming Contest medals and an ACM bronze medal at the Damascus University Local Contest."
    },
    {
      title: "1500+ Solved Problems",
      organization: "Codeforces, AtCoder, LeetCode",
      period: "Ongoing",
      detail: "Regular contest participant with focus on computational geometry, efficient algorithms, and clean implementation under pressure."
    },
    {
      title: "Competitive Programming Coach",
      organization: "Damascus University",
      period: "Ongoing",
      detail: "Selected by peers to coach undergraduates in Dynamic Programming, Graph Theory, and Advanced Data Structures."
    }
  ],
  education: [
    {
      title: "Bachelor of Artificial Intelligence",
      organization: "Damascus University",
      period: "2021 - 2026",
      detail: "Academic track focused on artificial intelligence, algorithms, software engineering, and computer science foundations."
    },
    {
      title: "Diploma in English",
      organization: "New Horizons",
      period: "Nov 2020 - Apr 2022",
      detail: "English-language training supporting technical communication and international collaboration."
    }
  ],
  languages: [
    {
      name: "Arabic",
      level: "Mother tongue",
      detail: "Native professional and academic communication."
    },
    {
      name: "English",
      level: "C1 / B2 writing",
      detail: "C1 listening, reading, spoken production, and spoken interaction; B2 writing."
    }
  ],
  volunteering: [
    {
      title: "Media Team Volunteer",
      organization: "Faculty of Information Engineering, Damascus University",
      period: "Oct 2025 - Current",
      detail: "Served as liaison between fifth-year students and faculty members, helping communicate student concerns and coordinate academic and administrative follow-up."
    },
    {
      title: "Student Association Representative",
      organization: "Damascus University",
      period: "Jan 2026 - Current",
      detail: "Represented fifth-year AI specialization students and contributed to student-union communication and decision-making."
    }
  ]
};
