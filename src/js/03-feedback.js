var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onListenForm, 600));
form.addEventListener('submit', onPressButton);

const STORAGE_KEY = "feedback-form-state"; //? для покращення коду
let formData = {}; //? створюю пустий обєкт, щоб потім додати туди значення

insertForm();

function onListenForm(e) {
    formData.email = form.elements.email.value; //? зчитую значення в інпуті
    formData.message = form.elements.message.value; //? зчитую значення в текстареа
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); //? записую дані в память, строкою
}

function onPressButton (e) {
    e.preventDefault();

    console.log(formData); //? виводить введене після відправки
    e.currentTarget.reset(); //? очищує поля після відправки
    localStorage.removeItem(STORAGE_KEY) //? очишує дані з сховища при відправці
}

function insertForm() {
    const saveFormData = localStorage.getItem(STORAGE_KEY); //? достаю дані з пам'яті
    const parceSaveFormData = JSON.parse(saveFormData); //? роблю з даних об'єкт
    
    //? записую дані в поля
    if (saveFormData) {
        form.elements.message.value = parceSaveFormData.message;
        form.elements.email.value = parceSaveFormData.email;
    }
}