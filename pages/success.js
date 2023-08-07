const span = document.querySelector("span");

var y = new URL(window.location);
var email  = y.searchParams.get("email") ?? "email@example.com";

span.innerHTML = email;

const x  = document.querySelector(".button")

x.addEventListener("click", function () {
    console.log("yo")
    window.location = "../index.html"
})