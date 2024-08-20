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
    " <br/> At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me3.jpeg",

  skills: [   
    "React",
    "Node.js",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
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
      logoUrl: "/studylands.png",
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
        start: "Sep 2021",
        end: "Nov 2021",
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
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://chatcollect.com",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      image: "/Bilingual.webp",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
     },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "NLP",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nose.webp",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Reconstructing Traditional Cultural Cognition in AI-Driven Cultural and Creative Product Design",
      href: "",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Compleated an innovative framework that utilizes AI technology to generate cultural and creative products, reshaping traditional cultural perceptions. The framework optimizes the process from text to 2D images and then to 3D models, specifically for designing intangible cultural heritage products.",
        technologies: [
          "Cultural Creative Product",
          "Design Framework",
          "Image-to-3D Model",
          "Fine-tuned Diffusion Model",
          "Stable Diffusion",
          // "3D Conversion Algorithm",
          "3D Printing",
        ],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://llm.report",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      //   {
      //     type: "Source",
      //     href: "https://github.com/dillionverma/llm.report",
      //     icon: <Icons.github className="size-3" />,
      //   },
      // ],
      image: "/门神.jpg",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Massachusetts Laboratory for Engineering Medicine and Critical Data (LEMD)",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
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
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://automatic.chat",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      image: "/lemd home page.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Xiaoyu Study Abroad Platform",
      href: "https://automatic.chat",
      dates: "July 2024 - Auguest 2024",
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
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://automatic.chat",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      image: "/小屿.png",
    },
    {
      title: "Create a Modular Data Processing Pipeline using Brane Framework",
      dates: "Apr 2022 - Jun 2022",
      active: false,
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
      title: "Large Scale Data Mining, Analysis, and Visualization for Scientific Communities",
      dates: "Sep 2021 - Nov 2021",
      active: false,
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
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://github.com/TISNN/2022_brane?tab=readme-ov-file",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      image: "/lsde.png",
    },
    {
      title: "RPA: Entrepreneurship in Analytics and AI",
      href: "https://automatic.chat",
      dates: "July 2024 - Auguest 2024",
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
      //   {
      //     type: "Website",
      //     href: "https://github.com/TISNN/2022_brane?tab=readme-ov-file",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      {
             type: "Source",
             href: "https://github.com/TISNN/2022_brane?tab=readme-ov-file",
             icon: <Icons.github className="size-3" />,
      },
       ],
      
      image: "/eaai.jpeg",
    },
    {
      title: "Recommender system: Personalize Expedia Hotel Searches",
      href: "https://www.kaggle.com/c/2nd-assignment-dmt2022/",
      dates: "April 2022 - June 2022",
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
      title: "3D Recloud: 3D Face Reconstruction mapping into Game Model",
      href: "https://www.kaggle.com/c/2nd-assignment-dmt2022/",
      dates: "April 2022 - June 2022",
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
      title: "Using Different Deep Learning Models to Detect COVID-19",
      href: "https://automatic.chat",
      dates: "Dec 2020 - May 2021",
      active: false,
      description:
        "Built an early screening model using deep learning techniques to distinguish COVID-19 from CT images of lungs in healthy cases. DResUnet achieved the best results with 85.54% accuracy and 87.02% AUC in comparison experiments of several deep learning models.",
      technologies: [
        "Python", 
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
      title: "Machine Learning for Quantified Self",
      href: "https://automatic.chat",
      dates: "Jun 2022 - Jul 2022",
      active: false,
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
      title: "Use Multi-layer LSTM Model and Ensemble Learning to Detect Fake News",
      href: "https://automatic.chat",
      dates: "Nov 2021 - Jan 2022",
      active: false,
      description: 
        "Designed and developed a fake news detection system using LSTM, Bi-LSTM, and ensemble learning methods. Implemented a six-step data pre-processing workflow and utilized TF-IDF for feature extraction. Developed a four-layer LSTM model with embedding layers and fully connected layers for dimensionality reduction, separately analyzing and combining features from article titles and texts. Achieved significant improvements in fake news detection accuracy and robustness, with an accuracy of 95.72% using the 4-LSTM model and 97.46% using ensemble learning algorithms, outperforming existing benchmark models.",
      technologies: [
        "Python",
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
          href: "https://github.com/TISNN/2022_ML4QS/tree/main",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fake news.png",
    },

    {
      title: "Election Analysis and Winner Prediction Via Twitter",
      href: "https://automatic.chat",
      dates: "Nov 2022 - Dec 2022",
      active: false,
      description: 
        "The main objective was to understand the true intentions of the candidates, the public's expectations of the candidates, and predict the winner with the margin of victory. Employed TextBlob for sentiment analysis to process the textual data of tweets and analyze people's attitudes toward political candidates.",
      technologies: [
        "Python",
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

  ],


  hackathons: [
    {
      title: "Macau Financial Excellence Awards",
      dates: "November 23rd - 25th, 2018",
      location: "Macau, China",
      description:
        "Three-Year Outstanding Volunteer Representative",
      image:
        "/财经.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        // {
        //   title: "YouTube",
        //   icon: <Icons.youtube className="h-4 w-4" />,
        //   href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        // },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
