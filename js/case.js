// Inrement
document.getElementById('caseIncrement').addEventListener('click', function () {

    const cNumber = updateInputValue('caseInput', true);
    const defaultCasePrice = updatePrice('casePriceId', cNumber, 59);
    const phonePrice = getTotalValue('phonePriceId');

    // Sub Total
    const subTotal = defaultCasePrice + phonePrice;
    setCalcuteValue('subTotal', subTotal);

    // Tax
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    setCalcuteValue('taxId', tax);

    // Total
    const total = subTotal + tax;
    setCalcuteValue('totalId', total);

});


// Decrement
document.getElementById('caseDecrement').addEventListener('click', function () {

    const cNumber = updateInputValue('caseInput', false);
    const defaultCasePrice = updatePrice('casePriceId', cNumber, 59);
    const phonePrice = getTotalValue('phonePriceId');

    // Sub Total
    const subTotal = defaultCasePrice + phonePrice;
    setCalcuteValue('subTotal', subTotal);

    // Tax
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    setCalcuteValue('taxId', tax);

    // Total
    const total = subTotal + tax;
    setCalcuteValue('totalId', total);

});