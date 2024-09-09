function alerta() {
    var email = document.getElementById("emailInput");
    var emailValue = email.value;
    var userInfo = {
        'email': '',
        'groups': {},
        'id': '',
        'isSiteAdmin': false
    };

    userInfo.email = emailValue;
    console.log(userInfo);

    confetti({
      particleCount: 100,
      spread: 20,
      origin: { y: 0.6, x: 0.46 },
    });
};