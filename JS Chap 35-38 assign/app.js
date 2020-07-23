function date() {
    var date = new Date();
    document.write(date);
}

date();

//q1 end

// function greet() {
//     var fname = prompt("Enter first name");
//     var lname = prompt("Enter last name");
//     var greeting = fname + " " + lname;
//     alert("Welcome " + greeting);
// }
// greet();

//q2 end

// function twonum() {
//     var fnum = +prompt("Enter first number");
//     var lnum = +prompt("Enter last number");
//     var sum = fnum + lnum;
//     alert(sum);
// }

// twonum();

//q3 end

// function calc(num1, num2, operator) {
//     var calculate;

//     if (operator === "+") {
//         calculate = num1 + num2;
//         alert(calculate);
//     }
//     else if (operator === "-") {
//         calculate = num1 - num2;
//         alert(calculate);
//     }
//     else if (operator === "*") {
//         calculate = num1 * num2;
//         alert(calculate);
//     }
//     else if (operator === "/") {
//         calculate = num1 / num2;
//         alert(calculate);
//     }

// }
// calc(num1 = +prompt("Enter 1st number for calculation"), num2 = +prompt("Enter 2nd number for calculation"), operator = prompt("Enter +,-,*, / to calculate"));

//q4 end

// function square(num) {
//     var res = Math.pow(num, 2);
//     document.write(res);
// }
// square(num = +prompt("Enter any number and i will show its square."));

//q5 end

// function factorial(num) {
//     if (num >= 0) {
//         var fact = 1;
//         for (var i = 1; i <= num; i++) {
//             fact = fact * i
//         }
//     }
//     if (num < 0) {
//         var fact = -1;
//         for (var i = 1; i >= num; i--) {
//             fact = fact * i
//         }
//     }
//     document.write("Factorial of " + num + " is " + fact + "<br />");
// }
// factorial(num = +prompt("Enter any number to computes its factorial."));

//q6 end

// function count(start, end) {
//     var a = start;
//     var b = end;
//     for (a; a <= b; a++) {
//         document.write(a + "<br />");
//     }
// }
// count(start = +prompt("Enter number for start"), end = +prompt("Enter number for end"));

//q7 end

// function calculateHypotenuse(bas, per) {

//     bp = Math.pow(bas, 2) + Math.pow(per, 2);
//     document.write("Hypotenuse of right angle triangle is: " + bp + "<br />");

//     function calculateSquare(bp) {
//         hyp = Math.sqrt(bp);
//         document.write("Square root of hypotenuse is: " + hyp);
//     }
//     calculateSquare(bp);
// }
// calculateHypotenuse(bas = +prompt("Enter base of right angle triangle"), per = +prompt("Enter perpendicular of right angle triangle"));

//q8 end

// function aor(width, height) {
//     var a = width * height;
//     document.write("Area of rectangle is: " + a);
// }
// aor(width = +prompt("Enter width"), height = +prompt("Enter height"));

//q9 end

// function palindrome(str) {
//     var rstr = str.split("").reverse().join("");;
//     console.log(rstr);
//     if (str === rstr) {
//         document.write("Given string is palindrome.");
//     }
//     else {
//         document.write("Given string is not palindrome.");
//     }
// }

// palindrome(str = prompt("Enter any word to check word is palindrome or not?"));

//q10 end

// function str(upper) {
//     var emptyArr = [];
//     var arr = upper.split(" ");

//     for (var i = 0; i < arr.length; i++) {
//         emptyArr.push(arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase());
//     }
//     arr = emptyArr.join(" ");
//     document.write("String: " + upper + "<br />");
//     document.write("Output: " + arr);
// }

// str("the quick brown fox");

//q11 end

// function longw(str) {
//     var emparr = [];
//     var arr = str.split(" ");
//     var arr0 = arr[0].length;
//     var arr1 = arr[1].length;
//     var arr2 = arr[2].length;

//     if (arr0 > arr1 && arr0 > arr2) {
//         document.write("Example String: " + str + "<br />");
//         document.write("Example Output: " + arr[0]);
//     }
//     else if (arr1 > arr0 && arr1 > arr2) {
//         document.write("Example String: " + str + "<br />");
//         document.write("Example Output: " + arr[1]);
//     }
//     else if (arr2 > arr0 && arr2 > arr1) {
//         document.write("Example String: " + str + "<br />");
//         document.write("Example Output: " + arr[2]);
//     }
// }
// longw("Web Development Tutorial");

//q12 end

// function occur(str, let) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str.slice(i, i + 1) === let) {
//             count++;
//         }
//     }
//     document.write("Number of occurrences of given specified letter is: " + count);
// }
// occur(str = prompt("Enter any string"), let = prompt("Enter single letter to find its occurence in your given string"));

//q13 end

// function calcCircumference(radius) {
//     var coc = 2 * 3.14 * radius;
//     document.write("Circumference of circle " + coc + "<br />");
// }

// calcCircumference(radius = +prompt("Enter radius of circle"));


// function calcArea(radius) {
//     var aof = 3.14 * Math.pow(radius, 2);
//     document.write("Area of circle " + aof);
// }

// calcArea(radius);

//q14 end