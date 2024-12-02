let currentInput = "";

function appendValue(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
    updateDisplay();
}
function clearDisplay(){
    currentInput='';
    document.getElementById('display').value = currentInput;
}
function erase() {
    currentInput=currentInput.slice(0,-1);
    document.getElementById('display').value = currentInput;
    updateDisplay();
}
function updateDisplay() {
    const display = document.getElementById('display');
            display.innerText = currentInput || "0"; 
}

function equalsto(){
    var result=document.getElementById('display').value;
    document.getElementById('display').value=eval(result);
}