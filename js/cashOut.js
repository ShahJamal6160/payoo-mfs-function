document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // console.log('inside the click hendler')
        
        const cashOut = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-cash-out-pin')
        // console.log('inside the click hendler', cashOut, pinNumber);

        if(isNaN(cashOut)){
            alert('Failed To add Money');
            return;
        }
        

        if(pinNumber === 1234){
            const balance = getTextFieldVlueId('account-balance')
            // console.log(balance);
            const newBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;

            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
                <h4 class ="text-2xl font-bold">cash out </h4>
                <p>${cashOut} withdraw, new balance ${newBalance}</p>            
            `
            document.getElementById('transection-container').appendChild(div);
        }
        else{
            alert('no money for u')
        }
        
    })