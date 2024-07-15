function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
    let display = document.getElementById('result');
    display.value += character;
}

function calculateResult() {
    let display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }
}