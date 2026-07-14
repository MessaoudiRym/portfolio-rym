// ─── PORTFOLIO CONTENT ────────────────────────────────────────────────────────
// This is the ONLY file you need to edit to update your portfolio.

const DATA = {

  personal: {
    name:      "Rym Sara Messaoudi",
    firstName: "Rym Sara",
    lastName:  "Messaoudi",
    title:     "AI Engineer & Data Scientist",
    tagline:   "Building AI systems that think, learn & scale.",
    roles: [
      "AI Engineer",
      "Data Scientist",
      "LLM Developer",
      "NLP Engineer",
      "Full-Stack AI Builder"
    ],
    email:    "rym.sara.messaoudi@gmail.com",
    phone:    "+213 541 60 53 32",
    linkedin: "https://www.linkedin.com/in/rym-sara-messaoudi-b8a558211",
    github:   "https://github.com/MessaoudiRym",
    location: "Oran, Algeria",
    photo:    "assets/img/profile.png",
    heroDesc: "Telecommunications Engineer turned AI specialist — I design end-to-end intelligent systems, from LLM agents to real-time pipelines and AI-powered platforms that reach production."
  },

  about: {
    intro: "I am a Telecommunications Engineer specialised in Artificial Intelligence and Data Science, graduated from the National Higher School of Telecommunications and ICT - ENSTTIC (Oran, Algeria). What drives me is the art of transforming raw, messy data into systems that are truly intelligent — systems that understand language, reason about risk, and deliver value in the real world.",
    body: "My journey bridges two worlds: the rigorous infrastructure of telecommunications engineering and the cutting edge of modern AI. I've deployed LLM agents for email automation, built real-time Twitter sentiment dashboards on Kafka & Spark, architected a AI-powered recruitment platform with voice interviews and intelligent CV screening, and developed medical inventory systems from the ground up.\n\nCurrently at Belogic AI (Brussels), I work at the intersection of LLMs, real-time voice technology, and large-scale async processing.",
    values: [
      { icon: "✦", label: "Engineering Rigor", desc: "I build systems that are robust, scalable, and production-ready." },
      { icon: "✦", label: "End-to-End Ownership", desc: "From ideation to deployment, I own the full stack." }
    ]
  },

  stats: [
    { number: "5",  label: "Years of Study"   },
    { number: "5",  label: "Internships"      },
    { number: "7+", label: "Projects Built"   },
    { number: "4",  label: "Languages Spoken" }
  ],

  whatIDo: [
    {
      icon: "✦",
      color: "rose",
      title: "AI & LLM Engineering",
      desc: "Designing and deploying LLM-powered systems — agents, RAG pipelines, semantic search, prompt engineering, and voice AI with STT/TTS integration."
    },
    {
      icon: "◈",
      color: "gold",
      title: "Data Science & NLP",
      desc: "End-to-end data pipelines, sentiment analysis, real-time stream processing, and statistical modelling on complex datasets."
    },
    {
      icon: "◇",
      color: "lavender",
      title: "Full-Stack AI Platforms",
      desc: "Building complete AI-powered web products with React, Next.js, FastAPI, PostgreSQL, Docker, and async workers — from prototype to production."
    }
  ],

  experience: [
    {
      title:    "AI Engineer",
      company:  "Belogic AI",
      location: "Brussels, Belgium",
      period:   "Nov 2025 – July 2026",
      type:     "ai",
      points: [
        "Designed and developed an AI-powered recruitment platform end-to-end",
        "Built a real-time voice interview agent with automated scoring (WebRTC / LiveKit)",
        "Integrated LLMs and STT/TTS solutions for interview automation and response analysis",
        "Implemented an intelligent CV screening system — extraction, matching, recommendations",
        "Developed asynchronous data processing pipelines at scale (Celery, Redis)",
        "Ensured application security, monitoring and containerisation (Docker, Langfuse)"
      ],
      tags: ["Python", "TypeScript", "Next.js", "React", "FastAPI", "PostgreSQL", "Docker", "Redis", "Celery", "WebRTC", "LiveKit", "LangChain", "OpenAI API", "Deepgram", "Langfuse"]
    },
    {
      title:    "Network & Monitoring Engineer",
      company:  "Dr. C.F. BELARBI Medical Analysis Laboratory",
      location: "Oran, Algeria",
      period:   "Oct 2025 – Nov 2025",
      type:     "dev",
      points: [
        "Managed and maintained network infrastructure ensuring high availability",
        "Monitored IT service uptime and led rapid incident resolution",
        "Developed a custom internal stock management software with multi-user authentication",
        "Structured databases for medical consumables with automated low-stock alerts",
        "Designed automated notification and alert system for stock shortages",
        "Designed a modern, responsive and interactive user interface"
      ],
      tags: ["Laravel", "Inertia.js", "React", "HTML", "CSS"]
    },
    {
      title:    "AI Engineering Intern",
      company:  "SARL Baladiyatech",
      location: "Algiers, Algeria",
      period:   "Mar – May 2025",
      type:     "ai",
      points: [
        "Designed an automation agent for email inbox management and triage",
        "Built email classification pipeline and structured data extraction via LLM",
        "Implemented semantic indexing with FAISS and automated form auto-fill"
      ],
      tags: ["Python", "LLM", "FAISS", "NLP"]
    },
    {
      title:    "Telecoms Engineering Intern",
      company:  "OOREDOO",
      location: "Oran, Algeria",
      period:   "Jul – Aug 2024",
      type:     "network",
      points: [
        "Explored mobile network architecture across 2G / 3G / 4G-LTE generations",
        "Configured Ethernet networks and simulated fiber-optic traffic routing",
        "Configured microwave links"
      ],
      tags: ["Networking", "Fiber Optics", "Microwave", "4G-LTE"]
    },
    {
      title:    "Network Engineering Intern",
      company:  "MOBILIS",
      location: "Oran, Algeria",
      period:   "Aug – Sep 2023",
      type:     "network",
      points: [
        "Studied and documented mobile network equipment",
        "Configured and managed network alarms",
        "Supervised the network using U2020 software"
      ],
      tags: ["Network Supervision", "U2020", "Mobile Networks", "GSM"]
    }
  ],

  // ─── PROJECTS ─────────────────────────────────────────────────────────────────
  // accent: "rose" | "gold" | "lavender"
  // category: shown as badge on the projects page
  // featured: true → shown on the homepage highlights
  projects: [
    {
      id:        "crypto-risk",
      icon:      "fas fa-chart-line",
      accent:    "rose",
      category:  "AI / LLM",
      featured:  true,
      title:     "Cryptocurrency Investment Risk Assessment",
      shortDesc: "End-to-end LLM pipeline for automated cryptocurrency risk analysis with real-time personalised recommendations.",
      fullDesc:  "This was my Final Year Engineering Project at ENSTTIC. The goal: build an intelligent system that automatically evaluates the risks of investing in cryptocurrencies using Large Language Models.\n\nI designed and implemented a multi-source data collection pipeline that continuously gathers market data, news, and social signals. An LLM-based model then analyses and classifies risks in real time, quantifying exposure across multiple dimensions.\n\nThe system generates personalised investment recommendations based on each user's risk profile, all visualised through an intuitive Streamlit web application.",
      highlights: [
        "Designed a multi-source data collection and normalisation pipeline",
        "Built an LLM model to identify, classify and quantify investment risks in real time",
        "Generated personalised investment recommendations from risk analysis",
        "Created an interactive Streamlit web interface for investors"
      ],
      tags:    ["Python", "LLM", "Streamlit", "PyTorch", "scikit-learn", "NLTK", "Pandas", "NumPy", "Matplotlib"],
      context: "Final Year Project — ENSTTIC, 2024–2025",
      github:  "https://github.com/MessaoudiRym/crypto-risk-assessment"
    },
    {
      id:        "belogic-recruitment",
      icon:      "fas fa-users",
      accent:    "lavender",
      category:  "AI / LLM",
      featured:  false,
      title:     "AI-Powered Recruitment Platform",
      shortDesc: "End-to-end AI recruitment platform with real-time voice interviews, automated scoring, and intelligent CV screening — built professionally at Belogic AI.",
      fullDesc:  "Designed and developed end-to-end at Belogic AI (Brussels), this platform reimagines the recruitment process by embedding AI at every stage.\n\nCandidates go through a fully automated voice interview conducted by an AI agent in real time — with low-latency audio streaming, live transcription, and automated scoring of each response against job-specific rubrics.\n\nOn the HR side, an intelligent CV screening module extracts structured candidate data, matches profiles to job requirements, and ranks applicants automatically. Asynchronous processing handles CV parsing, scoring, and notifications at scale.",
      highlights: [
        "Designed and built the full-stack AI recruitment platform from scratch",
        "Built a real-time AI voice interview agent with automated answer scoring",
        "Integrated live speech transcription and LLM-based evaluation of candidate responses",
        "Implemented intelligent CV screening — structured extraction, matching and ranking",
        "Developed asynchronous data pipelines for processing at scale",
        "Containerised deployment with full LLM observability monitoring"
      ],
      tags:    ["Python", "TypeScript", "Next.js", "React", "FastAPI", "PostgreSQL", "Docker", "Redis", "Celery", "WebRTC", "LiveKit", "LangChain", "OpenAI API", "Deepgram", "Langfuse"],
      context: "Professional — Belogic AI, Brussels · Nov 2025–July 2026"
    },
    {
      id:        "email-agent",
      icon:      "fas fa-inbox",
      accent:    "lavender",
      category:  "AI / LLM",
      featured:  true,
      title:     "AI Email Automation Agent",
      shortDesc: "Intelligent agent that classifies, extracts structured data from emails and auto-fills forms — built during internship at Baladiyatech.",
      fullDesc:  "During my AI Engineering internship at SARL Baladiyatech (Algiers), I developed an intelligent email automation system to reduce manual processing time.\n\nThe agent automatically manages an email inbox: it classifies incoming messages by intent and priority, extracts structured data fields (names, dates, references, amounts) from unstructured email bodies using an LLM, and then auto-populates the appropriate application forms.\n\nSemantic indexing with FAISS allows the system to match emails to known templates and past interactions, dramatically reducing the time operators spend on repetitive inbox tasks.",
      highlights: [
        "Designed an automation agent for email inbox management and triage",
        "Built an LLM pipeline to classify emails and extract structured data fields",
        "Implemented semantic indexing with FAISS for template matching",
        "Achieved automated form auto-fill from unstructured email content"
      ],
      tags:    ["Python", "LLM", "FAISS", "NLP", "Email Automation"],
      context: "Internship — SARL Baladiyatech, Algiers · Mar–May 2025"
    },
    {
      id:        "twitter-sentiment",
      icon:      "fas fa-comments",
      accent:    "gold",
      category:  "Big Data",
      featured:  false,
      title:     "Big Data Pipeline — Twitter Sentiment",
      shortDesc: "Real-time tweet streaming with Kafka, Spark NLP & VADER sentiment analysis, indexed in Elasticsearch with live Kibana dashboards.",
      fullDesc:  "I built a complete real-time Big Data pipeline for Twitter sentiment analysis, designed to process and visualise large volumes of social data as they flow in.\n\nTweets are captured and streamed live using Apache Kafka as the message broker. A Spark Structured Streaming job then applies NLP preprocessing (cleaning, tokenisation, normalisation) and sentiment scoring via VADER.\n\nResults are indexed into Elasticsearch for fast querying and historical storage. Kibana dashboards provide live, interactive visualisations of sentiment trends, allowing analysts to monitor public opinion in real time.",
      highlights: [
        "Streamed live tweets using Apache Kafka as a real-time message broker",
        "Processed and cleaned data with Apache Spark Structured Streaming",
        "Performed NLP sentiment scoring with VADER",
        "Stored and indexed results in Elasticsearch",
        "Built interactive live dashboards in Kibana to track sentiment trends"
      ],
      tags:    ["Apache Kafka", "Apache Spark", "Elasticsearch", "Kibana", "VADER", "Python", "NLP"],
      context: "Academic Project — ENSTTIC, 2024"
    },
    {
      id:        "stock-management",
      icon:      "fas fa-warehouse",
      accent:    "lavender",
      category:  "Web Dev",
      featured:  false,
      title:     "Medical Stock Management System",
      shortDesc: "Custom internal software for managing medical consumables, with authentication, automated alerts and a real-time interactive UI.",
      fullDesc:  "Developed during my position as Network & Monitoring Engineer at Dr. C.F. BELARBI Medical Analysis Laboratory, this is a full-stack internal software solution for managing the laboratory's medical consumable inventory.\n\nThe system includes a secure multi-user authentication module with role-based access. Staff can track stock levels of all consumables, log entries and exits, and the system automatically triggers notifications and alerts when stock falls below defined thresholds — preventing shortages before they happen.\n\nBuilt with Laravel on the backend and a React/Inertia.js SPA on the frontend for a seamless, modern user experience.",
      highlights: [
        "Implemented secure multi-user authentication with role-based access control",
        "Structured a relational database for all medical consumable tracking",
        "Built automated notification and alert system for low-stock events",
        "Designed an interactive, responsive SPA interface with React and Inertia.js",
        "Deployed internally for daily use at the laboratory"
      ],
      tags:    ["Laravel", "Inertia.js", "React", "PHP", "HTML", "CSS", "MySQL"],
      context: "Professional Project — Dr. C.F. BELARBI Lab · Oct–Nov 2025"
    },
    {
      id:        "rest-api",
      icon:      "fas fa-plug",
      accent:    "gold",
      category:  "Web Dev",
      featured:  false,
      title:     "Multi-Cloud Infrastructure Management API",
      shortDesc: "Centralized REST API for managing multi-cloud infrastructure — cloud providers, virtual machines, and resources — behind token-based authentication.",
      fullDesc:  "A centralized REST API built with Flask and SQLite for managing cloud infrastructure resources across multiple providers.\n\nAfter authenticating via a token-based system, users can perform full CRUD operations on cloud providers registered in the system — adding, updating, removing and querying them. For each registered provider, the API exposes a dedicated layer to manage the associated virtual machines with the same set of operations.\n\nThe result is a unified interface that abstracts multi-cloud complexity, allowing administrators to manage all their infrastructure resources from a single API regardless of the underlying cloud provider. The API is documented with Swagger UI, deployed and exposed via ngrok, and complemented by a React frontend.",
      highlights: [
        "Designed a centralized API abstracting multi-cloud provider management",
        "Implemented full CRUD endpoints for cloud providers and their virtual machines",
        "Secured all operations with token-based authentication",
        "Documented the API with Swagger UI for interactive exploration and testing",
        "Built a React frontend consuming the API and deployed the backend via ngrok"
      ],
      tags:    ["Python Flask", "SQLite", "React", "JWT", "Swagger", "ngrok", "HTML", "CSS"],
      context: "Academic Project — ENSTTIC",
      github:  "https://github.com/MessaoudiRym/API_Gestion_Ressources_Infrastructure_MultiCloud"
    },
    {
      id:        "medical-graph",
      icon:      "fas fa-share-nodes",
      accent:    "rose",
      category:  "Web Dev",
      featured:  false,
      title:     "Medical Graph Database Application",
      shortDesc: "Graph-oriented data modelling with Neo4j, REST API for complex relationship queries, and a data visualisation interface.",
      fullDesc:  "An application for managing medical data using a graph database approach, which excels at representing and querying complex relationships between entities (patients, doctors, exams, diagnoses).\n\nThe database schema was designed and modelled in Neo4j using Cypher queries. A Python Flask REST API was developed to handle all interactions with the graph — creating nodes and relationships, traversing the graph for complex queries, and exposing data to the frontend.\n\nThe interface allows users to explore medical data visually, following relationships between entities in an intuitive way.",
      highlights: [
        "Designed and modelled a graph database schema in Neo4j using Cypher",
        "Created node and relationship management processes for medical entities",
        "Developed a Python Flask REST API to interact with the graph database",
        "Built a user interface for visualising and navigating graph data"
      ],
      tags:    ["Neo4j", "Cypher", "Python Flask", "HTML", "CSS", "Graph DB"],
      context: "Academic Project — ENSTTIC",
      github:  "https://github.com/MessaoudiRym/gestion-medicale"
    },
    {
      id:        "xo-game",
      icon:      "fas fa-gamepad",
      accent:    "gold",
      category:  "Dev",
      featured:  false,
      title:     "Multiplayer X/O Game",
      shortDesc: "Real-time multiplayer Tic-Tac-Toe built in Java using sockets and multithreading for simultaneous game sessions.",
      fullDesc:  "A real-time multiplayer Tic-Tac-Toe (X/O) game implemented in Java, exploring network programming and concurrent execution.\n\nThe server uses Java sockets to handle multiple client connections simultaneously. Multithreading ensures that each game session runs in its own thread, allowing multiple pairs of players to compete at the same time without interference.\n\nPlayer moves are communicated in real time over the socket connection, with the server managing game state, turn validation, and win condition detection. This project deepened my understanding of network protocols, thread synchronisation, and real-time client-server architecture.",
      highlights: [
        "Implemented a TCP socket server in Java to handle multiple clients",
        "Used multithreading to support simultaneous independent game sessions",
        "Managed real-time move communication and game state on the server",
        "Handled turn validation and win/draw condition detection"
      ],
      tags:    ["Java", "Sockets", "Multithreading", "TCP/IP", "Real-Time"],
      context: "Academic Project — ENSTTIC"
    }
  ],

  skills: [
    { category: "Python & ML Libraries",      items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "NLTK", "LangChain", "Streamlit"] },
    { category: "Machine Learning",            items: ["Supervised Learning", "Regression", "Classification", "Clustering", "Dimensionality Reduction", "Model Evaluation", "Feature Engineering"] },
    { category: "Deep Learning & GenAI",       items: ["ANN", "RNN", "LSTM", "Transformers", "LLMs", "RAG", "Semantic Search", "Prompt Engineering", "FAISS"] },
    { category: "NLP & Data Analysis",         items: ["Sentiment Analysis", "Text Classification", "EDA", "Data Wrangling", "Statistical Analysis", "Data Cleaning"] },
    { category: "Web Development",             items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Python Flask", "FastAPI", "Laravel", "PHP"] },
    { category: "Databases",                   items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis", "Cassandra", "Neo4j"] },
    { category: "DevOps & Big Data",           items: ["Docker", "Celery", "Apache Kafka", "Apache Spark", "Elasticsearch", "Kibana", "Linux", "GitHub", "WebRTC", "LiveKit"] },
    { category: "Networks & Telecoms",         items: ["TCP/IP", "Static Routing", "OSPF", "RIP", "VLANs", "STP", "HSRP", "VoIP", "GSM", "UMTS", "4G-LTE"] }
  ],

  education: [
    {
      degree:         "Engineering Degree in Telecommunications",
      specialization: "Telecoms & Digital Technologies",
      institution:    "ENSTTIC — National Higher School of Telecommunications and ICT",
      location:       "Oran, Algeria",
      period:         "2020 – 2025",
      highlight:      "Final Year Project: Risk assessment in cryptocurrency investments using LLMs"
    },
    {
      degree:         "Baccalaureate in Experimental Sciences",
      specialization: "",
      institution:    "Hammou Boutlilis High School",
      location:       "Oran, Algeria",
      period:         "2017 – 2020",
      highlight:      ""
    }
  ],

  certificates: [
    { name: "Intro to AI Agents and Agentic AI",                           platform: "365 Data Science",         date: "November 2025", category: "AI / LLM",    img: "assets/img/certs/cert-ai-agents.jpg"       },
    { name: "Git and GitHub",                                               platform: "365 Data Science",         date: "November 2025", category: "Dev",          img: "assets/img/certs/cert-git-github.jpg"      },
    { name: "Artificial Neural Networks for Business Managers in R Studio", platform: "Udemy",                    date: "October 2024",  category: "AI / ML",     img: "assets/img/certs/cert-ann-rstudio.jpg"     },
    { name: "Introduction to BigData",                                      platform: "Simplilearn SkillUp",      date: "October 2024",  category: "Data Science", img: "assets/img/certs/cert-bigdata.jpg"         },
    { name: "Fundamentals of Azure OpenAI Service",                         platform: "Microsoft",                date: "October 2024",  category: "AI / LLM",    img: "assets/img/certs/cert-azure-openai.png"    },
    { name: "Fundamentals of Machine Learning",                             platform: "Microsoft",                date: "October 2024",  category: "AI / ML",     img: "assets/img/certs/cert-ml-fundamentals.png" },
    { name: "Fundamental AI Concepts",                                      platform: "Microsoft",                date: "August 2024",   category: "AI / ML",     img: "assets/img/certs/cert-ai-concepts.png"     },
    { name: "Introduction to Data Science",                                 platform: "Cisco Networking Academy", date: "July 2024",     category: "Data Science", img: "assets/img/certs/cert-data-science-cisco.jpg" },
    { name: "Data Science & Analytics",                                     platform: "HP LIFE",                  date: "July 2024",     category: "Data Science", img: "assets/img/certs/cert-ds-analytics.jpg" },
    { name: "Cybersecurity Awareness",                                      platform: "HP LIFE",                  date: "July 2024",     category: "Security",     img: "assets/img/certs/cert-cybersecurity.jpg"  }
  ],

  languages: [
    { lang: "Arabic",  level: "Native", flag: "🇩🇿" },
    { lang: "French",  level: "C2",     flag: "🇫🇷" },
    { lang: "English", level: "C1",     flag: "🇬🇧" },
    { lang: "Spanish", level: "B2",     flag: "🇪🇸" }
  ],

  interests: [
    { label: "Swimming",   icon: "🏊" },
    { label: "Travel",     icon: "✈️" },
    { label: "Violin",     icon: "🎻" },
    { label: "Reading",    icon: "📚" },
    { label: "Backgammon", icon: "🎲" }
  ]
};
