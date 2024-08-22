const form = document.querySelector('.login-form');

const handleFormSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (email === "" || password === "") {
        alert("All form fields must be filled in");
    } else {

        const data = {
            Email: email,
            Password: password
        };
        console.log(data);
        form.reset();
    }
}
form.addEventListener('submit', handleFormSubmit);