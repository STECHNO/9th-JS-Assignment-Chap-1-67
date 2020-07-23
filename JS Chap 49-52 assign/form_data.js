document.getElementById("first_name_input").innerHTML = localStorage.getItem("fnvalue");
document.getElementById("last_name_input").innerHTML = localStorage.getItem("lnvalue");
document.getElementById("dob_input").innerHTML = localStorage.getItem("bdvalue") + " " + localStorage.getItem("bmvalue") + " " + localStorage.getItem("byvalue");
document.getElementById("email_input").innerHTML = localStorage.getItem("emvalue");
document.getElementById("password_input").innerHTML = localStorage.getItem("passvalue");
document.getElementById("mobile_number_input").innerHTML = localStorage.getItem("mnvalue");
document.getElementById("get_gender").innerHTML = localStorage.getItem("gendervalue");
document.getElementById("address_input").innerHTML = localStorage.getItem("addvalue");
document.getElementById("city_input").innerHTML = localStorage.getItem("cityvalue");
document.getElementById("state_input").innerHTML = localStorage.getItem("statevalue");
document.getElementById("country_input").innerHTML = localStorage.getItem("counvalue");

function back() {
    document.getElementById("dob_input").innerHTML = "";
    confirmGender = "";
    localStorage.setItem("gendervalue", confirmGender);
    window.close()
}