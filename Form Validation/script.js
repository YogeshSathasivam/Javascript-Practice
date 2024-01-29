function validateNumber(input) {
    let inputValue = input.value.toString();
    if (inputValue.length > 10) {
        input.value = inputValue.slice(0, 10);
    }
}
function show(fieldId, iconClass) {
    var x = document.getElementById(fieldId);
    var icon = document.querySelector(`.${iconClass}`);

    if (x.type === "password") {
        x.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        x.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}
function validate(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    var checkbox = document.getElementById('termsCheckbox');

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !number || !password || !confirm || !checkbox.checked) {
    alert("All fields are required.");
    } else {
    alert("Form submitted successfully!");
    }
}