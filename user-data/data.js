export const bio = [
  "Hi, I'm Aditya Patel — a Data Scientist with hands-on experience in healthcare, finance, and retail domains, specializing in predictive modeling, data engineering, and real-time analytics.",
  "I've designed end-to-end machine learning pipelines and ETL workflows using tools like Apache NiFi, Talend, Snowflake, Power BI, and AWS. My work spans hospital readmission prediction, credit risk analytics, and customer segmentation.",
  "I'm passionate about creating scalable, compliant, and insight-driven systems that drive efficiency, reduce cost, and support data-informed decision-making.",
];

export const skills = [
  {
    category: "Programming Languages",
    tags: ["Python", "R", "SQL", "T-SQL", "PL/SQL", "MySQL", "PostgreSQL", "Oracle"]
  },
  {
    category: "Data Visualization",
    tags: ["Tableau", "Power BI", "Google Data Studio", "Matplotlib", "Seaborn", "ggplot2"]
  },
  {
    category: "Data Integration & ETL Tools",
    tags: ["Talend", "Apache NiFi", "Apache Airflow", "SSIS", "Informatica PowerCenter", "AWS Glue", "Azure Data Factory"]
  },
  {
    category: "Cloud Platforms & Warehousing",
    tags: ["AWS", "Azure", "Redshift", "Glue", "Snowflake", "Synapse Analytics"]
  },
  {
    category: "Data Modeling & Reporting",
    tags: ["Star Schema", "Snowflake Schema", "DAX", "Window Functions", "Recursive CTEs", "Stored Procedures"]
  },
  {
    category: "Healthcare Standards",
    tags: ["EDI X12", "HL7", "FHIR", "ICD-10", "CPT", "HEDIS", "MACRA", "QPP"]
  },
  {
    category: "ML & Statistical Analysis",
    tags: ["Scikit-learn", "TensorFlow", "RFM", "K-Means", "ARIMA", "A/B Testing", "Regression", "Holt-Winters"]
  },
  {
    category: "Business Analysis",
    tags: ["BRD", "FRD", "SRS", "Use Cases", "BPM", "Data Flow Diagrams"]
  },
  {
    category: "Compliance & Regulatory",
    tags: ["HIPAA", "CMS", "NCQA", "OFAC", "AML", "SOX", "Basel III", "CCAR", "RBAC"]
  },
  {
    category: "APIs & Integration",
    tags: ["RESTful APIs", "FHIR API", "Azure API Management"]
  },
  {
    category: "Excel & Office Tools",
    tags: ["Excel", "PivotTables", "Power Query", "VBA Macros", "Microsoft Office"]
  },
  {
    category: "Version Control",
    tags: ["Git", "GitHub", "JIRA", "Confluence"]
  },
  {
    category: "Digital Analytics",
    tags: ["Google Analytics", "Adobe Analytics"]
  },
  {
    category: "ERP & CRM",
    tags: ["SAP", "NetSuite", "Salesforce", "Zoho CRM", "Bloomberg", "Oracle Financials"]
  },
  {
    category: "Other Skills",
    tags: ["Data Storytelling", "Data Wrangling", "Data Cleaning", "Data Transformation", "Windows", "Linux", "Mac iOS"]
  }
];

