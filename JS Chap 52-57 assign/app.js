var imageArr = ["images/4.png", "images/5.jpg", "images/6.jpg", "images/7.png"];
var imgDiv = document.getElementById('imgDiv');
imgDiv.innerHTML = "";


for (var i = 0; i < imageArr.length; i++){
    imgDiv.innerHTML += '<img class="format" id="attr" src="'+imageArr[i]+'" />';
}

// displaying all 4 images inside div of id imgDiv

var images = imgDiv.getElementsByTagName("img");

for (var j = 0; j < images.length; j++){
    images[j].setAttribute("onClick", "openModal(this)")
}

//getting div with id imgDiv and then getting all images inside that div and assiging to variable images
//then inserting onclick function to all those images

function openModal(imageSrc){
    var modal = document.getElementById("modal");
    modal.classList.add("modal-open");
    modal.classList.remove("modal-close");
    modal.style.display = "block";
    var img = document.getElementById("modal-img");
    img.setAttribute("src", imageSrc.src)
}

function onClosedImagModal(){
    var modal = document.getElementById("modal");
    modal.classList.remove("modal-open");
    modal.classList.add("modal-close");
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
}

//q1 end

var zoomCount = 0;
var para = document.getElementById("para");
    para.style.fontSize = "16px";

function zoomIn(){
    zoomCount = 10;
    var para = document.getElementById("para");
    var fs = document.getElementById("para").style.fontSize;
    var a = fs.length-2;
    var b = parseInt(fs.slice(0, a));
    para.style.fontSize = b+zoomCount+"px";
}
function zoomOut(){
    zoomCount = 10;
    var para = document.getElementById("para");
    var fs = document.getElementById("para").style.fontSize;
    var a = fs.length-2;
    var b = parseInt(fs.slice(0, a));
    if (b == 16){
        alert("For the sake of better readability Saleheen Noor limits the Zoom Out function to '16px' so you can not zoom out more..");
    }
    else if(b >= 16){
        para.style.fontSize = b-zoomCount+"px";
    }
}

//q2 end