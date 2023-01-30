
$(".toggler-signin").click(function() {

    $(this).toggleClass("bi-eye-fill bi-eye-slash-fill");
    var valuePwSignIn = document.getElementById('passwordSignIn');
    if (valuePwSignIn.type == "password") {
      valuePwSignIn.type = 'text';
    } else {
        valuePwSignIn.type = 'password';
    }
  });
  
$(".toggler-signup").click(function() {
    $(this).toggleClass("bi-eye-fill bi-eye-slash-fill");
    var valuePwSignUp = document.getElementById('passwordSignUp');

    if (valuePwSignUp.type == "password") {
        valuePwSignUp.type = 'text';
        } else {
            valuePwSignUp.type = 'password';
        }
});