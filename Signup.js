document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const termsError = document.getElementById('termsError');

    let isValid = true;

    if (firstName.trim() === '') {
        firstNameError.textContent = 'يجب إدخال الاسم الأول';
        isValid = false;
    } else {
        firstNameError.textContent = '';
    }


    if (lastName.trim() === '') {
        lastNameError.textContent = 'يجب إدخال الاسم الأخير';
        isValid = false;
    } else {
        lastNameError.textContent = '';
    }

    if (!validateEmail(email)) {
        emailError.textContent = 'البريد الإلكتروني غير صحيح';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (password.length < 6) {
        passwordError.textContent = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

   
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'كلمة المرور غير متطابقة';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    if (!terms) {
        termsError.textContent = 'يجب الموافقة على الشروط والأحكام';
        isValid = false;
    } else {
        termsError.textContent = '';
    }

    if (isValid) {
        
        const userData = {
            firstName,
            lastName,
            email,
            password
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('تم التسجيل بنجاح!');
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showTermsModal() {
    document.getElementById('termsModal').style.display = 'block';
}

function closeTermsModal() {
    document.getElementById('termsModal').style.display = 'none';
}