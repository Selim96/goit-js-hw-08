import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const { email, message } = form;
const storageElem = JSON.parse(localStorage.getItem("feedback-form-state"));
console.log(storageElem);

email.value = storageElem ? storageElem.email : "";
message.value = storageElem ? storageElem.message : "";

function inputFunction(event) {
    const {
        elements: {email, message}
    } = event.currentTarget;
    // const { name, value } = event.target;
    
    // const data = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
    const object = {
        email: email.value,
        message: message.value,
        // ...data, [name]: value,
    }
    
    localStorage.setItem("feedback-form-state", JSON.stringify(object));
};

function submitFunction(event) {
    event.preventDefault();
    const {
        elements: { email, message }
    } = event.currentTarget;
    
    if (email.value === "" || message.value === "") {
        return alert("Please fill in all the fields!");
    }
    console.log(`Email: ${email.value}, Message: ${message.value}`);
    event.currentTarget.reset();
    localStorage.clear();
}

form.addEventListener("input", throttle(inputFunction, 500));

form.addEventListener("submit", submitFunction);
