
function calculateCasePrice(priceId ,newCaseNumber){
    const casePrice = document.getElementById(priceId);
    const newCasePrice = newCaseNumber * 59;
    casePrice.innerText = newCasePrice;
}


document.getElementById("case-number-plus").addEventListener("click", function(){
    
    const newCaseNumber =  increaseDecrease("case-number-field",true);
    calculateCasePrice("case-price", newCaseNumber);

    // calculate subtotal
    const currentTotalPhonePrice = calculateTotalPrice("phone-price");
    const currentTotalCasePrice = calculateTotalPrice("case-price");

    const getsubtotal = subtotalPrice("subtotal", currentTotalPhonePrice, currentTotalCasePrice);

    const taxAmount = taxAmountTotal(getsubtotal);

    const newTotalPrice = getsubtotal + taxAmount;
    CalculateNewTotalPrice(newTotalPrice);
})

document.getElementById("case-number-minus").addEventListener("click", function(){
    
    const newCaseNumber =  increaseDecrease("case-number-field",false);
    calculateCasePrice("case-price", newCaseNumber);

    // calculate subtotal
    const currentTotalPhonePrice = calculateTotalPrice("phone-price");
    const currentTotalCasePrice = calculateTotalPrice("case-price");
    
    
    const getsubtotal = subtotalPrice("subtotal", currentTotalPhonePrice, currentTotalCasePrice);
    // tax
    const taxAmount = taxAmountTotal(getsubtotal);
    // total
    const newTotalPrice = getsubtotal + taxAmount;
    CalculateNewTotalPrice(newTotalPrice);
})

document.getElementById("remove-case").addEventListener("click", function(){
    
    // const casePriceString = document.getElementById("case-price").innerText;
    // const casePrice = parseFloat(casePriceString);

    // const subtotal = document.getElementById("subtotal");
    // const subtotalString = subtotal.innerText;
    // const subtotalAmount = parseFloat(subtotalString);

    // const newSubtotal = subtotalAmount - casePrice;
    // subtotal.innerText = newSubtotal;

    // const tax = document.getElementById("tax-amount");
    // const taxString = tax.innerText;
    // const taxAmount = parseFloat(taxString);
    // const newTax = parseFloat((newSubtotal * 0.1).toFixed(2));
    // tax.innerText = newTax;

    // const totalAmount = document.getElementById("total-amount");
    // const totalAmountString = totalAmount.innerText;
    // const newTotalAmount = newSubtotal + newTax;
    // totalAmount.innerText = newTotalAmount;

    removeItem("case-card");
})