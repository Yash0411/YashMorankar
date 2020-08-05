
var webdev = [
  {
    name:"Event Vault",
    description:"This is an event idea suggestion system for college where students can post their ideas about various events<br/><b>Frontend : Angular 8.3.1<br/>Backend : Firebase No SQL and Authentication</b>",
    img:"./assets/webdev/Eventvault.PNG",
  },
  {
    name:"ERP System",
    description:"ERP management system for Poultry based Applications. Consist data and interlinking with various data fields.<br/><b>Frontend : React JS<br/>Backend : Node JS</b>",
    img:"./assets/webdev/Poultry.PNG",
  },
  {
    name:"Exam System for Schools",
    description:"Exam conduction system for schools and colleges consisting of role based authentication for Teachers, Students and Schools.<br/><b>Frontend : React JS<br/>Backend : Dijango</b>",
    img:"./assets/webdev/quiz.png",
  },
]

function webdevfnc() {
    
    for (var prop in webdev){  
       (document.getElementById("webdev")).innerHTML+=(`<div class="service-box carousel-item " style="padding-top:5px;padding-right:5px;padding-left:5px">
       <div class="">
         <img class = "service-icon  mx-auto " style="width:auto; border-radius:10px;height:165px" src="${webdev[prop].img}" alt="No Image">
       </div>
       <div class="service-content">
         <h2 class="s-title">${webdev[prop].name}</h2>
         <p class="s-description text-center">
         ${webdev[prop].description}<br>
          
         </p>
       </div>
       <span class="s-button " href="#webdevcar" role="button" data-slide="next">Slide ></span>
     </div>`)  
    }
}


var native = [
  
]

function nativefnc() {
    
    for (var prop in native){  
       (document.getElementById("native")).innerHTML+=(`<div class="service-box carousel-item " style="padding-top:5px;padding-right:5px;padding-left:5px">
       <div class="">
         <img class = "service-icon  mx-auto " style="width:auto; border-radius:10px;height:165px" src="${native[prop].img}" alt="No Image">
       </div>
       <div class="service-content">
         <h2 class="s-title">${native[prop].name}</h2>
         <p class="s-description text-center">
         ${native[prop].description}<br>
          
         </p>
       </div>
       <span class="s-button " href="#nativecar" role="button" data-slide="next">Slide ></span>
     </div>`)  
    }
}

var ML = [
  {
    name:"Genetic Algo. AI To Play Game",
    description:"AI built for playing a snake like game using GA. Using unsupervised learning, The bot learns to play the game achiving an ability after certain generations.",
    img:"./assets/ML/capture.PNG",
  },
  {
    name:"Neural Network AI<br> Tic-Tac-Toe",
    description:"Tic-Tac-Toe AI built using supervised learning. <br>Auto generation of proper dataset.<br>Also implemented using <b>TFJS</b> with a designer UI.",
    img:"./assets/ML/tictactoe.png",
  },
  {
    name:"COVID 19 Detection using CNN",
    description:"<b>7 Class detection</b><br><b>Diseases</b> : COVID-19, Pnuemonia(bacteria), Pnuemonia(Virus), SAARS, ARDS, Spectrocossus <br> <b>Normal</b> ",
    img:"./assets/ML/pnuemonia.jpg",
  },
  {
    name:"YOLO V3 Object Detection ",
    description:"Use of a pre-trained <b>YOLOv3 (You Look Only Once V3)</b> to perform object localization and detection on photographs.<br>Aim for moving a step towards Autonomous Driving.",
    img:"./assets/ML/YOLO.jpg",
  },
  {
    name:"Traffic Symbol Detection ",
    description:"<b>43 Class detection</b><br> Detection of traffic symbols using <b>OPEN CV</b> and <b>CNN</b> in python.<br> Also the model is implemented for LIVE detection using <b>TFJS</b> & can be used as a web app anywhere anytime ",
    img:"./assets/ML/traffic.jfif",
  },
  {
    name:"Devnagri Script Number Detection",
    description:"<b>10 Class detection</b><br> Detection of numbers in Devnagri script using <b>CNN</b> in python.<br><b>Accuracy : 97%</b> ",
    img:"./assets/ML/devnagri.jpg",
  },
  {
    name:"Hand Symbol <br>Detection ",
    description:"<b>10 Class detection</b><br> Detection of Hand symbols using <b>OPEN CV</b> and <b>CNN</b> in python.<br><b>Accuracy : 99%</b> ",
    img:"./assets/ML/hand.jpg",
  },
]

function MLfnc() {
    
    for (var prop in ML){  
       (document.getElementById("ML")).innerHTML+=(`<div class="service-box carousel-item " style="padding-top:5px;padding-right:5px;padding-left:5px">
       <div class="">
         <img class = "service-icon  mx-auto " style="width:auto; max-width:100%; border-radius:10px;height:165px;" src="${ML[prop].img}" alt="No Image">
       </div>
       <div class="service-content">
         <h2 class="s-title">${ML[prop].name}</h2>
         <p class="s-description text-center">
         ${ML[prop].description}<br>
          
         </p>
       </div>
       <span class="s-button " href="#MLcar" role="button" data-slide="next">Slide ></span>
     </div>`)  
    }
}

function init() {
  webdevfnc();
  nativefnc();
  MLfnc();
}

init();
