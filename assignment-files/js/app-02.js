/* 02 - FORM VALIDATION :: YOUR CODE BELOW */
var registerForm = document.forms.registerForm;

registerForm.addEventListener('submit', function(e){
	e.preventDefault();
	var usernameInput = e.target.elements.username.value;
	var usernameInputText = document.querySelector('.validation--username');


	if(usernameInput === ""){
		usernameInputText.textContent = "This field cannot be blank"; 
	} else {
		usernameInputText.textContent = "Success"; // <-- this when is empty
	}

	var passwordInput = e.target.elements.userpassword.value;
	var passwordInputText = document.querySelector('.validation--user-password');

	if (passwordInput.length <= 8){
		passwordInputText.textContent = "Password must have a minimum of 8 characters";
	}else if (passwordInput.length ){
		passwordInputText.textContent = "Success";
	}

	var confirmPswInput = e.target.elements.confirmpassword.value;
	var confirmPswInputText = document.querySelector('.validation--confirm-password');
	if(confirmPswInput === passwordInput){
		confirmPswInputText.textContent = "Success";
	} else if (confirmPswInput !== passwordInput || passwordInput === ""){
		confirmPswInputText.textContent = "Sorry, both passwords must match!";
	}

	var taxIDInput = e.target.elements.taxid.value;
	var taxIDInputText = document.querySelector('.validation--tax-id');
	  if (taxIDInput === "") {
    taxIDInputText.textContent = "Must provide Tax ID Number ";;
  	} else if (taxIDInput * 1 > 0 && taxIDInput.length === 10) {
    taxIDInputText.textContent = "Success";
  	} else {
    taxIDInputText.textContent = "Tax ID should be up to 10 digit number";
  	}

	var accountInput = registerForm.elements.account.value;
	var accountInputTwo = document.querySelector('.validation--account');
	if (accountInput === ""){
		accountInputTwo.textContent = "Must select account type";
	}else{
		accountInputTwo.textContent = "Success";
	}

	var confirmationCheck = registerForm.elements.termsofservice;
	var confirmationCheckTxt = document.querySelector('.validation--terms-of-service');

	if(confirmationCheck.checked === false) {
		confirmationCheckTxt.textContent = "Must confirm you have read the Terms of Service";
	} else{
		confirmationCheckTxt.textContent = "Success";
	}

	var formValidation = document.querySelector('.validation--entire-form');
	if(usernameInputText.textContent === 'Success' && passwordInputText.textContent === 'Success' && confirmPswInputText.textContent === 'Success' && taxIDInputText.textContent === 'Success' && accountInputTwo.textContent === 'Success' && confirmationCheckTxt.textContent === 'Success') {
		formValidation.textContent = "Form Completed";
	} else {
		formValidation.textContent = "Please fill all mandatory fields"
	}
	
});



// Diego Ortega





