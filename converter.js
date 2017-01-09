var celConversion;
var fahConversion;

function toCelsius () {
    var inputTempF = parseFloat(document.getElementById("userInput").value);
    celConversion = (inputTempF -= 32) * 5/9;
    converted.innerHTML = converted.innerHTML + "That temperature is " + celConversion + " degrees celsius!";
    return celConversion;
}

function toFahrenheit () {
    var inputTempC = parseFloat(document.getElementById("userInput").value);
    fahConversion = (inputTempC * 5/9);
    fahConversion = fahConversion += 32;
    converted.innerHTML = converted.innerHTML + "That temperature is " + fahConversion + " degrees fahrenheit!";
    return fahConversion;
}

// Determine which conversion is selected
function determineConverter() {
    if (document.getElementById("celsius").checked === true) {
        toCelsius();
        tempColor();
    }
    if (document.getElementById("fahrenheit").checked === true) {
        toFahrenheit();
        tempColor();
    }
}

//Refresh page when "Clear Input" button is clicked
function refreshPage(){
    window.location.reload();
}


//Font color based on temp.


function tempColor() {
    if (celConversion >= 32 || fahConversion >= 90) {
        var textColor = document.getElementById("converted").style.color = "#FF0000";
    } else if (celConversion <= 0 || fahConversion <= 32) {
        var textColor = document.getElementById("converted").style.color = "#0531FF";
    } else {
        var textColor = document.getElementById("converted").style.color = "#00FF1C";
    }
}

//Return key = "convert!" button click

//NOPE, TRY AGAIN
// document.getElementById("userInput").addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode == 13) {
//         document.getElementById("converter").click();
//     }
// });

//Works!!
document.getElementById('userInput').onkeypress=function(e){
    if(e.keyCode==13){
        e.preventDefault();
        var pressedEnter = document.getElementById('converter').click();
    }
}



