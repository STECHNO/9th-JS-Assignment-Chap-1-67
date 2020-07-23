var char = prompt("Enter any Character (number or string)");
var charTest = char.charCodeAt(0);

if(charTest > 97 && charTest < 122) {
    alert("Your Given Character is Lowercase");
}
else if(charTest > 65 && charTest < 90){
    alert("Your Given Character is Uppercase");
}
else if(charTest > 48 && charTest < 57){
    alert("Your Given Character is Number");
}
else{
    alert("Please Enter Single Character");
}

//q1 end

var num1 = +prompt("Please enter 1st number");
var num2 = +prompt("Please enter 2nd number");

if (num1 > num2) {
    alert(num1 + " is greater then " + num2);
}
else if (num2 > num1) {
    alert(num2 + " is greater then " + num1);
}
else if (num1 === num2) {
    alert(num1 + " is equall to " + num2);
}

//q2 end

var num1 = +prompt("Enter any number");
if (num1 > 0) {
    alert("Your entered number is positive");
}
else if (num1 < 0) {
    alert("Your entered number is negative");
}
else if (num1 === 0) {
    alert("Your entered number is zero");
}

//q3 end

var char = prompt("Enter any vowel character");
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert("True");
}
else {
    alert("False");
}

//q4 end

var pass = "jstest";

var vpass = prompt("Password");
if (!vpass) {
    alert("Please enter your password");
}
else if (vpass === pass) {
    alert("Correct! The password you entered matches the original password");
}
else if (vpass !== pass) {
    alert("Incorrect password");
}

//q5 end

var hour = 13;
var greeting;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

document.write(greeting);

//q6 end


var time = 1900;
time = +prompt("Please enter hour");

    if (time >= 0000 && time < 1200) {
        document.write("Good morning");
    }
    else if (time >= 1200 && time < 1700) {
        document.write("Good afternoon");
    }
    else if (time >= 1700 && time < 2100) {
        document.write("Good evening");
    }
    else if (time >= 2100 && time < 2359) {
        document.write("Good night");
    }

//q7 end