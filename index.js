const textfield = document.querySelector(".inputfield");
const textfieldLabel = document.querySelector(".label-container");
const button = document.querySelector(".button");

const classForLabelContainer = "label-container label-container--error";
const classForLabelContainerError = "label-container label-container--error";

const classForInputField = "inputfield"
const classForInputFieldError = "inputfield inputfield--error"

var error = null;

textfield.addEventListener("input", function (e) {
    error = null;
    textfield.className = classForInputField
    textfieldLabel.className = classForLabelContainer
    var element = document.getElementById("error")

    if (element == null || element == undefined) return;
    textfieldLabel.removeChild(element)
});

function addError(error) {
    error = error;
    textfield.className = classForInputFieldError
    textfieldLabel.className = classForLabelContainerError
    const possibleElement = document.getElementById("error");
    if (!(possibleElement == null || possibleElement == undefined)) {
        return;
    }

    var element = document.createElement("p");
    element.id = "error"
    element.innerHTML = error;
    textfieldLabel.appendChild(element)

}

button.addEventListener("click", function () {

    if (textfield.value == "") {
        addError("Email can't be empty")
        return;
    } else if (!textfield.value.includes("@")) {
        addError("Email is invalid")
        return;
    }
    window.location = "pages/success.html?email=" + textfield.value;
});
