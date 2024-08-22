const textInput = document.querySelector('#name-input');

const output = document.querySelector('#name-output');


textInput.addEventListener("input", (event) => {
    const inputText = event.currentTarget.value.trim();
     output.textContent = inputText === '' ? 'Anonymous' : inputText;
});

