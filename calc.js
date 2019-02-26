"use strict";

let result = "";
let displayString = "";

/**
 * Main function to track button clicks in calculator.
 */
$(document).ready(function() {
    $(".btn").click(function() {
        let clickedValue = $(this).val();
        displayString += clickedValue;
        $("#answerDisplay").val(displayString);
        if (clickedValue === "=") {
            calcResult(displayString);
        }
        else if (clickedValue === "CA") {
            $("#answerDisplay").val("0");
            $("#error").text("");
            result = "";
            displayString = "";
        }
    });
});

/**
 * Uses eval() to calculate given input. Try/Catch keeps the result clean.
 * After evaluating the result, sets default values ("") for both result and
 * displayString. Highlights error to user if eval() fails.
 * @param {string} res - Input string from the calc.
 */
function calcResult(res) {
    try {
        result = eval(res.slice(0, res.length-1));
    }catch(e) {
        console.log(e);
        $("#error").text("Error > " + e);
    }
    $("#answerDisplay").val(result);
    result = "";
    displayString = "";
}

/**
 * Simple function to check is the given number valid. 
 * !Not used in this implementation.
 * @param {*} n - Given input as a number.
 */
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}