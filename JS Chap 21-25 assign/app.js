var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var fullName = firstName + " " + lastName;

alert("Welcome " + fullName);

//q1 end

var userFavMob = prompt("Please enter your favouritr mobile phone model");
var lengthOfUSF = userFavMob.length;

document.write("<strong>" + "My favorite phone is: " + userFavMob + "</strong>" + "<br />");
document.write("<strong>" + "Length of string: " + lengthOfUSF + "</strong>");

//q2 end

var nationality = "Pakistani";
var indexNum = nationality.indexOf("n");

document.write("<strong>" + "String: " + nationality + "</strong>" + "<br />");
document.write("<strong>" + "Index of 'n': " + indexNum + "</strong>");

//q3 end

var letter = "Hello World";
var indexNum = letter.lastIndexOf("l");

document.write("<strong>" + "String: " + letter + "</strong>" + "<br />");
document.write("<strong>" + "Index of 'l': " + indexNum + "</strong>");

//q4 end

var word = "Pakistani";
var charIndex3 = word.slice(3, 4);

document.write("<strong>" + "String: " + word + "</strong>" + "<br />");
document.write("<strong>" + "Character at index 3: " + charIndex3 + "</strong>");

//q5 end

var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var fullName = "Welcome " + firstName.concat(lastName);

alert(fullName);

//q6 end

var word = "Hyderabad";
var newWord = word.replace("Hyder", "Islam");

document.write("<strong>" + "City: " + word + "</strong>" + "<br />");
document.write("<strong>" + "After replacement: " + newWord + "</strong>");

//q7 end

var message = "Ali and Sami are best friends. They play cricket and football together.";
message = message.replace(/and/g, "&");

document.write(message);

//q8 end

var string = "472";
var num = Number(string);

document.write("<strong>" + "Value: " + string + "</strong>" + "<br />");
document.write("<strong>" + "Type: " + "string" + "</strong>" + "<br />");
document.write("<strong>" + "Value: " + num + "</strong>" + "<br />");
document.write("<strong>" + "Type: " + "number" + "</strong>");

//q9 end

var input = prompt("Enter any dry fruit name");
var upperCaseInput = input.toUpperCase();

document.write("<strong>" + "User input: " + input + "</strong>" + "<br />");
document.write("<strong>" + "Upper case: " + upperCaseInput + "</strong>");

//q10 end

var input = prompt("Enter enter scripting language name");
var firstChar = input.slice(0, 1);
var otherChar = input.slice(1);
firstChar = firstChar.toUpperCase();
otherChar = otherChar.toLowerCase();
var titelCase = firstChar + otherChar;

document.write("<strong>" + "User input: " + input + "</strong>" + "<br />");
document.write("<strong>" + "Title case: " + titelCase + "</strong>");

//q11 end

var num = 35.36;
var newNum = num.toString();
var ans = newNum.replace(".", "");

document.write("<strong>" + "Number: " + num + "</strong>" + "<br />");
document.write("<strong>" + "Result: " + ans + "</strong>");

//q12 end

var username = prompt("Please enter your username.");
document.write(username);
var ul = username.length;
for (var i = 0; i < ul; i++) {
    if (username.slice(i, i + 1) == "!" || username.slice(i, i + 1) == "," || username.slice(i, i + 1) == "." || username.slice(i, i + 1) == "@") {
        alert("Please enter a valid username.");
        break;
    }
}

//q13 end

var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var uInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
uInput = uInput.toLowerCase();
var matchFound = false;

for (var i = 0; i < a.length; i++) {
    if (uInput === a[i]) {
        document.write(uInput + " is" + "<strong>" + " available " + "</strong>" + "at index " + i + " in our bakery");
        matchFound = true;
        break;
    }
}
if (matchFound === false) {
    document.write("We are sorry. " + uInput + " is " + "<strong>" + "not available " + "</strong>" + " in our bakery");
}

//q14 end


var allowedCharacters = [];

for (var j = 65; j <= 90; j++) {
    allowedCharacters.push(j);
}
for (var k = 97; k <= 122; k++) {
    allowedCharacters.push(k);
}
for (var l = 48; l <= 57; l++) {
    allowedCharacters.push(l);
}


var pass = prompt("Please enter your password at least 6 characters.");
var arr = []
var matchFound = true;
var numPassError = true;
var enterValidPass = true;

if (pass == null) {
    document.write("Try Again");
}

function passValidation() {

    for (var i = 0; i < pass.length; i++) {
        arr.push(pass.charCodeAt(i))
    }

    if (arr.length == 0) {
        document.write("Password can not be empty");
        return false;
    }
    else if (pass.length < 6) {
        document.write("Password must be 6 characters long");
        matchFound = false;
        return false;
    }


    var firstChar = arr[0];

    for (var m = 0; m < pass.length; m++) {
        var pos = allowedCharacters.indexOf(arr[m])
        if (pos === -1) {
            matchFound = false;
            enterValidPass = false;
        }
        else if (pos !== -1 && (firstChar >= 48 && firstChar <= 57)) {
            matchFound = false;
            numPassError = false;
        }
    }

    if (matchFound == true) {
        document.write("Your Password is valid: " + pass + "<br />");
    }
    else if (numPassError == false) {
        document.write("Entered password: " + pass + "<br />");
        document.write("Password can not begin with a number" + "<br />");
        document.write("Please enter a valid password");
    }
    else if (enterValidPass == false) {
        document.write("Please Enter a valid password" + "<br />");
        document.write("Please should be alphabets and numbers & should not start with a number, it must at least 6 characters long");
    }
}

passValidation()


//q15 end

var university = "University of Karachi";
var arr = university.split("");
for (var i = 0; i < university.length; i++) {
    document.write(arr[i] + "<br />");
}

//q16 end

var word = "Pakistan";
var newWord = word.charAt(word.length - 1);

document.write("<strong>" + "User Input: " + word + "</strong>" + "<br />");
document.write("<strong>" + "Last character of input: " + newWord + "</strong>");

//q17 end

var str = "The quick brown fox jumps over the lazy dog.";
document.write("Text: " + str + "<br />");
str = str.toLowerCase();
var count = 0;
for (var i = 0; i < str.length; i++) {
    if (str.slice(i, i + 3) === "the") {
        count++;
    }
}
document.write("There are " + count + " occurence(s) of word 'the'");

//q18 end
