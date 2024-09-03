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

function confete(){
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6, x: 0.5 }
      });
}