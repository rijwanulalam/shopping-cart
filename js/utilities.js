function increaseDecrease(inputId, isIncrease) {
  const caseInputField = document.getElementById(inputId);
  const caseNumber = parseInt(caseInputField.value);

  let newNumber;
  if (isIncrease === true) {
    newNumber = caseNumber + 1;
  } else {
    newNumber = caseNumber - 1;
  }
  caseInputField.value = newNumber;
  return newNumber;
}

function removeItem(itemId) {
  const item = document.getElementById(itemId);
  item.style.display = "none";
}

function calculateTotalPrice(id) {
  const price = document.getElementById(id);
  const newPriceString = price.innerText;
  const currentPrice = parseInt(newPriceString);
  const currentTotalPrice = currentPrice;
  return currentTotalPrice;
}


function taxAmountTotal(getsubtotal){
    const tax = document.getElementById("tax-amount");
    const taxAmount = parseFloat((getsubtotal*0.1).toFixed(2));
    tax.innerText = taxAmount;
    return taxAmount;
}

function subtotalPrice(id, currentTotalPhonePrice, currentTotalCasePrice) {
  const subtotal = document.getElementById(id);
  const getsubtotal = currentTotalPhonePrice + currentTotalCasePrice;
  subtotal.innerText = getsubtotal;
  return getsubtotal;
}

function CalculateNewTotalPrice(newTotalPrice){
    const totalPrice = document.getElementById("total-amount");
    totalPrice.innerText = newTotalPrice;
    return newTotalPrice;
}

document.getElementById("checkout").addEventListener("click", function(){
    const checkoutAmountString = document.getElementById("total-amount").innerText;
    // const checkoutAmount = parseFloat(checkoutAmountString);
    alert("your total amount is : " + checkoutAmountString)
})



