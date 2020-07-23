// var arr = [];
// var a = document.getElementsByClassName("num")


// var b = document.getElementById("inn0")
// var c = document.getElementById("inn1")
// var d = document.getElementById("inn2")
// var e = document.getElementById("inn3")

// function serial(){
//     for (var i = 0; i < a.length; i++) {
//         arr.push(i)   
//         for (var j = 0; j<i.length; j++){
//             b.innerHTML=i;
//             console.log(i)
//             console.log(b)

//         }
//     }
//     // b.innerHTML = arr[0];
//     // c.innerHTML = arr[1];
//     // d.innerHTML = arr[2];
//     // e.innerHTML = arr[3];
// }
// serial()




    

// function deletJhone(){
//     var jho = document.getElementById("jhone");
//     jho.outerHTML = "";
//     console.log(a)
//     var newarr = arr.shift();
//     console.log(newarr)
//     console.log(b.innerHTML)
    
// }

//q3 end


function changeImg(imageid,imagesrc){
    document.getElementById(imageid).src = imagesrc
}

//q4 end


var counter = 0;
function increase(){
    counter++
    var gettinginput = document.getElementById("counter");
    console.log(gettinginput.value)
    gettinginput.value = counter
}

function decrease(){
    counter--
    var gettinginput = document.getElementById("counter");
    console.log(gettinginput.value)
    gettinginput.value = counter
}

//q5 ens





q3 baki ha