function validateForm() {      //check the booking form is valid
	var tname = document.forms["myForm"]["tourName"].value;
	if (tname == "") {
    alert("You must fill in tour name");
    return false;}
	
	var ddate = document.forms["myForm"]["departmentDate"].value;
	if (ddate == "") {
    alert("You must fill in department date");
    return false;}
	if (ddate.length != 10){
		alert("Department date is invalid");
		return false;
	}
	
	var lname = document.forms["myForm"]["lastName"].value;
	if (lname == "") {
    alert("You must fill in last name");
    return false;}
	
	var fname = document.forms["myForm"]["firstName"].value;
	if (fname == "") {
    alert("You must fill in first name");
    return false;
	}
	
	var passport = document.forms["myForm"]["passport"].value;
	if (passport == "") {
    alert("You must fill in passport number");
    return false;
	}
	
	var address = document.forms["myForm"]["address"].value;
	if (address == "") {
    alert("You must fill in your address");
    return false;
	}
	
	var phone = document.forms["myForm"]["phone"].value;
	var mobile = document.forms["myForm"]["mobile"].value;
	if (phone == "" && mobile == "") {
    alert("You must fill in your phone number or mobile number");
    return false;
	}

	
	var nationality = document.forms["myForm"]["nationality"].value;
	if (nationality == "") {
    alert("You must fill in your nationality");
    return false;
	}
	
	if (document.getElementById("callA").checked == false && document.getElementById("callB").checked == false &&
    document.getElementById("textMe").checked == false && document.getElementById("emailMe").checked == false) {
    alert("You must choose how we contact you");
    return false;
  }
  alert("You submit the form successfully !");
  var contactMethod = "";
  if (document.getElementById("callA").checked) {
    contactMethod += "callA,";
  }
  if (document.getElementById("callB").checked) {
    contactMethod += "callB,";
  }
  if (document.getElementById("textMe").checked) {
    contactMethod += "textMe,";
  }
  if (document.getElementById("emailMe").checked) {
    contactMethod += "emailMe,";
  }
  
  setCookie(tname, ddate, lname, fname,  passport, address, mobile, phone, nationality,contactMethod);
  
}


function validateForm2() {  //check the login in form on homepage is valid and check if can log in 
	var passP = document.forms["loginForm"]["passport"].value;
	if (passP == "") {
    alert("You must fill in passport number");
    return false;
	}
	
	var lastN = document.forms["loginForm"]["lastName"].value;
	if (lastN == "") {
    alert("You must fill in last name");
    return false;
	}
	
	if ((passP == getPassport) && (lastName == getLastName)) {
		window.location = "booking.html";
		return true;
		}
		else{
			alert("passport or last name is wrong.");
			return false;
		}
}
	
	
	
	//this function will return the cookie of the argument given
function getCookie(name) { 
  name = name.toLocaleString;
  var cookieList = document.cookie.split(';');
  var i = 0;
  while (i < cookieList.length){
    var cookieElement = saparate_it[i].trim();
    if (name == cookieElement) {
	return cookieElement;
	i++;}
  }
  return "";
}

//set the cookie of form, store the data in the cookie
function setCookie(tname,fname,lname, fname,passport,address,mobile,phone,nationality,contactMethod) {
  //set expires date
  var day = new Date();
  var exdays = 10;
    day.setTime(day.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+day.toUTCString();


  document.cookie = "tname=" + tname + expires; 

  document.cookie = "ddate=" + ddate + expires; 

  document.cookie = "lname=" + lname + expires; 

  document.cookie = "fname=" + fname + expires; 

  document.cookie = "passport=" + passport + expires; 

  document.cookie = "address=" + address + expires;

  document.cookie = "mobile=" + mobile + expires; 

  document.cookie = "phone=" + phone + expires; 

  document.cookie = "nationality=" + nationality + expires; 

  document.cookie = "contactMethod=" + contactMethod + expires; 


}


//return the cookies we stored
function getPassport() {
  return getCookie("passport");
}

function gettourName() {
  return getCookie("tname");
}

function getDepartmentDate() {
  return getCookie("ddate");
}

function getLastName() {
  return getCookie("lname");
}

function getFirstName() {
  return getCookie("fname");
}

function getAddress() {
  return getCookie("address");
}

function getMobile() {
  return getCookie("mobile");
}

function getPhone() {
  return getCookie("phone");
}

function getNationality() {
  return getCookie("nationality");
}

function getcontactMethod() {
  return getCookie("contactMethod");
}

