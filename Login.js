document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    if (!validateEmail(email)) {
        emailError.textContent = 'البريد الإلكتروني غير صحيح';
    } else {
        emailError.textContent = '';
    }

  
    if (password.length < 6) {
        passwordError.textContent = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    } else {
        passwordError.textContent = '';
    }

   
    if (validateEmail(email) && password.length >= 6) {
        alert('تم تسجيل الدخول بنجاح!');
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}