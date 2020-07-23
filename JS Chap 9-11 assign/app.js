var city = prompt("Enter you city name");

if (city === "karachi") {
    alert("Welcome to city of lights");
}

//q1 end

var gender = prompt("Enter your gender");

if (gender === "male") {
    alert("Good morning Sir.");
}
else if (gender === "female") {
    alert("Good morning Ma'am.");
}

//q2 end

var signalcolor = prompt("Enter color of road traffic signal");
if (signalcolor === "red") {
    alert("Must Stop");
}
if (signalcolor === "yellow") {
    alert("Ready to move");
}
if (signalcolor === "green") {
    alert("Move now");
}

//q3 end

var fuel = prompt("Enter your remaining fule in litres");

if (fuel <= 0.25 + "litres") {
    alert("Please refill the fuel in your car");
}

//q4 end

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

//Output "given condition for variable a is true""

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// No Ouyput

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

//condition 2 is true
//condition 4 is true

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// The cost equals

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

//First condition is true because if statement only excecutes if condition is true.

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// car is smaller than cat because r is less than R in ASCII codes

//q5 end

var marksObtain = +prompt("Enter your marks obtain in three subjects");
var totalMarks = +prompt("Enter Total marks");
var percentage = (marksObtain / totalMarks) * 100;
var grade;
var remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}

else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}

else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}

else if (percentage < 60) {
    grade = "Fail";
    remarks = "Sorry";
}


document.write("<h1>  Marks Sheet  </h1> <br /> <br />");
document.write("Total marks : " + totalMarks + "<br />");
document.write("Marks obtained : " + marksObtain + "<br />");
document.write("Percentage : " + percentage + "%" + "<br />");
document.write("Grade : " + grade + "<br />");
document.write("Remarks : " + remarks + "<br />");

//q6 end

var secNum = 7;

var guess = +prompt("Guess the secret number");

if (guess === secNum) {
    alert("Bingo! Correct answer");
}

else if (guess === ++secNum) {
    alert("Close enough to the correct answer");
}

//q7 end

var num = prompt("Enter any number");
var divi = num % 3;

if (divi === 0) {
    alert("Your entered number is divisible by 3");
}

//q8 end

var num = +prompt("Enter any Number");

var eo = num % 2;

if (eo === 0) {
    alert("Input number is even number")
}

else {
    alert("Input number is odd number");
}

//q9 end

var temp = +prompt("Enter Temperature");

if (temp > 40) {
    alert("It is too hote outside.");
}
else if (temp > 30) {
    alert("The Weather today is Normal.");
}
else if (temp > 20) {
    alert("Today’s Weather is cool.");
}

else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

//q10 end


var num1 = +prompt("Enter 1st number to calculate");
var num2 = +prompt("Enter 2nd number to calculate");
var operation = prompt("Enter +,-,*, / & % to calculate");
var calculate;

if (operation === "+") {
    calculate = num1 + num2;
    alert(calculate);
}
if (operation === "-") {
    calculate = num1 - num2;
    alert(calculate);
}
if (operation === "*") {
    calculate = num1 * num2;
    alert(calculate);
}
if (operation === "/") {
    calculate = num1 / num2;
    alert(calculate);
}
if (operation === "%") {
    calculate = num1 % num2;
    alert(calculate);
}

//q11 end