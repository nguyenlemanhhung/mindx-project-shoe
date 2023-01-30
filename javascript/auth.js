// sign up
function addData(){
    var emailSignUp = document.getElementById('emailSignUp').value;
    var passwordSignUp = document.getElementById('passwordSignUp').value;
    var confirmPasswordSignUp = document.getElementById('confirmPasswordSignUp').value;

    localStorage.setItem('userEmail' ,emailSignUp);
    localStorage.setItem('userPassword',passwordSignUp);

    if (confirmPasswordSignUp == passwordSignUp) {
        alert('dang ky thanh cong')
    }else {
        alert('mat khau khong hop le')
    }
}
// log in
function checkData(){
    var emailSignIn = document.getElementById('emailSignIn').value;
    var passwordSignIn = document.getElementById('passwordSignIn').value;

    var getEmail = localStorage.getItem('userEmail');
    var getPassword = localStorage.getItem('userPassword');

    if (emailSignIn == getEmail) {
        if (passwordSignIn == getPassword) {
            alert ("dang nhap thanh cong")
            localStorage.setItem('login_success', true)
        }else {
            alert("sai mat khau")
            localStorage.setItem('login_success', false)
        }
    }else {
        alert (" email hoac mat khau khong hop le")
        localStorage.setItem('login_success', false)

    }

}
// log out 
function userLogOut(){
    localStorage.setItem('login_success', false)

}
const loginSuccess = localStorage.getItem('login_success');

    if (loginSuccess == 'true') {
        document.getElementById('has-user').style.display = 'block';
        document.getElementById('no-user').style.display = 'none';
    } else {
        document.getElementById('has-user').style.display = 'none';
        document.getElementById('no-user').style.display = 'block';
    }