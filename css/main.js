function calcAmount() {
   let price = 1000;
   let amountInput = document.querySelector("input[name='amount-input']");
   let showAmount = document.querySelector("span.show-amount");
   let amountNumber = parseInt(amountInput.value);

   if ( amountNumber > 10 ) {
      alert("Maximum 10 termék");
      return;
   } else if ( amountNumber < 1 ) {
      alert("Minimum 1 termék");
   } else {
      let amount = parseInt(amountInput.value) * price;
      showAmount.innerHTML = amount;
   }


}