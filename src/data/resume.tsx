import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Tulpen_One } from "next/font/google";

export const DATA = {
  name: "Evan Xu",
  initials: "DV",
  url: "https://dillion.io",
  location: "Amsterdam, NL",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Welcome to My Story.",
  summary:
    " I completed my undergraduate studies in Macau before pursuing a master’s degree in Big Data Engineering at the University of Amsterdam, Netherlands. My research focuses on Artificial Intelligence, encompassing Natural Language Processing, Knowledge Graphs, Large Language Models, and Machine Learning. I am particularly interested in the interdisciplinary applications of AI in healthcare and education. As a data-driven researcher, I excel in Data Mining, Statistical Analysis, Big Data Engineering, and Data Visualization. In addition to my technical research, I have delved deeply into the design field, gaining extensive experience in product prototyping and UI design. I possess a strong sense of aesthetics and a spirit of innovation. I am currently seeking a Ph.D. opportunity to further explore and advance the development of Artificial Intelligence technologies.",
  avatarUrl: "/me3.jpeg",

  skills: [   
    "Python", 
    "SQL", 
    "R", 
    "Haskell", 
    "Tensorflow", 
    "Pytorch", 
    "CSS", 
    "HTML5",
    "React",
    "JavaScript",
    "C++",
    "Data Engineering",
    "Data Analysis",
    "Latex",
    "Docker",
    "Kubernetes",
    "Prompt Engineering",
    "Prototyping",
    "UI/UX",
  ],
  tools: [
    "Midjourney",
    "Figma",
    "Sketch",
    "Axure RP",
    "Xmind",
    "Notion",
    "Obsidian",
    "Final Cut",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/TISNN",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tianhao-xu-evan",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/EvanXu0",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#evanxusci@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  education: [
    // {
    //   school: "Buildspace",
    //   href: "https://buildspace.so",
    //   degree: "s3, s4, sf1, s5",
    //   logoUrl: "/buildspace.jpg",
    //   start: "2023",
    //   end: "2024",
    // },
    {
      school: "University of Amsterdam & Vrije Universiteit Amsterdam",
      href: "https://www.uva.nl/en",
      degree: "Msc in Computer Science",
      logoUrl: "/uva.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "Macau University of Science and Technology",
      href: "https://www.must.edu.mo/index.html?locale=en_US",
      degree: "Bsc in Software Engineering",
      logoUrl: "/must.png",
      start: "2017",
      end: "2021",
    },
  ],

  research: [

  {
    company: "Literature Review of KBQA",
    badges: [],
    location: "Amsterdam, Netherlands",
    title: "Knowledge Representation and Reasoning Group",
    logoUrl: "/KRR.png",
    // href: "https://krr.cs.vu.nl/",
    start: "Jan 2023",
    end: "Aug 2023",
    description:
      "Conducted an extensive literature review on state-of-the-art approaches to Knowledge-Based Question Answering, synthesizing findings from research papers (2020-2023) and identifying key trends and gaps in the field.",
    link: "https://research.vu.nl/en/organisations/knowledge-representation-and-reasoning-2"
  },
  {
    company: "Stock Price Prediction Based on Artificial Neural Network",
    badges: [],
    location: "Macau, China",
    title: "Advised by Jiyue Jiang",
    logoUrl: "",
    start: "Mar 2020",
    end: "Feb 2021",
    description: 
      "Developed and applied a Backpropagation (BP) neural network model to process and analyze 482 trading days of historical stock price data, achieving a prediction accuracy with an error rate as low as 0.339% and reducing the total system error to 0.0128 after 765 iterations, optimizing both prediction efficiency and reliability. Demonstrated high prediction accuracy with the model, achieving a minimum absolute error between the training sample and the fitting curve of 0.0000302 and a maximum of 1.3376. The model closely matched the predicted stock prices for the test sample to the actual prices, demonstrating its effectiveness.",
  },
],

  work: [
    
  
    {
      company: "The CHM Education and Cultural Exchange Association",
      badges: [],
      location: "Macau, China",
      title: "Vice President",
      logoUrl: "/chm.png",
      start: "Aug 2024",
      end: "Present",
      description:
        "The CHM Education and Cultural Exchange Association is an organization dedicated to promoting educational and cultural exchanges between China, Hong Kong, Macau, and other regions. The association serves as a bridge to enhance mutual understanding, collaboration, and knowledge sharing among educational institutions, cultural organizations, and individuals.",
    },

    {
      company: "The Youth Federation of Macau Universities",
      // href: "https://atomic.finance",
      badges: [],
      location: "Macau, China",
      title: "Director ",
      logoUrl: "/澳门学联.png",
      start: "Jul 2024",
      end: "Present",
      description:
        "The Macau Youth Federation of University Students was established in 2009. It connects university students from Hong Kong, Macau, Taiwan, Mainland China, and abroad, fostering friendships and strengthening ties between universities and enterprises.",
    },

    {
      company: "StudyLandsEdu",
      // href: "https://atomic.finance",
      badges: [],
      location: "Shanghai, China",
      title: "CEO",
      logoUrl: "/学屿logo.jpg",
      start: "Oct 2023",
      end: "Present",
      description:
        "StudyLandsEdu is a tech-driven education company focused on innovating international education. We integrate overseas educational resources to deliver high-quality study abroad services using big data and AI. SLE also offers comprehensive operational management solutions to other companies, helping them cut costs and boost efficiency.",
    },
    {
      company: "Vrije Universiteit Amsterdam",
      badges: [],
      // href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/vu.jpeg",
      start: "Apr 2023",
      end: "Jun 2023",
      description:
        "Assisted with teaching the master course in Data Mining Technologies, including preparing and delivering lectures, conducting problem-solving sessions, and grading assignments.",
      },
      {
        company: "Research Assistant",
        badges: [],
        // href: "https://shopify.com",
        location: "Remote",
        title: "Advised by Smith W.L. J",
        logoUrl: "/lemd.png",
        start: "Sep 2022",
        end: "Nov 2022",
        description:
          " Conducted advanced research on deep learning algorithms for ECG-based cardiovascular disease diagnosis and prediction, and completed a prototype design for an international biomedical database website at the Massachusetts Laboratory for Engineering Medicine and Critical Data (LEMD).",
        },
    {
      company: "Genzon Investment Group",
      // href: "http://www.genzon.com.cn/",
      badges: [],
      location: "Shenzhen, China",
      title: "Product Manager Intern",
      logoUrl: "/genzon.jpeg",
      start: "Jul 2020",
      end: "Aug 2020",
      description:
        "Participated in key digital transformation projects, including smart buildings and intelligent parks, focusing on online solutions for enterprise services. Conducted comprehensive market and customer research to align with strategic planning, developing product PRD documents and prototype designs.",
    },
    {
      company: "SAIC Motor Corporation Limited (SAIC Motor)",
      // href: "https://splunk.comhttps://www.saicmotor.com/english/index.shtml",
      badges: [],
      location: "Shanghai, China",
      title: "Data Engineer Intern",
      logoUrl: "/saic.png",
      start: "Jun 2019",
      end: "Aug 2019",
      description:
        "Transformed the distributed data platform with Hadoop and Spark, significantly enhancing processing capabilities. Spearheaded large-scale data processing using advanced techniques like PySpark. Developed sophisticated ETL processes with SQL and Python, optimizing data model flexibility and diversity.",
    },
  ],



  projects: [
    {
      title: "Study Abroad Enterprises Intelligent Management SaaS System",
      href: "",
      dates: "Jul 2024 - Aug 2024",
      active: true,
      description:
        "Providing end-to-end operational management solutions for study abroad enterprises, reducing costs and increasing efficiency.",
      technologies: [
        "Corporate Services",
        "Study Abroad Platform",
        "Operational Solutions",
         "Product Prototype Design",
         "Sketch",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://automatic.chat",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/小屿.png",
    },

    {
      title: "Reconstructing Traditional Cultural Cognition in AI-Driven Cultural and Creative Product Design",
      href: "",
      dates: "Jan 2024 - Jun 2024",
      active: true,
      description:
        "Compleated an innovative framework that utilizes AI technology to generate cultural and creative products, reshaping traditional cultural perceptions. The framework optimizes the process from text to 2D images and then to 3D models, specifically for designing intangible cultural heritage products.",
        technologies: [
          "Python",
          "Cultural Creative Product",
          "Design Framework",
          "Image-to-3D Model",
          "Fine-tuned Diffusion Model",
          "Stable Diffusion",
          // "3D Conversion Algorithm",
          "3D Printing",
        ],
      links: [
        // {
          // type: "Website",
          // href: "https://llm.report",
          // icon: <Icons.globe className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/门神.jpg",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },

    {
      title: "Constructing a LLM-enhanced Olfactory Disorder KGQA System",
      href: "",
      dates: "Jan 2023 - Aug 2023",
      active: false,
      description: 
        "Developed an AI system for olfactory disorder Q&A, integrating academic and community data into a knowledge graph. Implemented models for precise answer retrieval and generation, utilizing the Vicuna-7b model and FastChat. Transformed natural language queries into SPARQL for accurate response generation.",
      technologies: [
        "Python",
        "NLP",
        "LLM",
        "Olfactory Disorder",
        "Knowledge Graph",
        "QA System",
        "Vicuna-7b",
        "SPARQL",
        "GraphDB",
        "GPT4-As-a-Judge",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://magicui.design",
        //   icon: <Icons.globe className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/brain.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },

    {
      title: "An Enhanced Lightweight CN-EN Bilingual Medical QA System",
      href: "",
      dates: "Dec 2022 - Aug 2023",
      active: true,
      description:
        "Applied Prompt Tuning techniques to optimize its performance in bilingual English-Chinese environments. Enhanced the local knowledge base with specialized Chinese herbal terminology and improved system interaction using the LangChain framework. ",
      technologies: [
        "LLMs",
        "NLP",
        "Langchain",
        "ChatGLM",
        "Prompt Tuning",
        "Python",
        "Medicial",
        "Chinese Herbal Terminology",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://chatcollect.com",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/Bilingual.webp",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
     },
     {
      title: "Election Analysis and Winner Prediction Via Twitter",
      href: "https://github.com/TISNN/election",
      dates: "Nov 2022 - Dec 2022",
      active: true,
      description: 
        "The main objective was to understand the true intentions of the candidates, the public's expectations of the candidates, and predict the winner with the margin of victory. Employed TextBlob for sentiment analysis to process the textual data of tweets and analyze people's attitudes toward political candidates.",
      technologies: [
        "Python",
        "NLP",
        "Twitter",
        "Sentiment Analysis",
        "TextBlob",
        "Political Analysis",
        "Winner Prediction",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://github.com/TISNN/COVID",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/TISNN/election",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/election.png",
    },

    {
      title: "Digital Heritage: AI Research Service Regarding the Effect of Classical Music on Mental Illness",
      href: "https://github.com/TISNN/2022_SOD",
      dates: "Sep 2022 - Nov 2022",
      active: true,
      description: 
        "Explored the therapeutic potential of classical music, recognized as cultural heritage, in treating mental illnesses. Integrated cultural heritage data with AI technology to provide personalized, AI-driven diagnosis and treatment solutions for mental health services. Employed IoT devices to monitor patients' physical conditions.",
        technologies: [
          "Classical Music",
          "Digitial Heritage",
          "AI-driven Solutions",
          "Mental Illness Treatment",
          "Mental Disorders",
          "Personalized Diagnosis",
          "IoT Devices",

      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://github.com/TISNN/COVID",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/TISNN/2022_SOD",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/music.png",
    },
    {
      title: "Massachusetts Laboratory for Engineering Medicine and Critical Data (LEMD)",
      href: "",
      dates: "Sep 2022 - Nov 2022",
      active: true,
      description:
        "Completed a prototype design for a new international biomedical database website, Massachusetts Laboratory for Engineering Medicine and Critical Data (LEMD).",
      technologies: [
        "Database",
        "Medicial",
        "Critical",
        "Prototype Design",
        "Axure RP",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://automatic.chat",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/lemd home page.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },


    {
      title: "Machine Learning for Quantified Self",
      href: "https://github.com/TISNN/2022_ML4QS/tree/main",
      dates: "Jun 2022 - Jul 2022",
      active: true,
      description: 
        "Developed a time series analysis model to predict specific physical activities (e.g., walking, running) of subjects using multi-dimensional sensor data. Enhanced an LSTM model for multivariate time series by optimizing through hyperparameter tuning. Integrated a dense layer and dropout to reduce overfitting.",
      technologies: [
        "Python",
        "Time Series Analysis",
        "LSTM",
        "Multivariate Data",
        "Sensor Data",
        "Hyperparameter Tuning",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://github.com/TISNN/COVID",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/TISNN/2022_ML4QS/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ml4qs.png",
    },

    {
      title: "Create a Modular Data Processing Pipeline using Brane Framework",
      href: "https://github.com/TISNN/2022_brane",
      dates: "Apr 2022 - Jun 2022",
      active: true,
      description: 
        "Utilized the Brane framework's containerization capabilities to develop a modular data processing pipeline for the Kaggle challenge 'Titanic - Machine Learning from Disaster'. Enhanced data analysis and model training processes by structuring the pipeline into four distinct packages: 'Initialization'、'Get Features'、 'Train and Prediction', and 'Visualization' for analyzing results.",
      
      technologies: [
        "Python",
        "Brane Framework",
        "Containerization",
        "Docker",
        "Kubernetes",
        "Machine Learning",
        "CI/CD",
      ],
      links: [
         {
        type: "Source",
        href: "https://github.com/TISNN/WSCBS_Assignment4b",
        icon: <Icons.github className="size-3" />,
         },
       ],
      image: "/brane.png",
    },

    {
      title: "Recommender system: Personalize Expedia Hotel Searches",
      href: "https://www.kaggle.com/c/2nd-assignment-dmt2022/",
      dates: "Apr 2022 - Jun 2022",
      active: true,
      description:
        "Conducted extensive data exploration and analysis on a dataset containing interactions from 5 million real users, I gained valuable insights into user behavior and preferences. Leveraging these insights, I developed and trained a LightGBM model, utilizing advanced data mining techniques to predict user choices and rank hotels effectively based on historical search data.",
      technologies: [
        "Recommender System",
        "LightGBM",
        "EDA",
         "Python",
         "Machine Learning",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.kaggle.com/c/2nd-assignment-dmt2022/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/TISNN/Datamining2022",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/datamining.png",
    },

    {
      title: "RPA: Entrepreneurship in Analytics and AI",
      href: "",
      dates: "Jan 2022 - Mar 2022",
      active: true,
      description:
        "Founded ROBOGO, a company that introduced an RPA-driven intelligent document processing and data analysis system to transform banking workflows. By leveraging RPA and AI technologies, including chatbots, the company streamlined redundant and repetitive tasks, reduced labor costs, and increased efficiency while enhancing customer satisfaction.",
      technologies: [
        "Corporate Services",
        "Banking Workflows",
        "Chatbots",
         "Data Analysis system",
         "Increased Efficiency",
         "Axure RP",
      ],
       links: [

       ],
      
      image: "/eaai.jpeg",
    },

    {
      title: "Use Multi-layer LSTM Model and Ensemble Learning to Detect Fake News",
      href: "https://github.com/TISNN/fake_news",
      dates: "Nov 2021 - Jan 2022",
      active: true,
      description: 
        "Designed and developed a fake news detection system using LSTM, Bi-LSTM, and ensemble learning methods. Implemented a six-step data pre-processing workflow and utilized TF-IDF for feature extraction. Developed a four-layer LSTM model with embedding layers and fully connected layers for dimensionality reduction, separately analyzing and combining features from article titles and texts.",
      technologies: [
        "Python",
        "NLP",
        "LSTM",
        "Bi-LSTM",
        "Ensemble Learning",
        "Fake News Detection",
        "Dimensionality Reduction",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://github.com/TISNN/COVID",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/TISNN/fake_news",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fake news.png",
    },


    {
      title: "Large Scale Data Mining, Analysis, and Visualization for Scientific Communities",
      href: "",
      dates: "Sep 2021 - Nov 2021",
      active: true,
      description: 
        "Processed and analyzed 96GB of metadata from CrossRef, including 120 million academic papers, to create a directed graph representing mutual citation relationships. Constructed a citation relationship graph focusing on 8,768 core journals, applying community detection algorithms, and successfully divided them into 128 scientific communities. Identified highly closed communities based on internal citation frequencies, and found pairs of communities with frequent mutual citations.",
      technologies: [
        "Python",
        "Data Mining",
        "Big Data Engineering",
        "Graph Analysis",
        "CrossRef",
        "Community Detection",
        "Visualization",
        "Scientific Communities",
      ],
      links: [
        // {
        //   type: "Source",
        //   href: "https://github.com/TISNN/2022_brane?tab=readme-ov-file",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/lsde.png",
    },


    



    {
      title: "Using Different Deep Learning Models to Detect COVID-19",
      href: "https://github.com/TISNN/COVID",
      dates: "Dec 2020 - May 2021",
      active: true,
      description:
        "Built an early screening model using deep learning techniques to distinguish COVID-19 from CT images of lungs in healthy cases. DResUnet achieved the best results with 85.54% accuracy and 87.02% AUC in comparison experiments of several deep learning models.",
      technologies: [
        "Python", 
        "CV", 
        "Image Classification", 
        "Deep Learning", 
        "DResUnet", 
        "CT Images",
        "COVID-19 Detection"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://github.com/TISNN/COVID",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/TISNN/COVID",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/covid19.jpeg",
    },


    {
      title: "3D Recloud: 3D Face Reconstruction mapping into Game Model",
      href: "https://fc5k62.axshare.com",
      dates: "Sep 2020 - Nov 2020",
      active: true,
      description:
        "Developed software to allow users to customize and replace video game character faces with 3D models of their own, friends, or celebrities. Leveraged a partnership with a game company, utilizing their character models and game engine to enhance user engagement and gaming experience through personalized facial expressions and emotions.",
      technologies: [
        "Python", 
        "3D max script", 
        "C++",
        "Axure RP",
        "Prototyping",
      ],
      links: [
        {
          type: "Website",
          href: "https://fc5k62.axshare.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/TISNN/3D_RECloud",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/3d.png",
    },


    {
      title: "High-Fidelity WeChat Mini Program Prototype Design",
      href: "",
      dates: "Jul 2020 - Aug 2020",
      active: true,
      description:
        "Designed a high-fidelity prototype of a WeChat Mini Program using Axure RP, providing a digital solution for the laundry and flower services of a five-star hotel under the Genzon Group.",
  
        technologies: [
          "WeChat Mini Program", 
          "Axure RP", 
          "High-Fidelity Prototype", 
          "Digital Solution", 
          "Interaction Design",
          "Enterprise Services"
      ],
      
      links: [
        // {
        //   type: "Website",
        //   href: "https://fc5k62.axshare.com",
        //   icon: <Icons.globe className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/TISNN/3D_RECloud",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/鲜花.png",
    },

  ],


  hackathons: [
    {
      title: "Prompt Engineering for ChatGPT",
      dates: "July, 2024",
      location: "Remote",
      description:
        "Coursera Certification",
      image:
        "/coursera.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "CCAIM AI and Machine Learning Summer School (2022)",
      dates: "September, 2022",
      location: "Remote",
      description:
        "AI and Machine Learning in Healthcare Summer School at the Cambridge Centre for AI in Medicine",
      icon: "public",
      image:"/ccaim.png",
      links: [],
    },

    {
      title: "Student Mentor and School Admissions Officer",
      dates: "Nov 2021 - Jun 202",
      location: "Amsterdam, NL",
      description:
        "Guided students as a Student Mentor, helping them navigate academic challenges and adjust to campus life. Evaluated and selected applicants as a School Admissions Officer, reviewing applications, conducting interviews.",
      icon: "public",
      image:"/uva.png",
      links: [],
    },
    {
      title: "Huawei Cloud Artificial Intelligence Skills Certification ",
      dates: "Auguest, 2020",
      location: "Remote",
      description:
        "ModelArts Implements Intelligent Flower Blooming Image Recognition",
      image:"/华为.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
   
      ],
    },
    {
      title: "Huawei Cloud Kunpeng Skills Certification",
      dates: "Auguest, 2020",
      location: "Remote",
      description:
        "Initial Experience of Software Migration on Kunpeng Computing Platform",
      image:"/华为.png",
      links: [
        // {
        //   title: "Organization",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/ethdocnet",
        // },
      ],
    },


    {
      title: "Huading Awards（25th - 26th）",
      dates: "December, 2019",
      location: "Macau, China",
      description:
        "Responsible for coordinating with celebrities and their teams, ensuring seamless communication and meeting all their requirements throughout the event",
        image:"/huading.jpeg",
      links: [
        // {
        //   title: "Source",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/nsagirlfriend/nsagirlfriend",
        // },
      ],
    },

    {
      title: "The 6th National Internet+ Innovation and Entrepreneurship Competition",
      dates: "February 3rd - 4th, 2018",
      location: "Hebei, China",
      description:
        "The Pioneer of AR Tourism Souvenir Experience - Bronze Award",
      image:"/6th.png",
      links: [
        // {
        //   title: "Github",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/cryptotrends/cryptotrends",
        // },
      ],
    },

    {
      title: "Macau Financial Excellence Awards",
      dates: "2017-2019",
      location: "Macau, China",
      description:
        "Three-Year Outstanding Volunteer Representative",
      image:
        "/财经.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },


    {
      title: "Boao Forum for Asia, Macau",
      dates: "November, 2017",
      location: "Macau, China",
      description:
        "Outstanding Volunteer",
        image:"/boao.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        //        {
        //   // title: "Devpost",
        //   // icon: <Icons.globe className="h-4 w-4" />,
        //   // href: "https://www.boaoforum.org/",
        // },
      ],
    },

    
  ],
} as const;
