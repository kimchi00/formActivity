function Plength() {
    var inputpw = document.myform.password.value;
    var min = 8;
    var bd = document.myform.bday.value;
    var bd2 = bd.split("-");
    var today = new Date();
    var year = today.getFullYear();
    var agecompute = year - bd2[0];

    if (inputpw.length < min) {
        document.getElementById('errormsg').innerHTML = "Password must be at least 8 characters."
        document.getElementById('nice').innerHTML = " "
    }else {
        document.getElementById('errormsg').innerHTML = " "
    }
    
    if (agecompute < 21) {
        document.getElementById('errormsg2').innerHTML = "Minors are not allowed!"
        document.getElementById('nice').innerHTML = " "
    }else {
        document.getElementById('errormsg2').innerHTML = " "
    }

    if (inputpw.length >= min && agecompute >= 21){
        document.getElementById('nice').innerHTML = "Hooray! Your account has been successfully created!"
        document.getElementById('errormsg').innerHTML = " "
        document.getElementById('errormsg2').innerHTML = " "
    }
}

