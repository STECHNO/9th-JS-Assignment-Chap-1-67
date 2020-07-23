// function cal(a,b){
//     return a*b
// }
// var result = cal(3,6);

// q1 end

// function leapYears(a){
//     if (a % 4 === 0){
//         alert("Its Leap Year")
//     }
//     else{
//         alert("Not a Leap Year")
//     }
// }
// leapYears(prompt("Enter Year"))

//q2 end

// var a = 8;
// var b = 12;
// var c = 18;

// function side(a,b,c){
//     return (a+b+c)/2;
// }
// var result = side(a,b,c)

// function aot(a,b,c){
//     var area = result*((result-a)*(result-b)*(result-c));
//     alert(Math.sqrt(area))
// }
// aot(a,b,c)

//q3 end

// var a = parseInt(prompt("Enter Marks Obtained in English")); 
// var b = parseInt(prompt("Enter Marks Obtained in Physics")); 
// var c = parseInt(prompt("Enter Marks Obtained in Chemistry")); 

// function avg(a,b,c){
//     return (a+b+c)/3;
// }
// var avgResult = avg(a,b,c)

// function perc(a,b,c){
//     return (a+b+c)/300*100;
// }
// var percResult = perc(a,b,c)

// function mainFunction(a,b,c){
//     alert("Your Percentage is " + percResult + "%");
//     alert("Average Of Your Marks is " + avgResult);
// }
// mainFunction(a,b,c)

//q4 end

// var char = "samsung";

// function customIndex(b){
//     var charSplit = char.split("");
//     for (var i = 0; i < charSplit.length; i++){
//        if(b === charSplit[i]){
//         return i
//        }
//     }
// }
// customIndex("g")

//q5 end


// function deleteVowels(a){
//     a = a.toLowerCase();
//     var b = a.split("");
//     for(var i = 0; i < b.length; i++){
//         if (b[i] === "a" || b[i] === "e" || b[i] === "i" || b[i] === "o" || b[i] === "u"){
//             b[i] = "";
//         }
//     }
//     alert(b.join(""))
// }
// deleteVowels(prompt("Enter Sentence 25 character long", "How Are You Mr Developer"))

//q6 end

// var eaCount = 0;
// var uiCount = 0;
// function occurrences(a) {
//     a = a.toLowerCase();
//     for (var i = 0; i < a.length; i++) {
//         switch (a.slice(i, i + 2)) {
//             case "ea":
//                 eaCount++;
//         }
//         switch (a.slice(i, i + 2)) {
//             case "ui":
//                 uiCount++;
//         }
//     }
//     document.write("Occurrences of ea are " + eaCount + "<br>");
//     document.write("Occurrences of ui are " + uiCount + "<br>");
// }

// occurrences("Pleases read this application and give me gratuity")

//q7 end

// var distanceInKm = prompt("Enter DIstance Between Two Cities In Kilometer", 700);

// function meters(m){
//     m = m*1000;
//     document.write("Distance Between Two Cities In Meter Is " + m + "<br>")
// }
// meters(distanceInKm)

// function feet(f){
//     f = f*3280.84;
//     document.write("Distance Between Two Cities In Feet Is " + f + "<br>")
// }
// feet(distanceInKm)

// function inches(i){
//     i = i*39370.08
//     document.write("Distance Between Two Cities In Inches Is " + i + "<br>")
// }
// inches(distanceInKm)

// function centimeters(c){
//     c = c*100000
//     document.write("Distance Between Two Cities In Centimeter Is " + c + "<br>")
// }
// centimeters(distanceInKm)

//q8 end


// function overtimePay(a) {

//     if (a > 40) {
//         var ot = 12;
//         var hour = 0;
//         var i = 41;
//         while (i <= a) {
//             hour++
//             var b = hour * ot;
//             i++;
//         }
//         document.write("Overtime Pay Of Employee Is: " + b);
//     }
//     else {
//         document.write("Overtime Pay Of Employee Is: 0");
//     }

// }

// overtimePay(prompt("Enter Total Hours Of Working By Employee", 60))

//q9 end



question 10 remaining
