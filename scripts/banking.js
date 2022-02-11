function getTotal() {
  const depositInput = document.getElementById('deposit-input');
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);
  depositInput.value = '';
  return depositAmount;
}

// for deposit button / section 
document.getElementById('deposit-btn').addEventListener('click', function () {
  // const depositInput = document.getElementById('deposit-input');
  // const depositAmount = depositInput.value;
  const dipositAmount = getTotal();
  const depositTotal = document.getElementById('deposit-total');
  const previousDepositTotal = depositTotal.innerText;
  depositTotal.innerText = parseFloat(previousDepositTotal) + dipositAmount;
  // updating balance total 
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceAmount = balanceTotal.innerText;
  balanceTotal.innerText = parseFloat(previousBalanceAmount) + dipositAmount;
  // clearing input value 
})

// for withdraw button / section 
document.getElementById('withdraw-btn').addEventListener('click', function () {
  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawAmount = withdrawInput.value;
  const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawTotal = withdrawTotal.innerText;
  withdrawTotal.innerText = parseFloat(previousWithdrawTotal) + parseFloat(withdrawAmount);
  // updating balance total 
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceAmount = balanceTotal.innerText;
  balanceTotal.innerText = parseFloat(previousBalanceAmount) - parseFloat(withdrawAmount);
  // clearing input field 
  withdrawInput.value = '';
})
