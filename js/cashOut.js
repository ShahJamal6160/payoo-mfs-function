document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // console.log('inside the click hendler')
        
        const cashOut = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-cash-out-pin')
        // console.log('inside the click hendler', cashOut, pinNumber);

        if(pinNumber === 1234){
            const balance = getTextFieldVlueId('account-balance')
            // console.log(balance);
            const newBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('no money for u')
        }
        
    })