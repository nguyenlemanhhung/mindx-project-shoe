const formSignUp = document.getElementById('formSignUp');
const emailSignUp = document.getElementById('emailSignUp');
const passwordSignUp = document.getElementById('passwordSignUp');
const confirmPasswordSignUp = document.getElementById('confirmPasswordSignUp');

const formSignIn = document.getElementById('formSignIn');
const emailSignIn = document.getElementById('emailSignIn');
const passwordSignIn = document.getElementById('passwordSignIn');

const signUpFormContainer = document.querySelector('.signup-form-container');
const signUpSuccess = document.querySelector('.signup-success');


formSignUp.addEventListener('submit', e => {
    e.preventDefault();
    e.stopPropagation();
    
    const isSuccess = validateInputs();
    if (isSuccess) {
        localStorage.setItem('userEmail' ,emailSignUp.value);
        localStorage.setItem('userPassword',passwordSignUp.value);

        signUpFormContainer.classList.add('hide-form');
        signUpSuccess.classList.add('show-success')
    }
    
    return false;

});
formSignIn.addEventListener('submit',e => {
    e.preventDefault();
    e.stopPropagation();
    checkData();
    return false

})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
    return true;
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    return true;
};

const isValidEmail = emailSignUp => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailSignUp));
}
// const oneDigit = password => {
//     const re = /^(?=.*?[0-9])$/;
//     return re.test(String(password));
// }
const validateInputs = () => {
    const emailSignUpValue = emailSignUp.value.trim();
    const passwordSignUpValue = passwordSignUp.value.trim();
    const confirmPasswordSignUpValue = confirmPasswordSignUp.value.trim();

    let successEmail = false;
    if(emailSignUpValue === '') {
        setError(emailSignUp, 'Email ko dc ????? tr???ng');
        successEmail = false;
    } else if (!isValidEmail(emailSignUpValue)) {
        setError(emailSignUp, 'Email kh??ng h???p l???');
        successEmail = false;
    } else {
        setSuccess(emailSignUp);
        successEmail = true;
    }

    let successPassword = false;
    if(passwordSignUpValue === '') {
        setError(passwordSignUp, 'm???t kh???u kh??ng ???????c ????? tr???ng');
        successPassword = false;
    } else if (passwordSignUpValue.length < 8 ) {
        setError(passwordSignUp, 'm???t kh???u ph???i c?? ??t nh???t 8 k?? t???');
        successPassword = false;
    }
     else {
        setSuccess(passwordSignUp);
        successPassword = true;

    }

    let successPasswordConfirmation = false;
    if(confirmPasswordSignUpValue === '') {
        setError(confirmPasswordSignUp, 'vui l??ng x??c nh???n m???t kh???u');
        successPasswordConfirmation = false;

    } else if (confirmPasswordSignUpValue !== passwordSignUpValue) {
        setError(confirmPasswordSignUp, "m???t kh???u kh??ng ????ng");
        successPasswordConfirmation = false;

    } else {
        setSuccess(confirmPasswordSignUp);
        successPasswordConfirmation = true;

    }

    return successEmail && successPassword && successPasswordConfirmation;
};

const checkData = () => {
    var emailSignInValue = emailSignIn.value.trim();
    var passwordSignInValue = passwordSignIn.value.trim();

    var getEmail = localStorage.getItem('userEmail');
    var getPassword = localStorage.getItem('userPassword');

    if(emailSignInValue === '') {
        setError(emailSignIn, 'Vui l??ng nh???p Email !');
        localStorage.setItem('login_success', false)

    }else if(emailSignInValue !== getEmail) {
        setError(emailSignIn, 'Email kh??ng ????ng !');
        localStorage.setItem('login_success', false)

    }else if (emailSignInValue == getEmail) {
        setSuccess(emailSignIn);
        if (passwordSignInValue == getPassword) {
            setSuccess(passwordSignIn);
            localStorage.setItem('login_success', true)
        
            document.getElementById('has-user').style.display = 'block';
            document.getElementById('no-user').style.display = 'none';
            document.location.reload();
        }else {
            setError(passwordSignIn,'M???t kh???u kh??ng ????ng !')
            localStorage.setItem('login_success', false)
        }
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