var num = +prompt("Enter any number");

document.write("Result: <br />");
document.write("The value of a is: " + num + "<br >");
document.write("............................." + "<br >" + "<br >");
document.write("The value of ++a is: " + ++num + "<br >");
document.write("Now the value of a is: " + num + "<br >" + "<br >");
document.write("The value of a++ is: " + num++ + "<br >");
document.write("Now the value of a is: " + num + "<br >" + "<br >");
document.write("The value of --a is: " + --num + "<br >");
document.write("Now the value of a is: " + num + "<br >" + "<br >");
document.write("The value of a-- is: " + num-- + "<br >");
document.write("Now the value of a is: " + num + "<br >"+ "<br >");

//q1 end

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

//--a

//a is 1
//b is 1
//result is 1

//--a - --b;

//a is 1
//b is 0
//result is -1

// --a - --b + ++b; 
// 1 - 0 + 1

//a is 1
//b is 1
//result is 2

// --a - --b + ++b + b--; 
// 1 - 0 + 1 + 1

//result is 3


//q2 end

var name = prompt("Enter your name");
alert("welcome " + name);

//q3 end

var num = prompt("Input Table Number", "5");
var num2 = 1;

document.write(num + "X" + num2 + "=" + num * num2 + "<br />");
document.write(num + "X" + ++num2 + "=" + num * num2 + "<br />");
document.write(num + "X" + ++num2 + "=" + num * num2 + "<br />");
document.write(num + "X" + ++num2 + "=" + num * num2 + "<br />");
document.write(num + "X" + ++num2 + "=" + num * num2 + "<br />");
document.write(num + "X" + ++num2 + "=" + num * num2 + "<br />");
document.write(num + "X" + ++num2 + "=" + num * num2 + "<br />");
document.write(num + "X" + ++num2 + "=" + num * num2 + "<br />");
document.write(num + "X" + ++num2 + "=" + num * num2 + "<br />");
document.write(num + "X" + ++num2 + "=" + num * num2 + "<br />");

//q4 end

var sub1 = prompt("Enter first subject");
var sub2 = prompt("Enter second subject");
var sub3 = prompt("Enter third subject");
var totalMarks = 100;
var msub1 = +prompt("Enter marks of first subject");
var msub2 = +prompt("Enter marks of second subject");
var msub3 = +prompt("Enter marks of third subject");
var marksOb = msub1 + msub2 + msub3;

document.write("<table>" +
    "<tr>" +
    "<td>" + "<strong>" + "Subject" + "</strong>" + "</td>" +
    "<td>" + "<strong>" + "Total Marks" + "</strong>" + "</td>" +
    "<td>" + "<strong>" + "Obtained Marks" + "</strong>" + "</td>" +
    "<td>" + "<strong>" + "Percentage" + "</strong>" + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" + sub1 + "</td>" +
    "<td>" + totalMarks + "</td>" +
    "<td>" + msub1 + "</td>" +
    "<td>" + (msub1 / totalMarks) * 100 + "%" + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" + sub2 + "</td>" +
    "<td>" + totalMarks + "</td>" +
    "<td>" + msub2 + "</td>" +
    "<td>" + (msub2 / totalMarks) * 100 + "%" + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" + sub3 + "</td>" +
    "<td>" + totalMarks + "</td>" +
    "<td>" + msub3 + "</td>" +
    "<td>" + (msub3 / totalMarks) * 100 + "%" + "</td>" +
    "<tr>" +
    "<td>" + "</td>" +
    "<td>" + "<strong>" + "<center>" + totalMarks * 3 + "</strong>" + "</center>" + "</td>" +
    "<td>" + "<strong>" + "<center>" + marksOb + "</strong>" + "</center>" + "</td>" +
    "<td>" + "<strong>" + "<center>" + marksOb / 3 + "%" + "</strong>" + "</center>" + "</td>" +
    "</tr>" + "</table>");

//q5 end