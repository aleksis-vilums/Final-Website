document.body.style.background = "mistyrose";

function ready() {
    let price = document.getElementByName("budget")[0].value;
    if (price.value == "1000"){
        console.log("Clicked")
    }
}

document.addEventListener("DOMContentLoaded", ready);