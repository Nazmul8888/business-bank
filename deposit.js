document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

//   add numbers to set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // set the total deposit 

    depositTotalElement.innerText = currentDepositTotal;

// step no-5

    const balanceTotalElement = document.getElementById('balance-total');
    // const previousBalanceTotalString = balanceTotalElement. innerText;
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    // balanceTotalElement.innerText = currentBalanceTotal;
    balanceTotalElement.innerText = currentBalanceTotal;





    // step-7
    depositField.value = '';

})