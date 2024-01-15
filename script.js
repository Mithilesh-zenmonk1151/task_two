


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = {
     
        email: email,
        password: password
    };

    saveFormData(formData);
});

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
}