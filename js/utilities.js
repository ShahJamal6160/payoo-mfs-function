//common shared function here

// console.log('utilities loaded')

// function getInputFieldValueById(){
//     // console.log('get input');
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
// }

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}