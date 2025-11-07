const tempDisplay = document.querySelector('#temp'); // selecting 
const resultDisplay = document.querySelector('#result'); // selecting
let tempInput = "0";

// rendering function
const _reRender = () => {
    tempDisplay.innerText = tempInput;
}
// render by default
_reRender();

const handleButtonPress = (input) => {
    const displayText = tempDisplay.innerText;
    if(displayText === "0") {
        tempInput = +input;
        _reRender();
        return;
    } 

    tempInput = displayText + input;
    _reRender();
};

const calculateResult = () => {
    resultDisplay.textContent = eval(tempInput);
}

const deleteLast = () => {
    tempInput = tempInput.slice(0, -1);
    if(tempInput === '') tempInput = '0';
    _reRender();
}

const clearAll = () => {
    tempInput = '0';
    _reRender();
}

const handleSquareRoot = () => {
    const value = eval(tempInput); 
    if (value < 0) {
        resultDisplay.textContent = "error";  
    } else {
        const sqrtValue = Math.sqrt(value); 
        tempInput = sqrtValue.toString();
        _reRender();
    }
};