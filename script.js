

function onNameBlur() {
    var name = document.getElementById("name").value;
    var nameValidation = document.getElementById("nameValidation");

    if (name == "") {
        nameValidation.innerHTML = "please write your proper name";
        nameValidation.style.display = "block";

    }
    else {
        nameValidation.style.display = "none";
    }
}


function onPasswordBlur() {
    var password = document.getElementById("password").value;
    var passwordValidation = document.getElementById("passwordValidation");
    if (password.length < 6) {
        passwordValidation.innerHTML = "Write at least more then six characters";
        passwordValidation.style.display = "block";

    }
    else if (password.length > 6) {
        passwordValidation.style.display = "none";

    }
}
function onEmailBlur() {
    var email = document.getElementById("email").value;
    var emailValidation = document.getElementById("emailValidation");
    if (email.match("@")) {
        emailValidation.style.display = "none";
    }
    else {
        emailValidation.innerHTML = "Follow the valid email expration";
        emailValidation.style.display = "block";

    }
}

function registerUser() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    var validationResult = document.getElementById("validataionResult");

    if ((name && password && email).length == 0) {
        validationResult.innerHTML = "Check your inpiut field on above";
        validationResult.style.display = "block";

    }
    else {
        validationResult.style.display = "none";
    }
}