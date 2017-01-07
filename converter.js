function toCelsius () {
    var inputTempF = parseFloat(document.getElementById("userInput").value);
    var celConversion = (inputTempF -= 32) * 5/9;
    converted.innerHTML = converted.innerHTML + "That temperature is " + celConversion + " degrees celsius!";
    return celConversion;
}

function toFahrenheit () {
    var inputTempC = parseFloat(document.getElementById("userInput").value);
    var fahConversion = (inputTempC * 5/9);
    fahConversion = fahConversion += 32;
    converted.innerHTML = converted.innerHTML + "That temperature is " + fahConversion + " degrees fahrenheit!";
    return fahConversion;
}

// Determine which conversion is selected
function determineConverter() {
    if (document.getElementById("celsius").checked === true) {
        toCelsius();
    }
    if (document.getElementById("fahrenheit").checked === true) {
        toFahrenheit();
    }
}

//Refresh page when "Clear Input" button is clicked
function refreshPage(){
    window.location.reload();
}

//Font color based on temp.
// if (toCelsius() >= 32 || toFahrenheit() >= 90) {
//     document.getElementById(converted).style.color = "#FF0000";
// } else if (toCelsius() <= 0 || toFahrenheit() <= 32) {
//     document.getElementById(converted).style.color = "#0531FF";
// } else {
//     document.getElementById(converted).style.color = "#00FF1C";
// }






