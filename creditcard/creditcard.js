const correctNum = "1234123412341234";
let cardNumber = document.querySelector("creditCardNumber");
let errorMessage = '';

function throwError(message) {
	document.querySelector('.errors').textContent = message;
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';
	throwError('');

    let cardNumber = document.querySelector('#creditCardNumber');
    const cardNum = cardNumber.value.trim();
    // Check if it's numeric and valid in one go
    
    if (!/^\d{16}$/.test(cardNum)) {
        errorMsg += 'Card number must be 16 digits. ';
    } else if (cardNum!=correctNum) {
        errorMsg += 'Card number is not valid. ';
    }
    
    //check date
    const expYear = Number(document.querySelector('#year').value);   
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date();

    if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))
    ) {
        errorMsg += 'Card is expired.';
    }

    if (errorMsg !== '') {
		throwError(errorMsg)
		return;
    }
    // Success: show a confirmation message
    const formContainer = document.querySelector('#creditCardForm');
    formContainer.innerHTML = '<h2>Card was accepted</h2>';
}
  
document.querySelector('#creditCardForm').addEventListener('submit', submitHandler)
