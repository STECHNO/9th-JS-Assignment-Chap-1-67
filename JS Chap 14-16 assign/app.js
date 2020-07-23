var studentNames = [];

// q1 end

var studentNames = {};

// q2 end
var Starray = ["one", "two", "three", "four"];

for (var i = 0; i <= 3; i++) {

}

//q3 end

var Starray = [3, 4, 5, 6, 7];
for (var i = 0; i <= 3; i++) {

}

//q4 end

var Starray = ["true", "false"];
for (var i = 0; i <= 3; i++) {

}

//q5 end

var Starray = ["one", 3, "Hello", 6, "true"];
for (var i = 0; i <= 3; i++) {

}

///q6 end

var eduInPakistan = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("Qualificatios:" + "<br />" + "<br />");

for (var i = 0; i <= 7; i++) {
    document.write(i + 1 + ")" + eduInPakistan[i] + "<br />");
}

//q7 end

var studentsNames = ["Micheal", "John", "Tony"];
var studentScores = [320, 230, 480];
document.write("Score of " + studentsNames[0] + " is " + studentScores[0] + ". Percentage: " + ((studentScores[0] / 500) * 100) + "%" + "<br />");
document.write("Score of " + studentsNames[1] + " is " + studentScores[1] + ". Percentage: " + ((studentScores[1] / 500) * 100) + "%" + "<br />");
document.write("Score of " + studentsNames[2] + " is " + studentScores[2] + ". Percentage: " + ((studentScores[2] / 500) * 100) + "%" + "<br />");


//q8 end

var color = ["Grey", "Black", "Yellow"];
var userColor = prompt("What color you want to add to the beginning");
var userColor1 = prompt("What color you want to add at the end");
var userColor2 = +prompt("In which index you want to add color");
var userColor3 = prompt("What color you want to add on mentioned index");
var userColor4 = +prompt("At which index you want to delete color");
var userColor5 = +prompt("How many colors you want to delete");

for (var i = 0; i < color.length; i++) {
    document.write(color);
    break;
}
color.unshift(userColor);
document.write("<br />");
for (var i = 0; i < color.length; i++) {
    document.write(color);
    break;
}
color.push(userColor1);
document.write("<br />");
for (var i = 0; i < color.length; i++) {
    document.write(color);
    break;
}
color.unshift("brown", "purple");
document.write("<br />");
for (var i = 0; i < color.length; i++) {
    document.write(color);
    break;
}
color.shift();
document.write("<br />");
for (var i = 0; i < color.length; i++) {
    document.write(color);
    break;
}
color.pop();
document.write("<br />");
for (var i = 0; i < color.length; i++) {
    document.write(color);
    break;
}
color.splice(userColor2, 0, userColor3);
document.write("<br />");
for (var i = 0; i < color.length; i++) {
    document.write(color);
    break;
}
color.splice(userColor4, userColor5);
document.write("<br />");
for (var i = 0; i < color.length; i++) {
    document.write(color);
    break;
}

//q9 end

var score = [320, 230, 480, 120];
document.write("Scores of Students: ");
for (var i = 0; i < score.length; i++) {
    document.write(score + "<br />");
    break;
}
var score1 = score.sort();
document.write("Orderes Scores of Students: ");
document.write(score1);

//q10 end

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities List:" + "<br />");
for (var i = 0; i < cities.length; i++) {
    document.write(cities);
    break;
}
document.write("<br />");
document.write("<br />" + "Selected cities List:" + "<br />");
var selectedCities = cities.slice(2, 4);
document.write(selectedCities);

//q11 end

var arr = ["This", "is", "my", "cat"];
newArr = arr.join();
newArr1 = arr.join(" ");
document.write("Array" + "<br />");
document.write(newArr + "<br />" + "<br />");

document.write("String" + "<br />");
document.write(newArr1);

//q12 end

var fifo = ["keyboard", "mouse", "printer", "monitor"];
document.write("Device" + "<br />");
for (var i = 0; i < fifo.length; i++) {
    document.write(fifo);
    break;
}
document.write("<br />" + "<br />");
for (var i = 0; i < fifo.length; i++) {
    document.write("Out: " + "<br />" + fifo[i] + "<br />");
}


//q13 end

var lifo = ["keyboard", "mouse", "printer", "monitor"];
document.write("Device" + "<br />");
for (var i = 0; i < lifo.length; i++) {
    document.write(lifo);
    break;
}

var newLifo = lifo.reverse();
document.write("<br />" + "<br />");
for (var i = 0; i < lifo.length; i++) {
    document.write("Out: " + "<br />" + newLifo[i] + "<br />");
}

//q14 end

var mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("Phone Manufacturers: ");
document.write("<select>" +
    "<option>" + mobile[0] + "</option>" +
    "<option>" + mobile[1] + "</option>" +
    "<option>" + mobile[2] + "</option>" +
    "<option>" + mobile[3] + "</option>" +
    "<option>" + mobile[4] + "</option>" +
    "<option>" + mobile[5] + "</option>" + "</select>");

    //q15 end