export const experience = [
{
  title: "Cardinal Health",
  duration: "2024 – Present",
  subtitle: "Data Analyst",
  logo: "images/cardinalhealth.png",
  details: [
    "Designed and developed ETL pipelines to extract, transform, and integrate multi-source EHR (Epic, Cerner), payer (QNXT/Facets), and claims (EDI 837/835) data into an analytics-ready SQL environment.",
    "Built automated data workflows in Azure Data Factory to ingest and refresh clinical and claims datasets monthly, ensuring up-to-date insights from real-world healthcare sources.",
    "Performed data cleaning, transformation, and normalization using Python (Pandas, NumPy) to address missing values, duplicates, and non-standard ICD/CPT codes, improving data consistency by 40%.",
    "Created SQL-based analytical views to support cohort tracking, chronic disease analysis, and quality-of-care reporting aligned with HEDIS/CMS standards.",
    "Conducted exploratory and statistical analysis on patient-level and claims data to uncover utilization patterns, care gaps, and cost drivers across populations.",
    "Developed ML-driven classification models in Python (Scikit-learn, TensorFlow) using data prepared from ETL pipelines to segment patients into low-, medium-, and high-risk cohorts based on disease history and utilization metrics.",
    "Implemented feature engineering on claims and EHR data (e.g., encounter frequency, medication adherence, comorbidity index) to enhance cohort differentiation and prediction reliability.",
    "Designed interactive Tableau and Power BI dashboards showcasing cohort segmentation results, population trends, and predictive insights for executive and clinical teams.",
    "Created drill-down visualizations for condition-based cohorts (e.g., diabetes, hypertension) to help stakeholders monitor outcomes and resource utilization.",
    "Collaborated with data engineering teams to optimize SQL queries and data refresh cycles, improving dashboard load times and reducing reporting latency by 30%."
],
  tags: ["Python", "Azure Data Factory", "Snowflake", "Tableau", "ADF", "Talend", "SSIS", "Oracle", "FHIR", "EDI", "HIPAA", "K-Means"],
  icon: "hospital"
},
  {
  title: "Cognizant",
  duration: "2020 – 2023",
  subtitle: "Data Analyst",
  logo: "images/cognizant.png",
  details: [
    "Designed and optimized complex SQL and PostgreSQL queries to extract, validate, and aggregate transactional and account-level data, improving data processing accuracy by 25%.",
    "Developed and deployed interactive Power BI dashboards to monitor key financial KPIs such as loan portfolio performance, risk exposure, and customer acquisition trends.",
    "Utilized Matplotlib and Seaborn in Python to perform detailed exploratory data analysis (EDA) on credit risk, delinquency trends, and customer behavior patterns.",
    "Built and maintained secure AWS-based data storage and processing environments, enabling seamless integration between on-premise and cloud systems.",
    "Collaborated with financial analysts and business stakeholders in a Waterfall project environment to gather requirements and translate them into analytical solutions.",
    "Implemented robust data architecture and management frameworks to ensure data lineage, integrity, and compliance with financial governance standards.",
    "Automated periodic data validation scripts on Linux servers to enhance reliability and reduce manual intervention in daily reporting.",
    "Supported risk modeling and portfolio analysis by preparing feature-rich datasets and visual summaries for credit and operational risk teams.",
    "Utilized GitHub for version control, code collaboration, and maintenance of ETL and visualization scripts across multiple project environments.",
    "Documented end-to-end data workflows, data dictionaries, and business logic mappings to support audit requirements and facilitate team onboarding."
],
  tags: ["Python", "SQL", "Power BI", "AWS Glue", "Redshift", "Oracle", "Pandas", "SSIS", "Informatica", "AML"],
  icon: "finance"
},
  {
  title: "HCL Technologies",
  duration: "2018 – 2020",
  subtitle: "Data Analyst",
  logo: "images/hcl.png",
  details: [
    "Automated data extraction pipelines using Python(pandas) and MySQL enhancing data processing efficiency and reducing report generation time by 30%.",
"Performed extensive data cleaning and transformation using Pandas to prepare reliable datasets for sales and marketing insights.",
"Optimized SQL queries in MySQL to extract, aggregate, and validate key sales metrics across multiple data sources.",
"Developed and maintained interactive dashboards in Tableau to visualize sales performance, campaign ROI, and lead conversion trends.",
"Supported scalable AWS data architecture design to streamline data storage and integration for new business data streams.",
"Collaborated with cross-functional teams in an Agile environment to define user stories and deliver analytics solutions on time.",
"Managed version control and code collaboration through Git, ensuring consistency in scripts and analytical workflows.",
"Conducted ad-hoc data analysis to identify market trends, customer segments, and sales forecasting opportunities.",
"Performed A/B testing and marketing campaign performance evaluation to optimize conversion rates.",
"Created documentation for data workflows and dictionaries to standardize future onboarding and project maintenance."
  ],
  tags: ["Python", "R", "Power BI", "AWS", "ETL", "Retail", "SSIS", "Talend", "CRM", "K-Means"],
  icon: "shopping-cart"
},
];


