// Increment
document.getElementById('phoneIncrement').addEventListener('click', function () {

    const pNumber = updateInputValue('phoneInput', true);
    const defaultPhonePrice = updatePrice('phonePriceId', pNumber, 1250);
    const casePrice = getTotalValue('casePriceId');

    // Sub Total
    const subTotal = defaultPhonePrice + casePrice;
    setCalcuteValue('subTotal', subTotal);

    // Tax
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    setCalcuteValue('taxId', tax);

    // Total
    const total = subTotal + tax;
    setCalcuteValue('totalId', total);
});


// Decrement
document.getElementById('phoneDecrement').addEventListener('click', function () {

    const pNumber = updateInputValue('phoneInput', false);
    const defaultPhonePrice = updatePrice('phonePriceId', pNumber, 1250);

    const casePrice = getTotalValue('casePriceId');
    const subTotal = defaultPhonePrice + casePrice;

    // Sub Total
    setCalcuteValue('subTotal', subTotal);

    // Tax
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    setCalcuteValue('taxId', tax);

    // Total
    const total = subTotal + tax;
    setCalcuteValue('totalId', total);

});