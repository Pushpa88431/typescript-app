var displayValue = "";
function inputNumber(num) {
    displayValue += num;
    updateDisplay();
}
function inputOperator(operator) {
    displayValue += operator;
    updateDisplay();
}
function calculateResult() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    }
    catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}
function clearDisplay() {
    displayValue = "";
    updateDisplay();
}
function updateDisplay() {
    var display = document.getElementById("display");
    display.value = displayValue;
}
