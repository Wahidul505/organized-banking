function getInputValue(inputId) {
  const depositInput = document.getElementById(inputId);
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);
  depositInput.value = '';
  return depositAmount;
}
function updateTotalAmount(totalId, amount) {
  const total = document.getElementById(totalId);
  const previousTotalText = total.innerText;
  const previousTotal = parseFloat(previousTotalText);
  total.innerText = previousTotal + amount;
}
function getPreviousBalanceAmount() {
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceAmountText = balanceTotal.innerText;
  const previousBalanceAmount = parseFloat(previousBalanceAmountText);
  return previousBalanceAmount;
}
function updateTotalBalance(amount, isAdd) {
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceAmount = getPreviousBalanceAmount();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceAmount + amount;
  }
  else if (isAdd == false) {
    balanceTotal.innerText = previousBalanceAmount - amount;
  }
}
document.getElementById('deposit-btn').addEventListener('click', function () {
  const dipositAmount = getInputValue('deposit-input');
  if (dipositAmount > 0) {
    updateTotalAmount('deposit-total', dipositAmount);
    updateTotalBalance(dipositAmount, true);
  }
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
  const withdrawAmount = getInputValue('withdraw-input');
  const previousBalanceAmount = getPreviousBalanceAmount();
  if (withdrawAmount > 0 && withdrawAmount <= previousBalanceAmount) {
    updateTotalAmount('withdraw-total', withdrawAmount);
    updateTotalBalance(withdrawAmount, false);
  }
})
