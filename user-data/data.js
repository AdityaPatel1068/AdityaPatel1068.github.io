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
    "Orchestrated Azure Data Factory (ADF) pipelines to consolidate EHR (Epic, Cerner), payer (QNXT, Facets), and claims (EDI 837/835) data into a centralized Azure Data Lake, enabling longitudinal insights at patient and provider levels.",
    "Integrated multisource healthcare data into a unified data model, improving analytics-ready coverage by 97% across clinical, claims, and enrollment domains.",
    "Automated end-to-end ETL workflows using SSIS, Talend, and ADF to support real-time ingestion, transformation, deduplication, and validation of healthcare data.",
    "Standardized healthcare vocabularies including ICD-10, CPT, LOINC, HL7, and EDI formats (837, 835) into a normalized schema for consistent reporting and analytics.",
    "Built HIPAA-compliant governance by embedding audit trails, role-based access, and lineage tracking, ensuring full compliance with CMS and HEDIS standards.",
    "Enabled Snowflake data auditing via access history tables, security policies, and custom UDFs for Medicare and payer reporting traceability.",
    "Designed and optimized complex SQL queries in Oracle and Snowflake to support risk stratification, cost analysis, and HEDIS/QARR metric calculations.",
    "Performed unsupervised machine learning (e.g., k-means clustering) in Python to segment populations by risk tiers for targeted care management programs.",
    "Developed interactive Tableau dashboards using LOD expressions and parameters to track patient flow, provider utilization, and chronic condition trends.",
    "Managed QA test cycles using HP ALM, including test case authoring, execution logging, and defect tracking with full traceability to BRD/FRD artifacts."
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
    "Engineered high-performance SQL queries (Oracle, PostgreSQL) to analyze loan performance, reducing query time by 30%.",
    "Built predictive models and anomaly detection tools in Python using Pandas and NumPy to identify high-risk loans with 15% precision gain.",
    "Created Power BI dashboards with DAX for real-time visualization of credit risk KPIs, improving decision efficiency by 25%.",
    "Designed AWS Glue pipelines to ingest and process large-scale financial datasets in Amazon Redshift, cutting processing time by 20%.",
    "Performed A/B and statistical hypothesis testing to validate models, ensuring 95% statistical significance for CCAR compliance.",
    "Integrated multi-source data using SSIS and Informatica from Bloomberg Terminal and Oracle Financials with 99% accuracy.",
    "Documented BRDs, FRDs, and data dictionaries to support regulatory compliance (SOX, Basel III).",
    "Conducted OFAC screening and AML validations, reducing regulatory risks by 22% through automated workflows.",
    "Developed Excel-based financial models with PivotTables, VBA, and Power Query for loan restructuring analysis."
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
    "Collaborated with marketing, sales, and supply chain teams to translate business goals into analytics plans in the retail and e-commerce domain.",
    "Built and maintained ETL pipelines with SSIS and Talend Open Studio integrating POS (Retail Pro, Ginesys), CRM (Salesforce), and ERP (SAP, NetSuite) data.",
    "Executed data cleansing and validation using Excel Macros and Open Refine to address regional inconsistencies in Indian retail data.",
    "Performed EDA with Python (Pandas, NumPy, SciPy) and R to uncover market trends and operational inefficiencies.",
    "Developed RFM segmentation and K-Means clustering models to support targeted marketing and retention strategies.",
    "Implemented cloud data warehousing solutions using AWS S3, Redshift, and Glue, centralizing high-volume transactional data.",
    "Created Power BI and Google Data Studio dashboards to visualize key metrics like sales growth, CAC, and conversion rates.",
    "Conducted time series forecasting with ARIMA and Holt-Winters for inventory demand prediction and supply chain optimization.",
    "Analyzed e-commerce funnel KPIs (CTR, CR, ROAS) to identify bottlenecks and optimize user conversion flows."
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
