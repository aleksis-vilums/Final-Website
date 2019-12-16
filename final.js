document.body.style.background = "mistyrose";

function ready() {
    let budget = document.getElementById('budget');

    function getSelectedOption(budget) {
        let opt;
        for ( let i = 0, len = budget.options.length; i < len; i++ ) {
            opt = budget.options[i];
            if ( opt.selected == true ) {
                break;
            }
        }
        return opt;
    }

    document.getElementById("budget").onchange = function () {
        if (budget.value == 500){
            let element = document.getElementById('thousand');
            element.parentNode.removeChild(element);
        }
    }
}

document.addEventListener("DOMContentLoaded", ready);