document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money')
        // console.log('add Money inside addmoney2.js', addMoney);
        const pinNumber = getInputFieldValueById('input-pin-number');
        // console.log(pinNumber);

        if(pinNumber === 1234){
            const balance = getTextFieldVlueId('account-balance');
            // console.log(balance, addMoney);
            const newBalance = balance + addMoney;
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Failed to add money')
        }
    })