export const trekking = [
  {
    name: "Kheerganga Trek",
    state: "Himachal Pradesh",
    height: "9,711 ft",
    details:
      "A beautiful trek in the Parvati Valley, known for its hot springs and scenic views.",

    icon: "hiking",
    duration: "2 Days",
    level: "Moderate",
  },
  {
    name: "Triund Trek",
    state: "Himachal Pradesh",
    height: "9,350 ft",
    details:
      "A popular trek near Dharamshala, offering stunning views of the Dhauladhar range.",

    icon: "hiking",
    duration: "2 Days",
    level: "Easy",
  },
  {
    name: "Kedarkantha Trek",
    state: "Uttarakhand",
    height: "12,500 ft",
    details:
      "A winter trek known for its snow-covered trails and breathtaking views.",

    icon: "hiking",
    duration: "6 Days",
    level: "Moderate",
  },
  {
    name: "Jalori Pass Trek",
    state: "Himachal Pradesh",
    height: "10,800 ft",
    details:
      "A scenic trek that offers panoramic views of the Himalayas and lush green valleys.",

    icon: "hiking",
    duration: "1 Day",
    level: "Easy",
  },
  {
    name: "Shri Mata Vaishno Devi Trek",
    state: "Jammu & Kashmir",
    height: "5,200 ft",
    details:
      "A pilgrimage trek to the famous Vaishno Devi temple, known for its spiritual significance.",

    icon: "hiking",
    duration: "2 Days",
    level: "Easy",
  },
];

export const passes = [
  {
    name: "Baralacha La Pass",
    state: "Himachal Pradesh",
    height: "16,040 ft",
    details: [
      "A high mountain pass that connects Lahaul and Spiti valleys, known for its breathtaking landscapes.",
    ],
    icon: "hiking",
  },
  {
    name: "Nakeela Pass",
    state: "Himachal Pradesh",
    height: "15,547 ft",
    details: [
      "A high mountain pass on the Leh-Manali highway, known for its challenging terrain and stunning views.",
    ],
    icon: "hiking",
  },
  {
    name: "Lachung La Pass",
    state: "Ladakh",
    height: "16,616 ft",
    details: [
      "A high mountain pass that connects Leh and Nubra Valley, known for its stunning landscapes.",
    ],
    icon: "hiking",
  },
  {
    name: "Tanglang La Pass",
    state: "Ladakh",
    height: "17,480 ft",
    details: [
      "One of the highest passes in the world, offering breathtaking views of the Himalayas.",
    ],
    icon: "hiking",
  },
  {
    name: "Khardung La Pass",
    state: "Ladakh",
    height: "18,379 ft",
    details: [
      "One of the highest motorable roads in the world, offering stunning views of the surrounding mountains.",
    ],
    icon: "hiking",
  },
  {
    name: "Chang La Pass",
    state: "Ladakh",
    height: "17,590 ft",
    details: [
      "A high mountain pass on the road to Pangong Lake, known for its stunning views and challenging terrain.",
    ],
    icon: "hiking",
  },
  {
    name: "ZojiLa Pass",
    state: "Jammu & Kashmir",
    height: "11,575 ft",
    details: [
      "A high mountain pass that connects Srinagar and Leh, known for its challenging roads and breathtaking views.",
    ],
    icon: "hiking",
  },
];


export const education = [
  {
    title: "Master of Science in Data Science",
    duration: "2023 – 2024",
    subtitle: "New Jersey Institute of Technology",
    logo: "images/njit.png",
    details: [
      "GPA: 4.0/4.0",
      "Coursework: Machine Learning, Applied Statistics, Data Mining & Analytics, Data Management Systems, Data Analytics with R, Introduction to Big Data, Cloud Computing, Cognitive Computing, Python & Mathematics for ML, Data Visualization & Interpretation"
    ],
    tags: ["ML", "Big Data", "Data Mining", "Cloud", "AI", "Statistics", "R", "Python", "Data Visualization"],
    icon: "graduation-cap",
  },
  {
    title: "B.Tech. in Mechanical Engineering",
    duration: "2015 – 2019",
    subtitle: "Dr. A.P.J. Abdul Kalam Technical University",
    logo: "images/aktu.png",
    details: ["CGPA: 3.2/4.0"],
    tags: ["Statistics", "Mathematics", "Thermodynamics", "Mechanical Systems"],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Links",
    data: [
      {
        text: "GitHub",
        link: "https://github.com/AdityaPatel1068",
      },
      {
        text: "Portfolio Website",
        link: "https://theadityapatel.com",
      },
    ],
  },
  {
    label: "Pages",
    data: [
      {
        text: "Projects",
        link: "./pages/projects.html",
      },
    ],
  },
  {
    label: "copyright-text",
    data: ["Made with purpose by Aditya Patel"],
  },
];
