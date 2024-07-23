var Projects = [
    {
        name:"A Complete Deep Learning Pipeline for Cervical Cancer Detection",
        tech_stack: "Tensorflow, Django, ReactJS",
        date: "Jun 2021 – Jun 2022",
        points: [
            "Designed a Cervical Cancer detection system using Colposcopy images, comprising three stages: <b>object detection, feature extraction, and prediction</b>.",
            "Crafted a Custom <b>YOLO</b> model to pinpoint cancerous zones eliminating surrounding, optimizing detection accuracy.",
            "Applied diverse image transformation techniques including <b>GLCM</b> for swollen veins detection, <b>HSV</b> for highlighting cancerous coloration in acetic acid-treated areas, and employed a Green Filter to detect the whitening effect induced by acetic acid at the transformation zone.",
            "Investigated multiple feature extraction and prediction recipes, building and evaluating approximately <b>500 models</b>.",
            "<b>The Department of Science and Technology, Government of India, funded this project with a Rupees 3.6million grant, and received a patent</b>.",
            "<b>Published at ICISA 2023</b> (ISBN - 978-981-99-6983-8)."
        ],
        link:"https://link.springer.com/chapter/10.1007/978-981-99-6984-5_22"
    },
    {
        name:"Packet Monitoring JumpProxy",
        tech_stack: "GoLang",
        date: "Mar 2024 - Apr 2024",
        points: [
            "Developed a <b>Jumpproxy client and server</b> to detect and thwart malicious TCP connections directed at the machine",
            "Implemented additional <b>encryption</b> layers over TLS connections to uphold data integrity.",
            "Utilized <b>Go Routines</b> for concurrent handling of multiple connections and wait groups for efficient scheduling of requests and responses for encryption system to secure data transmission between the client and server over the <b>TLS</b> link"
        ],
        link:""
    },
    {
        name:"RAFT Server",
        tech_stack: "C++, Ubuntu",
        date: "Sep 2023 – Dec 2023",
        points: [
            "Implemented the <b>RAFT consensus</b> algorithm to establish consensus among five servers through log-based replication",
            "Built a <b>highly available key value store</b>, replicated over five nodes that supports <b>CRUD</b> operations utilizing the RAFT as its consensus algorithm enhancing <b>data consistency</b> and <b>fault tolerance</b>, <b>load balancing using sharding</b>"
        ],
        link:""
    },
    {
        name:"PCET's Covid task force",
        tech_stack: "React JS, Node JS, MongoDB, Open Source",
        date: "Sep 2020 – Dec 2020",
        points: [
            "Constructed a CRM-inspired system to aid over 1000 individuals in accessing essential facilities during the pandemic"
        ],
        link:"https://pctfhelp.me"
    },
    {
        name:"Optimal Feature Set for Breast Cancer Detection",
        tech_stack: "Tensorflow, Python",
        date: "Jan 2022 – May 2022",
        points: [
            "Leveraged <b>Genetic Algorithm</b> to iteratively select an <b>optimal feature subset</b> from a comprehensive pool, enhancing accuracy for Breast Lesion Classification.",
            "Implemented the selected feature set into the model, resulting in superior performance by focusing solely on pertinent features for accurate analysis"
        ],
        link:""
    },
    {
        name:"Face Recognition using One Shot Learning",
        tech_stack: "Tensorflow, Python",
        date: "Oct 2021 – Dec 2021",
        points: [
            "Employed <b>InceptionV3</b> for to predict individuals based on single images within a database. This technique is known as <b>One-Shot Learning</b>",
            "Integrated <b>Siamese Networks</b> for live face tracking over the live feed.",
            "Used Blockchain technology to provide a tamper-proof and transparent way to store encoded image data, ensuring its integrity and preventing unauthorized modifications"
        ],
        link:""
    },
    // {
    //     name:"",
    //     tech_stack: "",
    //     date: "",
    //     points: [
            
    //     ],
    //     link:""
    // },
    // {
    //     name:"",
    //     tech_stack: "",
    //     date: "",
    //     points: [
            
    //     ],
    //     link:""
    // },
    // {
    //     name:"",
    //     tech_stack: "",
    //     date: "",
    //     points: [
            
    //     ],
    //     link:""
    // }
  ]
  
  function Projfnc() {
      
      Projects.map(project => {  
        (document.getElementById("Projects")).innerHTML+=(`
            <div class="col-xl-6 proj_card">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${project.name}</h5>
                  <p class="card-text">Tech Stack : ${project.tech_stack}</p>
                  <ul class="card-text">
                    ${
                        project.points.map(point => 
                            `<li>${point}</li>`
                        ).join('')
                    }
                  </ul>
                </div>
                <div class="row">
                    <div class="col-xl-2 margin-left">
                        ${project.link && `<a class="nav-link" href="${project.link}">Link</a>`}
                    </div>
                    <div class="col-xl-9">
                    <div class="card-text text-right">${project.date}</div>
                    </div>
                </div>
              </div>
            </div>    
        `)  
      }
    )
}
  
  function init() {
    Projfnc();
  }
  
  init();