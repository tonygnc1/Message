const output = document.querySelector('.output');
const input = document.querySelector('input')
const button = document.querySelector('button');
console.log('button');
button.addEventListener('click', showMessage);
function showMessage() {
    output.innerHTML = '<h1> Hello and welcome '+input.value+'</h1>';
}
