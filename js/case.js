document.getElementById("case-number-plus").addEventListener("click", function(){
    const caseInputField = document.getElementById("case-number-field");
    const caseNumber = parseInt(caseInputField.value);
    const newCaseNumber = caseNumber + 1;
    caseInputField.value = newCaseNumber;
    
})

document.getElementById("case-number-minus").addEventListener("click", function(){
    const caseInputField = document.getElementById("case-number-field");
    const caseNumber = caseInputField.value;
    const newCaseNumber = caseNumber - 1;
    caseInputField.value = newCaseNumber;
})