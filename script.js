    window.onload = ("load", () => {
        window.alert("Log-In or Create a New Account")
    })

function alerta() {
    var email = document.getElementById("emailInput");
    var emailValue = email.value;
    var idCalc = emailValue.toUpperCase();
    var id = [];
    for(let i = 0 < emailValue.length; i++) {
        id.push(emailValue.charCodeAt(i))
    }
    var userInfo = {
        'email': '',
        'groups': {},
        'id': '',
        'isSiteAdmin': false
    };

    userInfo.email = emailValue;
    console.log(userInfo);
};

function log(){
    var input = document.getElementById("inputBox");
    var inputValue = input.value.toUpperCase();
    var output = [];
    for(let i = 0; i < inputValue.length; i++) {
      output.push(inputValue.charCodeAt(i));
    }
    document.getElementById("outputBox").value = output.join(" ");
};