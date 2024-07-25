let display = document.getElementById('display');
const appendToDisplay = (num) => {
    display.value += num;
}
const calculateDisplay = () => {
    try {
        display.value = eval(display.value);
    } catch (err) {
        display.value = err;
    }
}

const clearDisplay = () => {
    display.value = "";
}

const backSpace = () => {
    let displaylastIndex = display.value.length - 1;
    let slice = display.value.slice(0, displaylastIndex);
    display.value = slice;
}