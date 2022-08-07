

// MATHOD-2: Using DOM Event Handler and Crete Function

function getInputValue(inputId) {
    const InputField = document.getElementById(inputId);
    const InputAmountText = InputField.value;
    const amountValue = parseFloat(InputAmountText);

    //clear deposit input field
    InputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {

    const totalElement = document.getElementById(totalFieldId)
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;

}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {

        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount
    }
}


//handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {

    const newDepositAmount = getInputValue('deposit-input');

    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
})

// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const newWithdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);

    }

    if (newWithdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what in your account')
    }

})

/* 
METHOD-1: Manually DOM Event Creation

//handle deposit button event

document.getElementById('deposit-btn').addEventListener('click', function () {

    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmonutText = depositInput.value;
    const newDepositAmount = parseFloat(newdepositAmonutText);


    const depositTotal = document.getElementById('deposit-total')
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount; depositTotal.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalaneTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalaneTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear deposit input field
    depositInput.value = '';

})

// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    console.log(newWithdrawAmount);


    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //clear withdraw input
    withdrawInput.value = '';

    // set withdraw and balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    previousBalanceTotal = parseFloat(previousBalanceText)
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

}) */



