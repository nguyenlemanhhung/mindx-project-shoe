
$(".toggler-signin").click(function() {

    $(this).toggleClass("bi-eye-fill bi-eye-slash-fill");
    let passwordSignInValue = document.getElementById('passwordSignIn');
    if (passwordSignInValue.type == "password") {
      passwordSignInValue.type = 'text';
    } else {
        passwordSignInValue.type = 'password';
    }
  });
  
$(".toggler-signup").click(function() {
    $(this).toggleClass("bi-eye-fill bi-eye-slash-fill");
    let passwordSignUpValue = document.getElementById('passwordSignUp');

    if (passwordSignUpValue.type == "password") {
        passwordSignUpValue.type = 'text';
        } else {
            passwordSignUpValue.type = 'password';
        }
});