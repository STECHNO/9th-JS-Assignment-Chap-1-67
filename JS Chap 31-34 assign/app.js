
var date = new Date();
document.write(date);

//q1 end

// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date();
// date.setMonth(11);
// var ndate = date.getMonth();

// var month = month[ndate];
// document.write("Current month: " + month);

//q2 end

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var day = date.getDay();
// console.log(day);
// var nday = dayNames[day];

// document.write("Today is " + nday);

//q3 end

// var today = new Date();
// var holiday = today.getDay();

// if (holiday === 0 || holiday === 6) {
//     document.write("It's Fun day");
// }
// else(
//     document.write("Today is not a Fun day")
// )


//q4 end

// var date = new Date();
// var days = date.getDate();

// if (days < 16) {
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
// }

//q5 end

// var date = new Date();
// var elmilis = date.getTime();

// document.write("Current date: " + date + "<br />");
// document.write("Elapsed milliseconds since January 1, 1970: " + elmilis + "<br />");
// document.write("Elapsed minutes since January 1, 1970: " + elmilis / (1000 * 60 * 60));

//q6 end

// var date = new Date();
// var time = date.getHours();

// if (time <= 12) {
//     alert("It's AM");
// }
// else if (time <= 23) {
//     alert("It's PM");
// }

//q7 end

// var date = new Date("December 31, 2020");
// document.write("Later date: " + date);

//q8 end

// var rdate = new Date("June 18, 2015");
// var newrdate = rdate.getTime();
// var newdate = new Date();
// var newndate = newdate.getTime();
// var diff = newndate - newrdate;
// var result = diff / (1000 * 60 * 60 * 24);
// var pastdays = Math.floor(result);

// document.write(pastdays + " days have passes since 1st Ramadan 2015");

//q9 end

// var d = new Date("December 5, 2015 22:50:16");
// var newdate = d.getTime();
// var e = new Date("January 1, 2015");
// var refdate = e.getTime();

// document.write("On reference date " + d + "<br />");
// document.write((newdate - refdate) / 1000 + " seconds had passed since beginning of 2015");

//q10 end

// var d = new Date();
// var time1 = d.getHours();
// var e = new Date();
// e = new Date(e.setHours(time1 - 1));

// document.write("current date: " + d + "<br />");
// document.write("1 hour ago, it was " + e);

//q11 end

// var d = new Date();
// var year = d.getFullYear();
// var e = new Date();
// e.setFullYear(year - 100);

// document.write("current date: " + d + "<br />");
// document.write("100 years back " + e);

//q12 end

// var age = +prompt("Enter your age");
// var d = new Date();
// d = d.getFullYear();
// var e = new Date();
// e.setFullYear(d - age);
// e = e.getFullYear();

// document.write("Your age is " + age + "<br />");
// document.write("Your birth year is " + e);

//q13 end

// var cname = "ABS Customer";
// var cmonth = "February";
// var nOfUnits = "410";
// var chargesPerUnit = 16;
// var netAmount = nOfUnits * chargesPerUnit;
// var latePayment = 350;
// var grossAmount = netAmount + 350;

// document.write("<h2>" + "K-Electric Bill" + "</h2>" + "<br />" + "<br />");
// document.write("Customer Name: " + "<strong>" + cname + "</strong>" + "<br />");
// document.write("Month: " + "<strong>" + cmonth + "</strong>" + "<br />");
// document.write("Number of Units: " + "<strong>" + nOfUnits + "</strong>" + "<br />");
// document.write("Charges per unit: " + "<strong>" + chargesPerUnit + "</strong>" + "<br />" + "<br />");
// document.write("Net Amount Payable (within Due Date): " + "<strong>" + netAmount + "</strong>" + "<br />");
// document.write("Late payment surcharge: " + "<strong>" + latePayment + "</strong>" + "<br />");
// document.write("Net Amount Payable (within Due Date): " + "<strong>" + grossAmount + "</strong>" + "<br />");

//q14 end