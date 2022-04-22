var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onListenForm, 600));
form.addEventListener('submit', onPressButton);

const STORAGE_KEY = "feedback-form-state"; //? для покращення коду
let formData = {}; //? створюю пустий обєкт, щоб потім додати туди значення

insertForm();

function writeData() {
    //? функція для зчитування введених даних
    formData.email = form.elements.email.value; //? в інпуті
    formData.message = form.elements.message.value; //?  в текстареа
    
}

function onListenForm(e) {
    writeData()

    //? записую введені дані в память, строкою
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onPressButton (e) {
    e.preventDefault();

    writeData()

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