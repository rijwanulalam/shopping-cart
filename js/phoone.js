function calculatePhonePrice(inputId, newPhoneNumber){
    const phonePrice = document.getElementById(inputId);
    const newPhonePrice = newPhoneNumber * 1219;
    phonePrice.innerText = newPhonePrice;
}


document.getElementById("phone-number-plus").addEventListener("click", function(){
    const newPhoneNumber = increaseDecrease("phone-number-field", true);
    calculatePhonePrice("phone-price", newPhoneNumber);

    // calculate subtotal
    const currentTotalPhonePrice = calculateTotalPrice("phone-price");
    const currentTotalCasePrice = calculateTotalPrice("case-price");

    const getsubtotal = subtotalPrice("subtotal", currentTotalPhonePrice, currentTotalCasePrice);

    const taxAmount = taxAmountTotal(getsubtotal);

    const newTotalPrice = getsubtotal + taxAmount;
    CalculateNewTotalPrice(newTotalPrice);


})

document.getElementById("phone-number-minus").addEventListener("click", function(){
    const newPhoneNumber = increaseDecrease("phone-number-field", false);
    calculatePhonePrice("phone-price", newPhoneNumber);

    // calculate subtotal
    const currentTotalPhonePrice = calculateTotalPrice("phone-price");
    const currentTotalCasePrice = calculateTotalPrice("case-price");

    const getsubtotal = subtotalPrice("subtotal", currentTotalPhonePrice, currentTotalCasePrice);

    const taxAmount = taxAmountTotal(getsubtotal);

    const newTotalPrice = getsubtotal + taxAmount;
    CalculateNewTotalPrice(newTotalPrice);
})

document.getElementById("remove-phone").addEventListener("click", function(){
    removeItem("phone-card");
})