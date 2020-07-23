var arr = [[], [], []];
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}

//q1 end

var arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}

//q2 end

var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i <= 9; i++) {
    document.write(count[i] + "<br />");
}

//q3 end

var tableNum = prompt("Enter Table Number");
var tablelength = prompt("Enter Table Length");

document.write("Multiplication table of " + tableNum + " Length " + tablelength + "<br />" + "<br />");

for (var i = 1; i <= tablelength; i++) {
    document.write(tableNum + " X " + i + " = " + tableNum * i + "<br />");
}

//q4 end

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i <= 4; i++) {
    document.write(fruits[i] + "<br />");
}
document.write("<br />" + "Element at index 0 is " + fruits[0] + "<br />");
document.write("Element at index 1 is " + fruits[1] + "<br />");
document.write("Element at index 2 is " + fruits[2] + "<br />");
document.write("Element at index 3 is " + fruits[3] + "<br />");
document.write("Element at index 4 is " + fruits[4]);

//q5 end

var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
document.write("Counting: ");
for (var i = 1; i <= 15; i++) {
    document.write(num[i] + ", ");

}

document.write("<br />" + "Reverse counting: ");
for (var i = 10; i >= 1; i -= 1) {
    document.write(num[i] + ", ");
}

document.write("<br />" + "Even: ");
for (var i = 0; i <= num.length; i += 2) {
    document.write(num[i] + ", ");
}

document.write("<br />" + "Odd: ");
for (var i = 1; i < num.length; i += 2) {
    document.write(num[i] + ", ");
}

document.write("<br />" + "Series: ");
for (var i = 2; i < num.length; i += 2) {
    document.write(num[i] + "k, ");
}

//q6 end

var bak = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'm?");
var baker = bak.length;
var matchFound = false;
for (var i = 0; i < baker; i++) {
    if (userInput === bak[i]) {
        matchFound = true;
        document.write(userInput + " is available at index " + i + " in our bakery");
        break;
    }
}
if (matchFound === false) {
    document.write("We are sorry. " + userInput + " is not available in our bakery");
}

//q7 end

var num = [24, 53, 78, 91, 12];

document.write("Array items: ")
for (var i = 0; i < num.length; i++) {
    document.write(num[i] + " ");
}
num = num.sort();
document.write("<br />" + "The smallest number is " + num[0]);

//q8 end

var num = [24, 53, 78, 91, 12];

document.write("Array items: ")
for (var i = 0; i < num.length; i++) {
    document.write(num[i] + " ");
}
num = num.sort();
num = num.reverse();
document.write("<br />" + "The smallest number is " + num[0]);

//q9 end

for (var i = 5; i <= 100; i = (i += 5)) {
    document.write(i + ", ");
}

//q10 end