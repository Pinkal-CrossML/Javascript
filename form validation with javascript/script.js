function reset_alert(show) {
  if(show=='re'){
    var form = document.querySelector(".reg-form");
    form.reset();
    alert("Successfull register Sign-in Now"); 
  }
  else if(show=='log'){
    var form = document.querySelector(".reg-logform");
    form.reset();
    alert("Successfull Sign-in");
    
  }   
}


  $('#myform').submit(function(e){
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("psw").value;
  var repassword = document.getElementById("psw-repeat").value;
  
  
  // first name
  var name_re_ex = '^[a-zA-Z]{2,30}';
  if (!firstname.match(name_re_ex)){
   
    document.getElementById("err-div").innerHTML = "<span> Pleas write Crorrect first name </span>";
    return false;
  } 

  // lastname
  if (!lastname.match(name_re_ex)){

    document.getElementById("err-div").innerHTML = "<span> **Pleas write Crorrect last name </span>";
    return false;
  } 
  

  // email
  if (email.search(/\w+@\w+\.\w+$/) == -1) {
    document.getElementById("err-div").innerHTML = "<span> **incorrect email** </span>";
    return false;
  }

  // phone
  var phoneno = /^\d{10}$/;
  if (!phone.match(phoneno)) {
    document.getElementById("err-div").innerHTML = "<span> Pleas write 10 Digit Mobile No </span>";
    return false;
  }

  // password
  var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (!password.match(passw)) {
    // alert(password)
    document.getElementById("err-div").innerHTML = "<span> Pleas write  Crorrect password </span>";
    return false;
  }

  // repassword
  if (repassword != password) {
    document.getElementById("err-div").innerHTML = "<span> **Password Not Matches </span>";
    return false;
  }
  
  fillData();
  
  reset_alert('re');
  e.preventDefault();
  
});

// login from javascrip

function loginfunction() {
  var logemail = document.getElementById("logemail").value;
  var logpassword = document.getElementById("logpsw").value;

  if (logemail.search(/\w+@\w+\.\w+$/) == -1) {
    document.getElementById("err-divl").innerHTML = "<span> **incorrect email** </span>";
    return false;
  }

  // log password
  var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (!logpassword.match(passw)) {
    document.getElementById("err-divl").innerHTML = "<span> Pleas write  Crorrect password </span>";
    return false;
  }
  reset_alert('log');
  e.preventDefault();
}

// function for fill User data in table 

function fillData() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("psw").value;
  var file = document.getElementById("file").value;

  document.getElementById('data_tbl_val1').innerHTML = firstname;
  document.getElementById('data_tbl_val2').innerHTML = lastname;
  document.getElementById('data_tbl_val3').innerHTML = email;
  document.getElementById('data_tbl_val4').innerHTML = phone;
  document.getElementById('data_tbl_val5').innerHTML = password;
  document.getElementById('data_tbl_val6').innerHTML = file;
  
}