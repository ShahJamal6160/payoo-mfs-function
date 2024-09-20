function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNUmber = parseFloat(inputValue);
    
    return inputNUmber;
}

function getTextFieldVlueId (id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}