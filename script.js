let displayValue = '';

function d(val) {
  displayValue += val;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function cal() {
  let result;
  try {
    result = eval(displayValue);
  } catch (error) {
    result = 'Error';
  }
  displayValue = result.toString();
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}
