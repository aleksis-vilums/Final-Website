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

    budget.onchange = function() {
        let everything = [document.getElementById("cell1"), document.getElementById("cell2"), document.getElementById("cell3"), document.getElementById("cell4"), document.getElementById("cell5"), document.getElementById("cell6"), document.getElementById("cell7"), document.getElementById("cell8"), document.getElementById("cell9"), document.getElementById("cell10"), document.getElementById("cell11"), document.getElementById("cell12"), document.getElementById("cell13"), document.getElementById("cell14"), document.getElementById("cell15"), document.getElementById("cell16"), document.getElementById("cell17"), document.getElementById("cell18"), document.getElementById("cell19"), document.getElementById("cell20"), document.getElementById("cell21"), document.getElementById("cell22"), document.getElementById("cell23"), document.getElementById("cell24"), document.getElementById("cell25"), document.getElementById("cell26"), document.getElementById("cell27"), document.getElementById("cell28"), document.getElementById("cell29"), document.getElementById("cell30"), document.getElementById("cell31"), document.getElementById("cell32"), document.getElementById("cell33"), document.getElementById("cell34"), document.getElementById("cell35"), document.getElementById("cell36"), document.getElementById("cell37"), document.getElementById("cell38"), document.getElementById("cell39"), document.getElementById("cell40"), document.getElementById("cell41"), document.getElementById("cell42"), document.getElementById("cell43"), document.getElementById("cell44"), document.getElementById("cell45"), document.getElementById("cell46"), document.getElementById("cell47"), document.getElementById("cell48")];
        for (let i = 0; i < everything.length; i++) {
            if (everything[i].style.display == "none") {
                everything[i].style.display = "block";
            }
        }
    }

    budget.onclick = function () {
        if (budget.value == 1000){
            let thousand = [document.getElementById("cell2"), document.getElementById("cell10"), document.getElementById("cell18"), document.getElementById("cell26"), document.getElementById("cell34"), document.getElementById("cell42"), document.getElementById("cell3"), document.getElementById("cell4"), document.getElementById("cell5"), document.getElementById("cell6"), document.getElementById("cell7"), document.getElementById("cell8"), document.getElementById("cell11"), document.getElementById("cell12"), document.getElementById("cell13"), document.getElementById("cell14"), document.getElementById("cell15"), document.getElementById("cell16"), document.getElementById("cell19"), document.getElementById("cell20"), document.getElementById("cell21"), document.getElementById("cell22"), document.getElementById("cell23"), document.getElementById("cell24"), document.getElementById("cell27"), document.getElementById("cell28"), document.getElementById("cell29"), document.getElementById("cell30"), document.getElementById("cell31"), document.getElementById("cell32"), document.getElementById("cell35"), document.getElementById("cell36"), document.getElementById("cell37"), document.getElementById("cell38"), document.getElementById("cell39"), document.getElementById("cell40"), document.getElementById("cell43"), document.getElementById("cell44"), document.getElementById("cell45"), document.getElementById("cell46"), document.getElementById("cell47"), document.getElementById("cell48")];
            for (let i = 0; i < thousand.length; i++)  {
                if (thousand[i].style.display == "none") {
                    thousand[i].style.display = "block";
                } else {
                    thousand[i].style.display = "none";
                }
            }
        }
        if (budget.value == 900) {
            let ninehundred = [document.getElementById("cell1"), document.getElementById("cell3"), document.getElementById("cell4"), document.getElementById("cell5"), document.getElementById("cell6"), document.getElementById("cell7"), document.getElementById("cell8"), document.getElementById("cell9"), document.getElementById("cell11"), document.getElementById("cell12"), document.getElementById("cell13"), document.getElementById("cell14"), document.getElementById("cell15"), document.getElementById("cell16"), document.getElementById("cell17"), document.getElementById("cell19"), document.getElementById("cell20"), document.getElementById("cell21"), document.getElementById("cell22"), document.getElementById("cell23"), document.getElementById("cell24"), document.getElementById("cell25"), document.getElementById("cell27"), document.getElementById("cell28"), document.getElementById("cell29"), document.getElementById("cell30"), document.getElementById("cell31"), document.getElementById("cell32"), document.getElementById("cell33"), document.getElementById("cell35"), document.getElementById("cell36"), document.getElementById("cell37"), document.getElementById("cell38"), document.getElementById("cell39"), document.getElementById("cell40"), document.getElementById("cell41"), document.getElementById("cell43"), document.getElementById("cell44"), document.getElementById("cell45"), document.getElementById("cell46"), document.getElementById("cell47"), document.getElementById("cell48")];
            for (let i = 0; i < ninehundred.length; i++)  {
                if (ninehundred[i].style.display == "none") {
                    ninehundred[i].style.display = "block";
                } else {
                    ninehundred[i].style.display = "none";
                }
            }
        }
        if (budget.value == 800){
            let eighthundred = [document.getElementById("cell1"), document.getElementById("cell2"), document.getElementById("cell4"), document.getElementById("cell5"), document.getElementById("cell6"), document.getElementById("cell7"), document.getElementById("cell8"), document.getElementById("cell9"), document.getElementById("cell10"), document.getElementById("cell12"), document.getElementById("cell13"), document.getElementById("cell14"), document.getElementById("cell15"), document.getElementById("cell16"), document.getElementById("cell17"), document.getElementById("cell18"), document.getElementById("cell20"), document.getElementById("cell21"), document.getElementById("cell22"), document.getElementById("cell23"), document.getElementById("cell24"), document.getElementById("cell25"), document.getElementById("cell26"), document.getElementById("cell28"), document.getElementById("cell29"), document.getElementById("cell30"), document.getElementById("cell31"), document.getElementById("cell32"), document.getElementById("cell33"), document.getElementById("cell34"), document.getElementById("cell36"), document.getElementById("cell37"), document.getElementById("cell38"), document.getElementById("cell39"), document.getElementById("cell40"), document.getElementById("cell41"), document.getElementById("cell42"), document.getElementById("cell44"), document.getElementById("cell45"), document.getElementById("cell46"), document.getElementById("cell47"), document.getElementById("cell48")];
            for (let i = 0; i < eighthundred.length; i++)  {
                if (eighthundred[i].style.display == "none") {
                    eighthundred[i].style.display = "block";
                } else {
                    eighthundred[i].style.display = "none";
                }
            }
        }
        if (budget.value == 700){
            let sevenhundred = [document.getElementById("cell1"), document.getElementById("cell2"), document.getElementById("cell3"), document.getElementById("cell5"), document.getElementById("cell6"), document.getElementById("cell7"), document.getElementById("cell8"), document.getElementById("cell9"), document.getElementById("cell10"), document.getElementById("cell11"), document.getElementById("cell13"), document.getElementById("cell14"), document.getElementById("cell15"), document.getElementById("cell16"), document.getElementById("cell17"), document.getElementById("cell18"), document.getElementById("cell19"), document.getElementById("cell21"), document.getElementById("cell22"), document.getElementById("cell23"), document.getElementById("cell24"), document.getElementById("cell25"), document.getElementById("cell26"), document.getElementById("cell27"), document.getElementById("cell29"), document.getElementById("cell30"), document.getElementById("cell31"), document.getElementById("cell32"), document.getElementById("cell33"), document.getElementById("cell34"), document.getElementById("cell35"), document.getElementById("cell37"), document.getElementById("cell38"), document.getElementById("cell39"), document.getElementById("cell40"), document.getElementById("cell41"), document.getElementById("cell42"), document.getElementById("cell43"), document.getElementById("cell45"), document.getElementById("cell46"), document.getElementById("cell47"), document.getElementById("cell48")];
            for (let i = 0; i < sevenhundred.length; i++){
                if (sevenhundred[i].style.display == "none"){
                    sevenhundred[i].style.display = "block";
                } else {
                    sevenhundred[i].style.display = "none"
                }
            }
        }
        if (budget.value == 600){
            let sixhundred = [document.getElementById("cell1"), document.getElementById("cell2"), document.getElementById("cell3"), document.getElementById("cell4"), document.getElementById("cell6"), document.getElementById("cell7"), document.getElementById("cell8"), document.getElementById("cell9"), document.getElementById("cell10"), document.getElementById("cell11"), document.getElementById("cell12"), document.getElementById("cell14"), document.getElementById("cell15"), document.getElementById("cell16"), document.getElementById("cell17"), document.getElementById("cell18"), document.getElementById("cell19"), document.getElementById("cell20"), document.getElementById("cell22"), document.getElementById("cell23"), document.getElementById("cell24"), document.getElementById("cell25"), document.getElementById("cell26"), document.getElementById("cell27"), document.getElementById("cell28"), document.getElementById("cell30"), document.getElementById("cell31"), document.getElementById("cell32"), document.getElementById("cell33"), document.getElementById("cell34"), document.getElementById("cell35"), document.getElementById("cell36"), document.getElementById("cell38"), document.getElementById("cell39"), document.getElementById("cell40"), document.getElementById("cell41"), document.getElementById("cell42"), document.getElementById("cell43"), document.getElementById("cell44"), document.getElementById("cell46"), document.getElementById("cell47"), document.getElementById("cell48")];
            for (let i = 0; i < sixhundred.length; i++)  {
                if (sixhundred[i].style.display == "none") {
                    sixhundred[i].style.display = "block";
                } else {
                    sixhundred[i].style.display = "none";
                }
            }
        }
        if (budget.value == 500){
            let fivehundred = [document.getElementById("cell1"), document.getElementById("cell2"), document.getElementById("cell3"), document.getElementById("cell4"), document.getElementById("cell5"), document.getElementById("cell7"), document.getElementById("cell8"), document.getElementById("cell9"), document.getElementById("cell10"), document.getElementById("cell11"), document.getElementById("cell12"), document.getElementById("cell13"), document.getElementById("cell15"), document.getElementById("cell16"), document.getElementById("cell17"), document.getElementById("cell18"), document.getElementById("cell19"), document.getElementById("cell20"), document.getElementById("cell21"), document.getElementById("cell23"), document.getElementById("cell24"), document.getElementById("cell25"), document.getElementById("cell26"), document.getElementById("cell27"), document.getElementById("cell28"), document.getElementById("cell29"), document.getElementById("cell31"), document.getElementById("cell32"), document.getElementById("cell33"), document.getElementById("cell34"), document.getElementById("cell35"), document.getElementById("cell36"), document.getElementById("cell37"), document.getElementById("cell39"), document.getElementById("cell40"), document.getElementById("cell41"), document.getElementById("cell42"), document.getElementById("cell43"), document.getElementById("cell44"), document.getElementById("cell45"), document.getElementById("cell47"), document.getElementById("cell48")];
            for (let i = 0; i < fivehundred.length; i++)  {
                if (fivehundred[i].style.display == "none") {
                    fivehundred[i].style.display = "block";
                } else {
                    fivehundred[i].style.display = "none";
                }
            }
        }
        if (budget.value == 400){
            let fourhundred = [document.getElementById("cell1"), document.getElementById("cell2"), document.getElementById("cell3"), document.getElementById("cell4"), document.getElementById("cell5"), document.getElementById("cell6"), document.getElementById("cell8"), document.getElementById("cell9"), document.getElementById("cell10"), document.getElementById("cell11"), document.getElementById("cell12"), document.getElementById("cell13"), document.getElementById("cell14"), document.getElementById("cell16"), document.getElementById("cell17"), document.getElementById("cell18"), document.getElementById("cell19"), document.getElementById("cell20"), document.getElementById("cell21"), document.getElementById("cell22"), document.getElementById("cell24"), document.getElementById("cell25"), document.getElementById("cell26"), document.getElementById("cell27"), document.getElementById("cell28"), document.getElementById("cell29"), document.getElementById("cell30"), document.getElementById("cell32"), document.getElementById("cell33"), document.getElementById("cell34"), document.getElementById("cell35"), document.getElementById("cell36"), document.getElementById("cell37"), document.getElementById("cell38"), document.getElementById("cell40"), document.getElementById("cell41"), document.getElementById("cell42"), document.getElementById("cell43"), document.getElementById("cell44"), document.getElementById("cell45"), document.getElementById("cell46"), document.getElementById("cell48")];
            for (let i = 0; i < fourhundred.length; i++)  {
                if (fourhundred[i].style.display == "none") {
                    fourhundred[i].style.display = "block";
                } else {
                    fourhundred[i].style.display = "none";
                }
            }
        }
        if (budget.value == 300){
            let threehundred = [document.getElementById("cell1"), document.getElementById("cell2"), document.getElementById("cell3"), document.getElementById("cell4"), document.getElementById("cell5"), document.getElementById("cell6"), document.getElementById("cell7"), document.getElementById("cell9"), document.getElementById("cell10"), document.getElementById("cell11"), document.getElementById("cell12"), document.getElementById("cell13"), document.getElementById("cell14"), document.getElementById("cell15"), document.getElementById("cell17"), document.getElementById("cell18"), document.getElementById("cell19"), document.getElementById("cell20"), document.getElementById("cell21"), document.getElementById("cell22"), document.getElementById("cell23"), document.getElementById("cell25"), document.getElementById("cell26"), document.getElementById("cell27"), document.getElementById("cell28"), document.getElementById("cell29"), document.getElementById("cell30"), document.getElementById("cell31"), document.getElementById("cell33"), document.getElementById("cell34"), document.getElementById("cell35"), document.getElementById("cell36"), document.getElementById("cell37"), document.getElementById("cell38"), document.getElementById("cell39"), document.getElementById("cell41"), document.getElementById("cell42"), document.getElementById("cell43"), document.getElementById("cell44"), document.getElementById("cell45"), document.getElementById("cell46"), document.getElementById("cell47")];
            for (let i = 0; i < threehundred.length; i++)  {
                if (threehundred[i].style.display == "none") {
                    threehundred[i].style.display = "block";
                } else {
                    threehundred[i].style.display = "none";
                }
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", ready);