    window.onload = ("load", () => {
        window.alert("Log-In or Create a New Account")
    })

function alerta() {
    var email = document.getElementById("emailInput");
    var emailValue = email.value;
    var idCalc = emailValue.toUpperCase().charCodeAt(0);
    var userInfo = {
        'email': '',
        'groups': {},
        'id': '',
        'isSiteAdmin': false
    };

    userInfo.email = emailValue;
    userInfo.id = idCalc.value *= 5
    console.log(userInfo);
}