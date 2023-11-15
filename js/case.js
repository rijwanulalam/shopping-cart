function increaseDecrease(inputId, isIncrease){
    const caseInputField = document.getElementById(inputId);
    const caseNumber = parseInt(caseInputField.value);

    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = caseNumber + 1;
    }
    else{
        newCaseNumber = caseNumber - 1;
    }
    caseInputField.value = newCaseNumber;
    return newCaseNumber;
}


function calculatePrice(priceId ,newCaseNumber){
    const casePrice = document.getElementById(priceId);
    const newCasePrice = newCaseNumber * 59;
    casePrice.innerText = newCasePrice;
}


document.getElementById("case-number-plus").addEventListener("click", function(){
    
    const newCaseNumber =  increaseDecrease("case-number-field",true);
    calculatePrice("case-price", newCaseNumber);
})

document.getElementById("case-number-minus").addEventListener("click", function(){
    
    const newCaseNumber =  increaseDecrease("case-number-field",false);
    calculatePrice("case-price", newCaseNumber);
})