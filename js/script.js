const sliderElement = document.querySelector('#slider')
const buttonElement = document.querySelector('#button')

const sizePassword = document.querySelector('#valor')
const password = document.querySelector('#password')

const containerPassword = document.querySelector('#container-password')

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYX1234567890!@#$%&*'
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = '';
    // O 'i' continuará passando pelo 'for', até que o 'i' seja menor que o tanto de caractere que o usuário selecionou 
    for(let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n)); 
    }
    novaSenha = pass;
    password.innerHTML = novaSenha;
}

function copyPassword() {
    const tempInput = document.createElement('input');
    tempInput.value = novaSenha;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert("Senha copiada com sucesso!");
}

buttonElement.addEventListener('click', function() {
    containerPassword.classList.remove('hide');
});