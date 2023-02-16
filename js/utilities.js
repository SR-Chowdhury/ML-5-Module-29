function updateInputValue(inputArgs, isTrue) {

    const inputId = document.getElementById(inputArgs);
    const inputIdStringValue = inputId.value;
    const inputIdIntValue = parseInt(inputIdStringValue);
    let newInput;
    if (isTrue) {
        newInput = inputIdIntValue + 1;
    }
    else {
        newInput = inputIdIntValue - 1;
        if(newInput < 0) {
            return;
        }
    }
    inputId.value = newInput;
    return newInput;

}

function updatePrice(priceId, n, fixedPrice) {

    if (n >= 0) {
        const priceElement = document.getElementById(priceId);
        const updatePrice = fixedPrice * n;
        priceElement.innerText = updatePrice;
        return updatePrice;
    }

}

function getTotalValue(elementId) {
    const elementField = document.getElementById(elementId).innerText;
    const totalAmount = parseInt(elementField);
    return totalAmount;
}

function setCalcuteValue(totalId, totalPrice) {
    if (totalPrice >= 0) {
        const setText = document.getElementById(totalId);
        setText.innerText = totalPrice;
    }
}


