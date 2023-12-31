window.onload = function() {
    var canvas = document.querySelector("#canvas");
    var ctx = canvas.getContext('2d');
    var imageObj = new Image();
    
    //Rectangle with gradient
    ctx.beginPath();
    
    // Create gradient
    var grd = ctx.createLinearGradient(0, 0, 800, 100);
    grd.addColorStop(0, "#ffffff");
    grd.addColorStop(1, "#2b818f");
    
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 800, 100);

//text
ctx.font = 'italic 48px arial';
ctx.fillStyle = "#1f4540";
ctx.fillText('Using Canvas', 30, 60);
ctx.fillStyle = "#3f8a87";
ctx.fillText('Using Canvas', 30, 60);                  
//side text
ctx.save();
ctx.translate(780,15);
ctx.rotate(Math.PI / 2);
ctx.font = 'bold 16px arial';
ctx.textAlign = "left";
ctx.fillStyle = "#3f8a87";
ctx.fillText("Waves", 700, 50);
ctx.fillStyle = "#00c9c9";
ctx.fillText("Waves", 10, 10);
ctx.restore();
//wave drawing
ctx.strokeStyle = "#0c0d0d";
//waves
ctx.beginPath();
ctx.moveTo(400, 50);
ctx.lineWidth = 3;
ctx.bezierCurveTo(500, 40, 550, 20, 600, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(500, 60);
ctx.lineWidth = 2;
ctx.bezierCurveTo(620, 50, 670, 30, 720, 60);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(600, 70);
ctx.lineWidth = 1;
ctx.bezierCurveTo(700, 60, 750, 40, 800, 70);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 50);
ctx.lineWidth = 2;
ctx.bezierCurveTo(550, 65, 640, 74, 650, 100);
ctx.stroke();


    //ids controlled
    var main = document.querySelector("#main");
    var myMenu = document.querySelector("#myMenu");
    var close = document.querySelector("#close");
    var navbar = document.querySelector("#navbar");
    //new ids
    var mea = document.querySelector("#mea");
    var movementeffects = document.querySelector("#movementeffects");
    var clmea = document.querySelector("#clmea");
    
    
    myMenu.addEventListener("click", openMenu, false);
    close.addEventListener("click", closeMe, false);
    //new
    mea.addEventListener("click", openME, false);
    clmea.addEventListener("click", closeMea, false);
    
    function openMenu(){
        //unhide the navbar
        navbar.style.display = "block";
        myMenu.style.display = "none";
        main.style.marginLeft ="25%";   
    }
    function closeMe(){
        //hide the navbar
        navbar.style.display ="none";
        myMenu.style.display ="block";
        
    }
    
    //new function
    function openME(){
        movementeffects.style.display = "inherit";
    }
    function closeMea(){
        movementeffects.style.display = "none";
    }


    var hea = document.querySelector("#hea");
    var hovereffects = document.querySelector("#hovereffects");
    var clhea = document.querySelector("#clhea");
    hea.addEventListener("click", openHe, false);
    clhea.addEventListener("click", closeHe, false);
    function openHe(){
        hovereffects.style.display = "inherit";
    }
    function closeHe(){
        hovereffects.style.display = "none";
    }

    var tra = document.querySelector("#tra");
    var transitions = document.querySelector("#transitions");
    var cltra = document.querySelector("#cltra");
    tra.addEventListener("click", openTra, false);
    cltra.addEventListener("click", closeTra, false);
    function openTra(){
        transitions.style.display = "inherit";
    }
    function closeTra(){
        transitions.style.display = "none";
    }

    var ana = document.querySelector("#ana");
    var animations = document.querySelector("#animations");
    var clana = document.querySelector("#clana");
    ana.addEventListener("click", openAna, false);
    clana.addEventListener("click", closeAna, false);
    function openAna(){
        animations.style.display = "inherit";
    }
    function closeAna(){
        animations.style.display = "none";
    }
}


