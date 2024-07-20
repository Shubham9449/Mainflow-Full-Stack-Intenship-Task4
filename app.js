let currentInput = '';

function appendToScreen(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function calculate(operator) {
    if(operator === '=') {
        try {
            currentInput = eval(currentInput);
            document.getElementById('result').value = currentInput;
        } catch (error) {
            document.getElementById('result').value = 'Error';
        }
    } else {
        currentInput += operator;
        document.getElementById('result').value = currentInput;
    }
}

function clearScreen() {
    currentInput = '';
    document.getElementById('result').value = '';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput;
}