var num = +prompt("Enter number");
var num1 = +prompt("Enter number");
var total = num+num1;

document.write("Sum of " + num + " and " + num1 + " is " + total + "<br />");

//q1 end

var num = +prompt("Enter number");
var num1 = +prompt("Enter number");
var total = num+num1;

// num-num1 for subtraction
// num*num1 for multiplication
// num/num1 for division
// num%num1 for modulus

document.write("Sum of " + num + " and " + num1 + " is " + total + "<br />" + "<br />");

//q2 end

var number;
document.write("Value after variable declaration is "+ number + "<br />");
number = 5;
document.write("Initial value: "+ number + "<br />");
number++;
document.write("Value after increment is: "+ number + "<br />");
number = number + 7;
document.write("Value after addition is: "+ number + "<br />");
number--;
document.write("Value after decrement is: "+ number + "<br />");
number = number%3;
document.write("The remainder is: "+ number + "<br />" + "<br />"); 


//q3 end

var cost = 600;
var CostOfBuying = 5;

document.write("Total cost to buy " + CostOfBuying + " tickets to a movie is " + CostOfBuying*cost +"PKR" + "<br />" + "<br />");

//q4 end

var num = 4;
var num1 = 1;
document.write("Table of 4" + "<br />");
document.write(num + " X " + num1 + " = " + num*num1 + "<br />");
document.write(num + " X " + ++num1 + " = " + num*num1 + "<br />");
document.write(num + " X " + ++num1 + " = " + num*num1 + "<br />");
document.write(num + " X " + ++num1 + " = " + num*num1 + "<br />");
document.write(num + " X " + ++num1 + " = " + num*num1 + "<br />");
document.write(num + " X " + ++num1 + " = " + num*num1 + "<br />");
document.write(num + " X " + ++num1 + " = " + num*num1 + "<br />");
document.write(num + " X " + ++num1 + " = " + num*num1 + "<br />");
document.write(num + " X " + ++num1 + " = " + num*num1 + "<br />");
document.write(num + " X " + ++num1 + " = " + num*num1 + "<br />"  + "<br />");

//q5 end

var tempc = 25;
var tempf = 70;

var tempShowC = (tempf-32)*(5/9);
var tempShowF = (tempc*(9/5))+32; 

document.write(tempc + "<sup>" + "o" + "</sup>" + "C" + " is " + tempShowF+"<sup>" + "o" + "</sup>" + "F" + "<br />");
document.write(tempf + "<sup>" + "o" + "</sup>" + "F" +  " is " + tempShowC+"<sup>" + "o" + "</sup>" +"C"  + "<br />" + "<br />");

//q6 end

var proit1 = 650;
var proit2 = 100;
var ordqof1 = 3;
var ordqof2 = 7;
var shics = 100;
var total = ((proit1*ordqof1)+(proit2*ordqof2)+shics);

document.write("<h1> Shopping Cart </h1>" +"<br />"+"<br />");

document.write("Price of item 1 is " + proit1+"<br />");
document.write("Quantity of item 1 is " + ordqof1+"<br />");
document.write("Price of item 2 is " + proit2 +"<br />");
document.write("Quantity of item 2 is " + ordqof2 +"<br />");
document.write("Shipping Charges " + shics+"<br />"+"<br />");
document.write("Total cost of your order is " + total  + "<br />" + "<br />");

//q7 end

var totalMarks = 980;
var marksObtained = 804;
var perc = (marksObtained/totalMarks)*100;

document.write("<h1> Marks Sheet </h1>" + "<br />");
document.write("Total marks: " + totalMarks + "<br />");
document.write("Marks obtained: " + marksObtained + "<br />");
document.write("Percentage: " + perc + "%"  + "<br />" + "<br />");

//q8 end

var us$ = 10;
var sudr = 25;

var pkcal = (10*104.80) + (25*28);

document.write("<h1> Currency in PKR </h1>" + "<br />");
document.write("Total Currency in PKR: " + pkcal  + "<br />" + "<br />");

//q9 end

var arthnum = 2;

var newnum = ((arthnum + 5) * (10) / 2);

document.write(newnum + "<br />" + "<br />");

//q10 end

var currentYear = +prompt("Current Year", "Enter Current Year");
var birthYear= +prompt("Birth Year", "Enter your birth year");
var age = (currentYear - birthYear);

document.write("<h1> Age Calculator </h1>" + "<br />" + "<br />");
document.write("Current Year: " + currentYear + "<br />");
document.write("Birth Year: " + birthYear + "<br />");
document.write("Your Age is: " + age + "<br />" + "<br />");

//q11 end

var radius = 20;
var pi = 3.142;
var circumference= 2 * pi * radius;
var area = pi * (radius*2);

document.write("<h1> The Geometrizer </h1>" + "<br />" + "<br />");
document.write("Radius of a circle: " + radius + "<br />");
document.write("The circumference is: " + circumference + "<br />");
document.write("The area is: " + area + "<br />" + "<br />");

//q12 end


var snack = "choclate chip";
var currentAge = 15;
var maxAge= 65;
var estAmount = 3;

document.write("<h1> The Lifetime Supply Calculator </h1>" + "<br />" + "<br />");
document.write("Favorite Snack: " + snack + "<br />");
document.write("Current Age: " + currentAge + "<br />");
document.write("Estimated Maximum Age: " + maxAge + "<br />");
document.write("Amount of snacks per day: " + estAmount + "<br />");
document.write("You will need " + (maxAge-currentAge)*estAmount + " choclate chip to last you until the ripe old age of " + maxAge + "<br />" + "<br />");

//q13 end