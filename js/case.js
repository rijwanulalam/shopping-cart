
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
    const taxAmount = taxAmountTotal(getsubtotal);

    const newTotalPrice = getsubtotal + taxAmount;
    CalculateNewTotalPrice(newTotalPrice);
})

document.getElementById("remove-case").addEventListener("click", function(){
    removeItem("case-card");
})