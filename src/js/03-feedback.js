
const form = document.querySelector('.feedback-form');

form.addEventListener('input', onListenForm);
form.addEventListener('submit', onPressButton);

let formData = {};


function onListenForm(e) {
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
    // console.log(formData);
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}



function onPressButton (e) {
    e.preventDefault();

    e.currentTarget.reset(); //? очищує поля після відправки
    console.log(formData); //? виводить введене після відправки
}