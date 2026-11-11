/**
 * Portfolio Data Configuration for An Khanh
 * Target: Singapore Management University (SMU) — Master of IT in Business (MITB)
 * 
 * You can customize any personal info, video URLs, project case studies, and social links here.
 */

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Machine Learning' | 'Business Analytics' | 'Product Systems';
  featured: boolean;
  layoutType: 'large-hero' | 'split-screen' | 'workbench' | 'compact-editorial';
  image: string;
  problem: string;
  role: string;
  approach: string;
  techStack: string[];
  outcomes: string[];
  findings: string;
  metrics: { label: string; value: string }[];
  architectureSteps?: { step: string; title: string; desc: string }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "An Khanh",
    preferredName: "Khanh",
    title: "Master of IT in Business (MITB) Candidate",
    institution: "Singapore Management University",
    location: "Singapore / Ho Chi Minh City",
    email: "ankhanh040607@gmail.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    heroStatement: "Bridging the commercial intuition of business and marketing with the computational precision of data science and artificial intelligence.",
    shortBio: "Passionate about transforming messy real-world business challenges into scalable, data-driven systems. Exploring the intersection where customer behavior meets predictive modeling.",
  },

  // Video background settings for Hero
  heroMedia: {
    // Replaceable MP4 video URL. Users can supply their own hosted MP4 link or local asset.
    // By default, we provide an ambient cityscape stream and fallback poster.
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-42647-large.mp4",
    posterImage: "/src/assets/images/hero_cinematic_backdrop_1794387161455.jpg",
    ambientModeTitle: "Singapore Skyline & Digital Transit",
  },

  // Chapters of the narrative
  chapters: {
    chapter1: {
      number: "01",
      title: "Marketing & Education",
      kicker: "The Business Perspective",
      image: "/src/assets/images/marketing_editorial_1794387163468.jpg",
      lead: "Understanding how businesses create value, how markets behave, and why customer empathy must precede any technical solution.",
      narrative: [
        "My academic journey began in business and marketing. Early on, I was fascinated not just by brand messaging, but by how organizations discover market needs, structure value propositions, and sustain competitive advantages.",
        "Through coursework, case competitions, and real-world projects, I analyzed consumer psychology, unit economics, customer acquisition funnels, and retention mechanics. I learned to dissect why products succeed or fail from a commercial standpoint.",
        "However, as digital markets became more complex, I realized that intuition alone is no longer enough. The most critical marketing questions—which customers will churn, what price maximizes margin, how do personalized touchpoints influence lifetime value—demanded quantitative rigor, systematic data pipelines, and computational thinking."
      ],
      corePillars: [
        {
          title: "Customer & Market Empathy",
          description: "Analyzing behavior from the user's perspective to uncover unarticulated needs before formulating business hypotheses."
        },
        {
          title: "Unit Economics & Commercial Viability",
          description: "Grounding strategy in real financial drivers: Customer Acquisition Cost (CAC), Lifetime Value (LTV), margin health, and scalable distribution."
        },
        {
          title: "Hypothesis-Driven Experimentation",
          description: "Treating marketing campaigns not as guesswork, but as empirical experiments with measurable variables and rigorous feedback loops."
        }
      ],
      journeyTouchpoints: [
        {
          phase: "01. Market Discovery",
          businessObjective: "Identify unmet needs & segment high-potential customer personas.",
          dataRequirement: "Search intent analysis, demographic signals, and competitor pricing dynamics."
        },
        {
          phase: "02. Acquisition & Engagement",
          businessObjective: "Optimize conversion rate while maintaining disciplined acquisition costs.",
          dataRequirement: "Multi-touch attribution models, clickstream telemetry, and A/B test statistical significance."
        },
        {
          phase: "03. Value Realization",
          businessObjective: "Guide users toward product activation and repeated core interactions.",
          dataRequirement: "Feature adoption telemetry, session duration distributions, and Cohort retention matrices."
        },
        {
          phase: "04. Retention & Expansion",
          businessObjective: "Prevent churn proactively and identify cross-sell expansion moments.",
          dataRequirement: "RFM scoring, predictive churn classifiers, and Net Promoter Score text sentiment vectors."
        }
      ]
    },

    chapter2: {
      number: "02",
      title: "My Coding Journey",
      kicker: "The Technical Evolution",
      image: "/src/assets/images/data_science_workbench_1794387163535.jpg",
      lead: "Venturing beneath the surface of software: learning programming, statistical modeling, and data science to build the engines that drive decisions.",
      narrative: [
        "Transitioning from analyzing business outcomes to architecting technical solutions began with a simple desire: I wanted to build the analytical tools myself rather than simply viewing reports generated by others.",
        "I started with Python and SQL, learning the fundamentals of algorithmic logic, database schemas, and statistical distributions. Soon, simple scripts evolved into automated data extraction pipelines, exploratory data analysis workflows, and predictive models.",
        "I dove deeply into Applied Data Science and Machine Learning—mastering supervised and unsupervised algorithms, feature engineering, and cross-validation techniques. To me, code is not an end in itself; it is the ultimate lever to test business hypotheses with speed, precision, and reproducibility."
      ],
      milestones: [
        {
          year: "Foundations",
          title: "Algorithmic Thinking & Scripting",
          details: "Mastered Python core data structures, object-oriented concepts, and SQL relational query design. Built automated scrapers and analytical report generators."
        },
        {
          year: "Exploration",
          title: "Data Science & Statistical Modeling",
          details: "Employed Pandas, NumPy, and Scikit-learn for end-to-end data pipelines: missing value imputation, collinearity checks, regression, classification, and clustering."
        },
        {
          year: "Specialization",
          title: "Applied AI & Predictive Systems",
          details: "Trained gradient boosted trees (LightGBM/XGBoost) and neural architectures. Formulated loss functions aligned with actual business asymmetric costs (e.g. cost of false negative vs false positive)."
        },
        {
          year: "Integration",
          title: "Full-Stack Prototyping & APIs",
          details: "Connected models to production interfaces using FastAPI, Docker, and modern React/TypeScript UI dashboards, making algorithmic outputs accessible to operational teams."
        }
      ]
    },

    chapter3: {
      number: "03",
      title: "The Future & SMU MITB",
      kicker: "Connecting Two Worlds",
      image: "/src/assets/images/future_smu_vision_1794387164817.jpg",
      lead: "My ambition: Translating complex business challenges into resilient technology solutions, with the SMU MITB program as the pivotal catalyst.",
      narrative: [
        "In the modern enterprise, the greatest point of failure is often the translation gap between business leadership and engineering teams. Engineers build technically sophisticated models that miss commercial context, while business managers propose strategies that ignore technical constraints.",
        "My goal is to stand at that exact intersection as a bilingual leader—fluent in the language of return on investment, market dynamics, and customer value, yet equally adept in computational logic, system architecture, and machine learning pipelines.",
        "The Master of IT in Business (MITB) at Singapore Management University represents the natural culmination of this journey. Renowned globally for its rigorous blend of business strategy, data analytics, and artificial intelligence, SMU is situated in Singapore's vibrant tech and financial ecosystem. Here, I aim to deepen my expertise in enterprise analytics, digital transformation, and AI governance."
      ],
      strategicAspirations: [
        {
          dimension: "Strategic Translation",
          vision: "Converting ambiguous executive challenges into mathematically tractable problems and actionable computational roadmaps."
        },
        {
          dimension: "Applied AI Deployment",
          vision: "Moving beyond toy models to architect robust, low-latency, and ethically sound enterprise ML systems that drive measurable P&L growth."
        },
        {
          dimension: "The SMU MITB Catalyst",
          vision: "Leveraging SMU's world-class faculty, industry-embedded capstones, and pan-Asian network to become an agile digital leader in Asia-Pacific."
        }
      ]
    }
  },

  // Case Studies / Projects
  projects: [
    {
      id: "clv-churn-pipeline",
      title: "Omnichannel Customer Lifetime Value & Churn Prediction System",
      subtitle: "Predictive Analytics & Machine Learning Pipeline",
      category: "AI & Machine Learning",
      featured: true,
      layoutType: "large-hero",
      image: "/src/assets/images/data_science_workbench_1794387163535.jpg",
      problem: "A high-growth subscription business suffered from 4.8% monthly customer churn. Traditional marketing reports were strictly retrospective, alerting retention managers only after users had already disengaged and cancelled their accounts.",
      role: "Lead Analytics & ML Developer — Responsible for exploratory data analysis, feature engineering, model architecture, hyperparameter tuning, and executive presentation.",
      approach: "Engineered 38 recency, frequency, monetary (RFM) and in-app interaction velocity features over rolling 30/60/90-day timeframes. Trained and evaluated LightGBM, Random Forest, and Logistic Regression baselines using cost-sensitive cross-validation.",
      techStack: ["Python", "LightGBM", "Scikit-Learn", "Pandas", "FastAPI", "Docker"],
      outcomes: [
        "Achieved 84.6% AUC-ROC score, detecting churn risk indicators up to 30 days before customer cancellation.",
        "Enabled personalized automated retention offers that reduced churn by 18.2% across the pilot cohort.",
        "Built an interactive risk score console connecting directly to marketing CRM webhooks for immediate intervention."
      ],
      findings: "Feature importance analysis revealed that declining session duration and unanswered support tickets were 3.2x more predictive of cancellation than pricing tier or login frequency alone.",
      metrics: [
        { label: "AUC-ROC Score", value: "0.846" },
        { label: "Churn Reduction", value: "18.2%" },
        { label: "Lead Time Alert", value: "30 Days" },
        { label: "Engineered Features", value: "38" }
      ],
      architectureSteps: [
        { step: "01", title: "Telemetry Ingestion", desc: "Streaming clickstream & subscription events into normalized tabular feature sets." },
        { step: "02", title: "Feature Store", desc: "Rolling aggregations calculating customer behavioral momentum and RFM shifts." },
        { step: "03", title: "LightGBM Classifier", desc: "Cost-sensitive probability estimation minimizing expensive False Negatives." },
        { step: "04", title: "Automated Triggers", desc: "Dynamic webhook alerting account managers and triggering personalized incentives." }
      ]
    },
    {
      id: "dynamic-pricing-engine",
      title: "Algorithmic Pricing & Dynamic Demand Elasticity Engine",
      subtitle: "Econometric Modeling & Real-Time Price Optimization",
      category: "Business Analytics",
      featured: false,
      layoutType: "split-screen",
      image: "/src/assets/images/marketing_editorial_1794387163468.jpg",
      problem: "An e-commerce retailer relied on static cost-plus 25% pricing rules, leaving substantial margin on high-demand premium products while suffering slow inventory turnover on price-sensitive commodity SKUs.",
      role: "Quantitative Analyst & Modeler — Developed econometric demand elasticity formulation, historical transaction data cleansing, and simulation UI.",
      approach: "Formulated log-log regression models to estimate price elasticity of demand across 40+ subcategories. Incorporated competitor price scrapers and seasonality indices, wrapping the optimization logic in an interactive sensitivity dashboard.",
      techStack: ["Python", "NumPy", "SciPy", "Statsmodels", "Streamlit", "PostgreSQL"],
      outcomes: [
        "Identified inelastic demand curves (|e| < 0.6) across core catalog items, enabling safe price adjustments.",
        "Simulated a projected 7.4% gross profit uplift across 12,000 monthly transactions under inventory constraints.",
        "Constructed automated guardrails preventing price fluctuations exceeding ±15% to maintain brand trust."
      ],
      findings: "Cross-price elasticity between private-label items and branded alternatives demonstrated that customers tolerated modest price increases when bundle savings were highlighted.",
      metrics: [
        { label: "Projected Margin Lift", value: "+7.4%" },
        { label: "SKU Catalog Depth", value: "40+ Categories" },
        { label: "Transaction Dataset", value: "150,000+" },
        { label: "Safety Price Bound", value: "±15%" }
      ]
    },
    {
      id: "sentiment-nlp-intelligence",
      title: "Real-Time Brand Sentiment & Market Perception NLP Intelligence",
      subtitle: "Natural Language Processing & Topic Modeling",
      category: "AI & Machine Learning",
      featured: false,
      layoutType: "workbench",
      image: "/src/assets/images/future_smu_vision_1794387164817.jpg",
      problem: "Marketing leadership lacked an automated pulse on brand perception across social channels and review aggregators. Manual weekly sampling took over 15 hours and frequently missed emerging product bugs until churn spiked.",
      role: "NLP Pipeline Developer — Built text preprocessing pipeline, aspect extraction algorithms, and interactive topic clustering visualizations.",
      approach: "Extracted customer feedback via API endpoints, conducted tokenization, lemmatization, and sentiment polarity classification with RoBERTa embeddings. Used BERTopic to automatically discover emergent complaint clusters.",
      techStack: ["Python", "HuggingFace", "PyTorch", "BERTopic", "FastAPI", "TailwindCSS"],
      outcomes: [
        "Reduced feedback processing latency from 7 days down to 4 minutes near real-time.",
        "Discovered 3 critical UI checkout bugs during a new mobile app release, alerting engineers within 2 hours.",
        "Segmented sentiment by functional pillar: Product Quality, Logistics, Customer Support, and Pricing."
      ],
      findings: "Negative sentiment spiked 4x more severely when order delivery tracking was delayed than when the actual package arrived 24 hours late—proving transparency matters more than speed.",
      metrics: [
        { label: "Processing Latency", value: "4 min" },
        { label: "Weekly Hours Saved", value: "15 hrs" },
        { label: "Feedback Volume", value: "45,000+" },
        { label: "Aspect Categories", value: "4 Pillars" }
      ]
    },
    {
      id: "supply-chain-optimizer",
      title: "Supply Chain Risk Forecasting & Inventory Optimizer",
      subtitle: "Operations Research & Time-Series Forecasting",
      category: "Product Systems",
      featured: false,
      layoutType: "compact-editorial",
      image: "/src/assets/images/hero_cinematic_backdrop_1794387161455.jpg",
      problem: "Unpredictable supplier lead times and seasonal sales spikes led to frequent stockouts of high-velocity items, alongside excessive working capital trapped in slow-moving inventory buffer stocks.",
      role: "Operations Researcher & Data Engineer — Cleaned 3 years of ERP logistics logs, parameterized stochastic lead-time distributions, and simulated reorder policies.",
      approach: "Modeled supplier lead-time variance using Monte Carlo simulation alongside Prophet time-series forecasts. Programmed dynamic reorder point (ROP) calculators adjusting to seasonality and supply volatility.",
      techStack: ["Python", "Prophet", "SciPy", "SQL", "Plotly", "Excel VBA"],
      outcomes: [
        "Decreased buffer safety stock carrying costs by 14% while preserving 99.2% on-time fulfillment SLA.",
        "Mitigated stock-out frequency by 32% during promotional peak seasons through early lead-time warning alerts.",
        "Created a clean executive dashboard for procurement teams to simulate supplier delays before ordering."
      ],
      findings: "Supplier lead time reliability, rather than average lead time, was the primary driver of necessary safety stock; replacing one volatile vendor lowered required buffer inventory by 22%.",
      metrics: [
        { label: "Carrying Cost Reduction", value: "14%" },
        { label: "Fulfillment SLA", value: "99.2%" },
        { label: "Stockout Reduction", value: "32%" },
        { label: "Simulated Trials", value: "10,000" }
      ]
    }
  ] as CaseStudy[],

  // Contact details
  contact: {
    heading: "Let's Connect & Shape the Future",
    subheading: "Whether you represent the SMU MITB Admissions Committee, an academic collaborator, or a fellow technologist passionate about bridging business and technology, I would love to talk.",
    email: "ankhanh040607@gmail.com",
    programInterest: "SMU Master of IT in Business (MITB)",
    intakeYear: "2026/2027 Academic Intake",
    statusText: "Actively Preparing for SMU MITB Candidacy",
    socials: [
      { name: "Email", url: "mailto:ankhanh040607@gmail.com", display: "ankhanh040607@gmail.com" },
      { name: "LinkedIn", url: "https://linkedin.com", display: "linkedin.com/in/ankhanh" },
      { name: "GitHub", url: "https://github.com", display: "github.com/ankhanh" }
    ]
  }
};
