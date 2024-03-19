let displayValue: string = "";

function inputNumber(num: number): void {
  displayValue += num;
  updateDisplay();
}

function inputOperator(operator: string): void {
  displayValue += operator;
  updateDisplay();
}

function calculateResult(): void {
  try {
    displayValue = eval(displayValue);
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function clearDisplay(): void {
  displayValue = "";
  updateDisplay();
}

function updateDisplay(): void {
  const display = document.getElementById("display") as HTMLInputElement;
  display.value = displayValue;
}
