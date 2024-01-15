document.getElementById('contact-us').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const text_content = document.getElementById('text-area').value;
    console.log(name);
    console.log(email);
    console.log(text_content);

    const formData = {
     
        name: name,
        email: email,
        problem:text_content
    };

    saveFormData(formData);
});

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
}