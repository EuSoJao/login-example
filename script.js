    window.onload = ("load", () => {
        window.alert("Log-In or Create a New Account")
    })

/*function alerta() {
    var email = document.getElementById("emailInput");
    var emailValue = email.value;
    var idCalc = emailValue.toUpperCase();
    var id = [];
    var userInfo = {
        'email': '',
        'groups': {},
        'id': '',
        'isSiteAdmin': false
    };

    userInfo.email = emailValue;
    console.log(userInfo);
};
*/

function alerta(){
    var email = document.getElementById("emailInput");
    var emailValue = email.value;
    var idCalc = emailValue.toUpperCase();
    var id = [];
    let sum = 0;
    for(let i = 0; i < emailValue.length; i++) {
      id.push(emailValue.charCodeAt(i));
    }
    const sum = emailValue.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    console.log(sum).value
};