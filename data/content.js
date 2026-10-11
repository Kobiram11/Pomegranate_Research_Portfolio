/*
 * SITE CONTENT CONFIGURATION
 * --------------------------
 * All editable text, people, milestones, documents, presentations, photos and
 * contact details live in this file. The page reads window.SITE_CONTENT.
 *
 * Conventions
 *  - Use "To be confirmed" for any detail that has not been supplied.
 *  - Use status "pending" (shown as "Pending upload") for files not yet uploaded.
 *    Pending entries must keep viewUrl and downloadUrl as empty strings.
 *  - Never add placeholder links such as "#".
 *
 * Sources used for the current text:
 *  - Topic Assessment Form, TAF_R26-IT-087 (V2.1)
 *  - Proposal presentation slides (16 March 2026)
 *  - Individual proposal reports (March 2026)
 *  - Individual thesis of T. Kobiram (October 2026)
 */
window.SITE_CONTENT = {
  TBC: "To be confirmed",

  project: {
    title: "An AI-Based Intelligent Farming System for Improving Pomegranate Yield and Quality",
    groupId: "R26-IT-087",
    module: "IT4010 Research Project – 2026",
    researchGroup: "AIMS – Autonomous Intelligent Machines and Systems",
    specialization: "Information Technology (IT)",
    department: "Department of Information Technology",
    faculty: "Faculty of Computing",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "B.Sc. (Hons) in Information Technology",
    researchCluster: "Computing for Sustainable Development – Smart Agriculture",
    abstract:
      "Pomegranate farmers in Sri Lanka often make cultivation decisions without clear, timely information. " +
      "Soil conditions are guessed, diseases are noticed late, fruit growth stages are estimated by eye, and " +
      "fruit grading after harvest is done manually. This group research develops an integrated AI-based " +
      "intelligent farming system that combines IoT soil sensing and image-based machine learning models. " +
      "The system is organised into four individual components: fruit growth stage detection and harvest time " +
      "prediction, fruit disease detection and treatment recommendation, fruit quality grading and waste " +
      "utilization analysis, and intelligent fertilizer recommendation with weather-informed irrigation decisions.",
    overview: [
      {
        title: "Problem area",
        text: "Farmers depend on manual practices, have limited knowledge of soil, irrigation and nutrient levels, detect diseases late, and lack tools to monitor fruit growth or grade fruit consistently."
      },
      {
        title: "Approach",
        text: "An integrated system that uses IoT sensors for soil data and image-based deep learning for fruit analysis, supporting decisions from soil monitoring to post-harvest grading."
      },
      {
        title: "Expected contribution",
        text: "Clear, component-specific decision support that aims to reduce crop loss, reduce fruit waste and encourage careful use of water and fertilizer."
      }
    ],
    stakeholders: ["Pomegranate farmers", "Farm owners", "Agricultural officers", "Fruit exporters", "Agricultural researchers"]
  },

  domain: {
    literatureSurvey: [
      {
        theme: "IoT soil and weather monitoring",
        text: "IoT systems have been used to monitor soil moisture, NPK levels, pH and temperature for pomegranate cultivation and to send readings to a dashboard or phone. These systems mainly display raw values and give limited action advice.",
        refs: [1, 2]
      },
      {
        theme: "Fertilizer recommendation",
        text: "Studies apply supervised learning such as Random Forest, support vector machines, logistic regression, XGBoost and regression models to recommend fertilizer types, NPK quantities or mixing ratios. These targets differ from one another and cannot be compared directly.",
        refs: [3, 5, 6]
      },
      {
        theme: "Irrigation advice and control",
        text: "IoT and cloud-based irrigation systems combine soil moisture sensors with weather prediction APIs or remote motor control. Irrigation decisions are often based only on soil moisture or humidity.",
        refs: [4, 7]
      },
      {
        theme: "Image-based disease detection",
        text: "Image processing and CNN models have been used to identify pomegranate diseases. Most studies focus on leaf disease detection rather than fruit disease detection.",
        refs: [8, 9]
      },
      {
        theme: "Fruit growth, grading and waste use",
        text: "Image-based monitoring of fruit growth and harvest time has been studied, but growth stage monitoring is rarely included in farming systems. Fruit grading research mostly focuses on grading accuracy, while pomegranate peels and seeds can be used for food, cosmetic and other value-added products.",
        refs: [10, 11]
      },
      {
        theme: "Integrated pomegranate platforms",
        text: "Some systems combine nutrient, climate, disease and fruit quality functions, using Random Forest for structured data and CNNs for image tasks. Many other systems address a single agricultural problem only.",
        refs: [12]
      }
    ],
    references: [
      { id: 1, text: "U. R. Harale and S. R. Kumbhar, “IoT Enabled Monitoring of Soil and Weather Parameters for Pomegranate Cultivation,” Journal of Electrical Systems, vol. 20, no. 11s, pp. 5375–5383, 2024." },
      { id: 2, text: "H. Shahab et al., “IoT-driven smart agricultural technology for real-time soil monitoring and nutrient measurement,” Computers and Electronics in Agriculture, 2025." },
      { id: 3, text: "M. D. Hossain, S. Mustary, M. A. Kashem, M. Z. Ferdus, and M. J. Sadeq, “IoT Enabled Soil Fertilizer Monitoring and Recommendation System in the Context of Bangladeshi Agriculture,” IEEE PEEIACON, pp. 416–421, 2024." },
      { id: 4, text: "K. G. Anandha Jothi et al., “IoT and Cloud based Automated Irrigation System,” 3rd International Conference on Artificial Intelligence for Internet of Things, 2024." },
      { id: 5, text: "A. Irfan, M. Hashim, Hammadullah, and A. M. Shaikh, “Advancing Agriculture with IoT and a Smart Fertilizer Recommendation System,” VFAST Transactions on Software Engineering, vol. 13, no. 3, pp. 43–54, 2025." },
      { id: 6, text: "W. M. F. Wan Nik et al., “AI Assisted and IOT Based Fertilizer Mixing System,” Advanced and Sustainable Technologies, vol. 3, no. 1, pp. 38–45, 2024." },
      { id: 7, text: "V. Anandkumar, T. R. Kalaiarasan, and S. Balakrishnan, “IoT Based Soil Analysis and Irrigation System,” International Journal of Pure and Applied Mathematics, vol. 119, no. 12, pp. 1127–1134, 2018." },
      { id: 8, text: "P. B. Wakhare, S. Neduncheliyan, and K. R. Thakur, “Study of Disease Identification in Pomegranate Using Leaf Detection Technique,” 2022." },
      { id: 9, text: "Prathibha K.N. and Adithya D.A., “An Integrated IoT-Based System for Automated Plant Disease Detection and Management,” International Journal of Innovative Science and Research Technology, 2025." },
      { id: 10, text: "R. Milella, M. Reina, A. Nielsen, M. Paleari, and A. Vande Wouwer, “Image-Based Monitoring of Pomegranate Fruit Growth and Harvest Time Prediction,” IEEE Access, vol. 8, pp. 45970–45984, 2020." },
      { id: 11, text: "K. Ko, Y. Dadmohammadi, and A. Abbaspourrad, “Nutritional and Bioactive Components of Pomegranate Waste Used in Food and Cosmetic Applications: A Review,” Foods, vol. 10, no. 3, 657, 2021." },
      { id: 12, text: "V. D. Vidanapathirana et al., “Pomegranate Farming Monitoring System,” International Journal of Research in Engineering, Science and Management, vol. 6, no. 10, 2023." }
    ],
    researchGap: [
      "Many research systems address a single agricultural problem, such as leaf disease detection, soil monitoring or post-harvest grading.",
      "Most disease detection studies analyse leaves rather than pomegranate fruit.",
      "Soil monitoring systems often display parameters without fertilizer or irrigation recommendations, and irrigation advice is rarely linked with rainfall forecasts.",
      "Fruit growth stage monitoring and harvest time prediction are rarely considered.",
      "Fruit grading studies focus on accuracy and do not recommend how each quality level should be used."
    ],
    researchProblem: [
      "Pomegranate farmers in Sri Lanka still depend largely on traditional, manual farming practices, while Sri Lanka spends a large amount on pomegranate imports each year.",
      "Farmers lack clear knowledge of soil conditions, irrigation needs and nutrient levels, which can lead to overuse or underuse of water and fertilizer.",
      "Fruit diseases such as Bacterial Blight, Anthracnose and Alternaria are often detected late, causing crop damage and yield loss.",
      "There is no practical way to monitor fruit growth stages or predict harvest time, and manual grading after harvest leads to fruit waste."
    ],
    objectives: {
      main: "To develop an integrated AI-based intelligent farming system that combines IoT sensors and image-based machine learning models to support pomegranate farmers from soil monitoring to post-harvest fruit grading.",
      specific: [
        "Detect pomegranate fruit growth stages from images and predict the time remaining to harvest.",
        "Detect and classify pomegranate fruit diseases from images and recommend suitable treatments.",
        "Grade fruit into High, Medium and Low quality and recommend suitable usage for each level.",
        "Collect soil readings with a portable IoT device, recommend fertilizer levels using soil data and tree age, and support irrigation decisions using soil moisture and weather information."
      ]
    },
    methodology: [
      { step: "Problem study", text: "Review literature, existing systems and farmer practices, supported by discussions with pomegranate farmers." },
      { step: "Data collection", text: "Collect fruit images from public datasets and farm sources, and soil readings from a portable 7-in-1 soil sensor together with weather data." },
      { step: "Preprocessing", text: "Clean, resize and label images; clean structured soil and weather records and prepare model features." },
      { step: "Model development", text: "Train deep learning models (CNN, YOLO) for image tasks and Random Forest classifiers for structured soil and weather data." },
      { step: "System development", text: "Build application interfaces for uploading images, receiving sensor readings and displaying results and recommendations." },
      { step: "Evaluation", text: "Evaluate each component separately with training and testing splits and classification metrics, then validate with new real-world inputs." }
    ],
    technologies: [
      { name: "Python", use: "Data preparation and model development" },
      { name: "TensorFlow / Keras", use: "Training deep learning models" },
      { name: "Convolutional Neural Networks (CNN)", use: "Image classification of growth stage, disease and quality" },
      { name: "YOLO", use: "Detecting pomegranate fruits in images" },
      { name: "OpenCV", use: "Image preprocessing and feature extraction" },
      { name: "Random Forest", use: "Fertilizer level and irrigation state classification" },
      { name: "ESP32 and 7-in-1 soil sensor", use: "Portable soil sensing (N, P, K, pH, moisture, temperature)" },
      { name: "RS485 to TTL module and Bluetooth", use: "Sensor communication and transfer of readings to the mobile application" },
      { name: "Open-Meteo weather API", use: "Weather information for irrigation decisions" },
      { name: "Flutter / Dart and TensorFlow Lite", use: "Mobile application and on-device inference" }
    ]
  },

  components: [
    {
      id: "c-growth",
      ownerId: "m-thishoharini",
      title: "Fruit Growth Stage Detection and Harvest Time Prediction",
      summary: "An AI-based component that detects pomegranate fruit growth stages from images and predicts the remaining days to harvest.",
      problem: [
        "Farmers usually estimate fruit maturity manually.",
        "Incorrect harvesting can lead to poor fruit quality and market loss.",
        "Pomegranate fruits pass through several growth stages that are difficult to identify accurately."
      ],
      objectives: [
        "Collect a pomegranate growth stage image dataset.",
        "Apply image preprocessing techniques.",
        "Train a deep learning model to classify five growth stages.",
        "Predict harvest readiness from the detected stage.",
        "Evaluate performance using accuracy and classification metrics."
      ],
      method: "A farmer uploads a fruit image. The image is preprocessed, YOLO detects the fruit, a CNN classifies the growth stage, and the system estimates the time remaining to harvest. Weather conditions can adjust the prediction.",
      technologies: ["YOLO", "CNN", "OpenCV", "TensorFlow / Keras", "Python"],
      evaluation: "Training and testing split; accuracy and classification metrics; validation with new fruit images.",
      results: "To be confirmed"
    },
    {
      id: "c-disease",
      ownerId: "m-banuja",
      title: "Fruit Disease Detection and Treatment Recommendation",
      summary: "An AI-based component that detects and classifies pomegranate fruit diseases from images and provides treatment recommendations.",
      problem: [
        "Fruit diseases reduce fruit quality and crop yield.",
        "Farmers mostly rely on manual visual inspection, and early symptoms are hard to identify.",
        "Most existing studies focus on leaf disease rather than fruit disease."
      ],
      objectives: [
        "Collect healthy and diseased pomegranate fruit images.",
        "Preprocess images to improve quality.",
        "Develop and train a disease detection model (Healthy, Bacterial Blight, Anthracnose, Alternaria).",
        "Design a web-based system to upload images, display results and suggest treatment."
      ],
      method: "A farmer uploads a fruit image. The image is preprocessed and a CNN identifies whether the fruit is healthy or diseased. If a disease is detected, its type is identified and a treatment is suggested.",
      technologies: ["CNN", "TensorFlow / Keras", "OpenCV", "Python"],
      evaluation: "Model accuracy (proposal target: around 90% or higher), farm testing with uploaded fruit images, and response time.",
      results: "To be confirmed"
    },
    {
      id: "c-quality",
      ownerId: "m-sowmiya",
      title: "Fruit Quality Grading and Waste Utilization Analysis",
      summary: "An AI-based web component that grades pomegranate fruit quality and recommends suitable usage for each grade.",
      problem: [
        "Many farmers sort fruit manually after harvest, which is slow and not always accurate.",
        "Low-quality fruits are often thrown away as waste.",
        "Existing research focuses on grading accuracy without recommending how graded fruit should be used."
      ],
      objectives: [
        "Collect and prepare a pomegranate fruit image dataset.",
        "Apply image preprocessing techniques.",
        "Train ML/DL models to classify High, Medium and Low quality.",
        "Develop a web system to show grading results and usage recommendations (export, processing or fertilizer)."
      ],
      method: "A fruit image is uploaded, preprocessed and its features extracted. The model classifies quality, and the system displays the grade with a recommended usage.",
      technologies: ["CNN", "SVM and ANN (for comparison)", "OpenCV", "TensorFlow / Keras", "Python"],
      evaluation: "80% training and 20% testing split; CNN, SVM and ANN compared; classification accuracy (proposal target: about 90%); testing with real fruit images.",
      results: "To be confirmed"
    },
    {
      id: "c-resource",
      ownerId: "m-kobiram",
      title: "Intelligent Fertilizer Recommendation and Irrigation Decision System",
      thesisTitle: "IoT Based Smart Fertilizer and Weather Aware Irrigation System for Pomegranate Cultivation",
      summary: "An IoT and machine learning component that uses soil readings, tree age and weather information to support fertilizer and irrigation decisions.",
      problem: [
        "Soil information, crop age and weather information are often available separately and are not interpreted together for a decision.",
        "Irrigation is commonly based only on soil moisture, without considering expected rainfall.",
        "Laboratory soil testing is slow and not real-time."
      ],
      objectives: [
        "Collect soil N, P, K, pH, moisture and temperature with a portable 7-in-1 soil sensor, ESP32 and RS485 to TTL module.",
        "Transfer readings to the mobile application through Bluetooth.",
        "Combine the six soil readings with manually entered tree age to classify Low, Medium or High fertilizer levels, with Urea, TSP and MOP information.",
        "Combine soil moisture with weather data for the farm location to recommend one of four irrigation action states.",
        "Evaluate both classifiers using separate test data."
      ],
      method: "Readings travel from the sensor to the ESP32 and then to the mobile app through Bluetooth. Tree age is converted into a cultivation category, forming a seven-feature input for a Random Forest fertilizer classifier. A separate Random Forest classifier combines moisture with Open-Meteo weather data to choose an irrigation state: Suitable to irrigate, Skip – rain expected, Skip – soil already wet, or No urgent irrigation.",
      technologies: ["ESP32", "7-in-1 soil sensor", "RS485 to TTL", "Bluetooth", "Random Forest", "Open-Meteo API", "Flutter / Dart", "TensorFlow Lite", "Python"],
      evaluation: "Fertilizer: stratified 80/20 split with five-fold cross validation. Irrigation: chronological split. Accuracy, precision, recall and F1-score.",
      results: "Recorded in the individual thesis: fertilizer test accuracy 95.18% (mean five-fold cross validation 96.54%) and irrigation test accuracy 91.85%. These values measure agreement with reference labels; they do not establish fertilizer quantity accuracy, sensor calibration, water savings or yield improvement.",
      scopeNote: "This component does not perform image-based growth monitoring, disease prediction or fruit quality prediction."
    }
  ],

  milestones: [
    {
      id: "ms-proposal",
      title: "Project Proposal",
      description: "Topic assessment, proposal presentation and individual proposal reports defining the problem, objectives, methodology and component responsibilities.",
      date: "16 March 2026 (proposal presentation)",
      marks: "To be confirmed",
      status: "completed"
    },
    {
      id: "ms-pp1",
      title: "Progress Presentation 1",
      description: "First progress review of each component's design, data collection and early implementation.",
      date: "To be confirmed",
      marks: "To be confirmed",
      status: "tbc"
    },
    {
      id: "ms-pp2",
      title: "Progress Presentation 2",
      description: "Second progress review of implementation, integration and evaluation progress.",
      date: "To be confirmed",
      marks: "To be confirmed",
      status: "tbc"
    },
    {
      id: "ms-final",
      title: "Final Assessment",
      description: "Submission of final group documents and individual theses with the completed system.",
      date: "To be confirmed",
      marks: "To be confirmed",
      status: "in-progress"
    },
    {
      id: "ms-viva",
      title: "Viva",
      description: "Oral examination where each member explains and defends their individual research contribution.",
      date: "To be confirmed",
      marks: "To be confirmed",
      status: "upcoming"
    }
  ],

  /* Photo fields
   *   photoUrl      URL that loads directly as an image (for Drive use
   *                 https://lh3.googleusercontent.com/d/FILE_ID=w600)
   *   photoViewUrl  Original Google Drive sharing link (shown as "View photo")
   * Leave both empty to show an initials avatar. */
  people: {
    supervisors: [
      {
        id: "s-supervisor",
        role: "Supervisor",
        name: "Ms. Shashika Lokuliyana",
        affiliation: "Sri Lanka Institute of Information Technology",
        email: "",
        photoUrl: "https://lh3.googleusercontent.com/d/1x3sfDbMzdo9rTO3DQ6ONRsk2vMdB0B47=w600",
        photoViewUrl: "https://drive.google.com/file/d/1x3sfDbMzdo9rTO3DQ6ONRsk2vMdB0B47/view?usp=sharing"
      },
      {
        id: "s-cosupervisor",
        role: "Co-supervisor",
        name: "",
        affiliation: "",
        email: "",
        photoUrl: "",
        photoViewUrl: ""
      }
    ],
    members: [
      {
        id: "m-thishoharini",
        name: "Thishoharini V",
        studentId: "IT22281296",
        role: "Team Leader",
        affiliation: "Department of Information Technology, SLIIT",
        specialization: "Information Technology",
        email: "",
        componentId: "c-growth",
        photoUrl: "",
        photoViewUrl: ""
      },
      {
        id: "m-sowmiya",
        name: "Sowmiya A",
        studentId: "IT22549440",
        role: "Group Member",
        affiliation: "Department of Information Technology, SLIIT",
        specialization: "Information Technology",
        email: "",
        componentId: "c-quality",
        photoUrl: "",
        photoViewUrl: ""
      },
      {
        id: "m-banuja",
        name: "Banuja S",
        studentId: "IT22188304",
        role: "Group Member",
        affiliation: "Department of Information Technology, SLIIT",
        specialization: "Information Technology",
        email: "",
        componentId: "c-disease",
        photoUrl: "",
        photoViewUrl: ""
      },
      {
        id: "m-kobiram",
        name: "Kobiram T",
        studentId: "IT22245656",
        role: "Group Member",
        affiliation: "Department of Information Technology, SLIIT",
        specialization: "Information Technology",
        email: "",
        componentId: "c-resource",
        photoUrl: "",
        photoViewUrl: ""
      }
    ]
  },

  documentCategories: ["Project Charter", "Proposal", "PP1", "PP2", "Final", "Theses"],

  /* Document fields: id, title, category, type, ownerId, status, date, fileType, viewUrl, downloadUrl
   *   type     "group" (ownerId "group") or "individual" (ownerId = member id)
   *   status   "available" or "pending"
   * Download URL patterns:
   *   Uploaded PDF/PPTX/DOCX : https://drive.google.com/uc?export=download&id=FILE_ID
   *   Google Docs            : https://docs.google.com/document/d/FILE_ID/export?format=pdf
   *   Google Slides          : https://docs.google.com/presentation/d/FILE_ID/export/pptx */
  documents: [
    {
      id: "doc-taf",
      title: "Topic Assessment Form (TAF) – R26-IT-087",
      category: "Project Charter",
      type: "group",
      ownerId: "group",
      status: "available",
      date: "January 2026",
      fileType: "PDF",
      viewUrl: "https://drive.google.com/file/d/1u_8ZlPLS86pP6HG_V8qnqDpiHsCNJfiE/view?usp=sharing",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1u_8ZlPLS86pP6HG_V8qnqDpiHsCNJfiE"
    },
    { id: "doc-charter", title: "Project Charter", category: "Project Charter", type: "group", ownerId: "group", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },

    { id: "doc-proposal-checklist", title: "Proposal Checklist", category: "Proposal", type: "group", ownerId: "group", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },
    {
      id: "doc-proposal-thishoharini",
      title: "Project Proposal Report – Thishoharini V",
      category: "Proposal",
      type: "individual",
      ownerId: "m-thishoharini",
      status: "available",
      date: "To be confirmed",
      fileType: "PDF",
      viewUrl: "https://drive.google.com/file/d/1NIInY0se8h4Te-3LIkKn5u2vp_I1LPEK/view?usp=sharing",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1NIInY0se8h4Te-3LIkKn5u2vp_I1LPEK"
    },
    {
      id: "doc-proposal-sowmiya",
      title: "Project Proposal Report – Sowmiya A",
      category: "Proposal",
      type: "individual",
      ownerId: "m-sowmiya",
      status: "available",
      date: "March 2026",
      fileType: "PDF",
      viewUrl: "https://drive.google.com/file/d/1qq6EB2KlI4TX9lp25YkO0JmfjPXL0mXG/view?usp=sharing",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1qq6EB2KlI4TX9lp25YkO0JmfjPXL0mXG"
    },
    {
      id: "doc-proposal-banuja",
      title: "Project Proposal Report – Banuja S",
      category: "Proposal",
      type: "individual",
      ownerId: "m-banuja",
      status: "available",
      date: "To be confirmed",
      fileType: "PDF",
      viewUrl: "https://drive.google.com/file/d/1ImIv1-ptctwOTxkeSVjaC91RJxDk9PVC/view?usp=sharing",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1ImIv1-ptctwOTxkeSVjaC91RJxDk9PVC"
    },
    {
      id: "doc-proposal-kobiram",
      title: "Project Proposal Report – Kobiram T",
      category: "Proposal",
      type: "individual",
      ownerId: "m-kobiram",
      status: "available",
      date: "March 2026",
      fileType: "PDF",
      viewUrl: "https://drive.google.com/file/d/1h65AtxcCqlKVQwg1EcQouTgx2xbi8NQq/view?usp=sharing",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1h65AtxcCqlKVQwg1EcQouTgx2xbi8NQq"
    },

    { id: "doc-pp1-checklist", title: "PP1 Checklist", category: "PP1", type: "group", ownerId: "group", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },
    { id: "doc-pp1-thishoharini", title: "PP1 Report – Thishoharini V", category: "PP1", type: "individual", ownerId: "m-thishoharini", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },
    { id: "doc-pp1-sowmiya", title: "PP1 Report – Sowmiya A", category: "PP1", type: "individual", ownerId: "m-sowmiya", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },
    { id: "doc-pp1-banuja", title: "PP1 Report – Banuja S", category: "PP1", type: "individual", ownerId: "m-banuja", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },
    { id: "doc-pp1-kobiram", title: "PP1 Report – Kobiram T", category: "PP1", type: "individual", ownerId: "m-kobiram", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },

    { id: "doc-pp2-checklist", title: "PP2 Checklist", category: "PP2", type: "group", ownerId: "group", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },
    { id: "doc-pp2-thishoharini", title: "PP2 Report – Thishoharini V", category: "PP2", type: "individual", ownerId: "m-thishoharini", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },
    { id: "doc-pp2-sowmiya", title: "PP2 Report – Sowmiya A", category: "PP2", type: "individual", ownerId: "m-sowmiya", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },
    { id: "doc-pp2-banuja", title: "PP2 Report – Banuja S", category: "PP2", type: "individual", ownerId: "m-banuja", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },
    { id: "doc-pp2-kobiram", title: "PP2 Report – Kobiram T", category: "PP2", type: "individual", ownerId: "m-kobiram", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },

    { id: "doc-final-group", title: "Final Group Report", category: "Final", type: "group", ownerId: "group", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },
    { id: "doc-final-checklist", title: "Final Checklist", category: "Final", type: "group", ownerId: "group", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },

    { id: "doc-thesis-thishoharini", title: "Individual Thesis – Thishoharini V", category: "Theses", type: "individual", ownerId: "m-thishoharini", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },
    { id: "doc-thesis-sowmiya", title: "Individual Thesis – Sowmiya A", category: "Theses", type: "individual", ownerId: "m-sowmiya", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },
    { id: "doc-thesis-banuja", title: "Individual Thesis – Banuja S", category: "Theses", type: "individual", ownerId: "m-banuja", status: "pending", date: "To be confirmed", fileType: "PDF", viewUrl: "", downloadUrl: "" },
    {
      id: "doc-thesis-kobiram",
      title: "Individual Thesis – IoT Based Smart Fertilizer and Weather Aware Irrigation System",
      category: "Theses",
      type: "individual",
      ownerId: "m-kobiram",
      status: "available",
      date: "October 2026",
      fileType: "Google Doc (PDF download)",
      viewUrl: "https://docs.google.com/document/d/1Ux2Htssq4rnGkD_zIE6oEMbtlX6X_j9wbs7r0Io-ke4/edit?usp=sharing",
      downloadUrl: "https://docs.google.com/document/d/1Ux2Htssq4rnGkD_zIE6oEMbtlX6X_j9wbs7r0Io-ke4/export?format=pdf"
    }
  ],

  /* Presentation fields: id, title, milestone, status, date, fileType, viewUrl, downloadUrl */
  presentations: [
    {
      id: "pres-proposal",
      title: "Proposal Presentation",
      milestone: "Project Proposal",
      status: "available",
      date: "16 March 2026",
      fileType: "Google Slides (PPTX download)",
      viewUrl: "https://docs.google.com/presentation/d/1AnUcnEPMPE9OWkuh6TEo6IyjFjtbjUKZ-9eUMV49gJQ/edit?usp=sharing",
      downloadUrl: "https://docs.google.com/presentation/d/1AnUcnEPMPE9OWkuh6TEo6IyjFjtbjUKZ-9eUMV49gJQ/export/pptx"
    },
    { id: "pres-pp1", title: "Progress Presentation 1 (PP1)", milestone: "Progress Presentation 1", status: "pending", date: "To be confirmed", fileType: "Slides", viewUrl: "", downloadUrl: "" },
    { id: "pres-pp2", title: "Progress Presentation 2 (PP2)", milestone: "Progress Presentation 2", status: "pending", date: "To be confirmed", fileType: "Slides", viewUrl: "", downloadUrl: "" },
    { id: "pres-final", title: "Final Presentation", milestone: "Final Assessment", status: "pending", date: "To be confirmed", fileType: "Slides", viewUrl: "", downloadUrl: "" }
  ],

  contact: {
    groupEmail: "",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    department: "Department of Information Technology, Faculty of Computing",
    emailSubject: "Enquiry about research project R26-IT-087",
    emailBody:
      "Dear R26-IT-087 Research Group,\n\n" +
      "My name is [your name] from [your organisation].\n\n" +
      "I am writing about your research project \"An AI-Based Intelligent Farming System for Improving Pomegranate Yield and Quality\".\n\n" +
      "[Your message]\n\n" +
      "Kind regards,\n[your name]"
  }
};
