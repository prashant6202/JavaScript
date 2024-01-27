const myform = document.frmlogin;
const txtusername = myform.txtuser;
const txtpassword = myform.txtpwd;
const spnunameerror = document.getElementById("unameerror");
const spnpwderror = document.getElementById("pwderror");
function validateUserName(userName) {
	if (userName.length == 0) {
		spnunameerror.innerText = "Username cannot be blank!";
		setErrorMessage(txtusername, spnunameerror);
		return false;
	}
	return true;
}
function validatePassword(password) {
	if (password.length == 0) {
		spnpwderror.innerText = "Password cannot be blank!";
		setErrorMessage(txtpassword, spnpwderror);
		return false;
	}
	return true;
}
function setErrorMessage(textbox, span) {
	span.style.color = "crimson";
	textbox.setAttribute("class", "error");
}
txtusername.addEventListener("focus", () => {
	txtusername.removeAttribute("class");
	spnunameerror.innerText = "";
});
txtpassword.addEventListener("focus", () => {
	txtpassword.removeAttribute("class");
	spnpwderror.innerText = "";
});
txtusername.addEventListener("blur", () => {
	let user = txtusername.value;
	validateUserName(user);
});
txtpassword.addEventListener("blur", () => {
	let pwd = txtpassword.value;
	validatePassword(pwd);
});

myform.addEventListener("submit", (e) => {
	let isValid = true;
	let user = txtusername.value;
	let pwd = txtpassword.value;
	if (!validateUserName(user)) {
		isValid = false;
	}
	if (!validatePassword(pwd)) {
		isValid = false;
	}

	if (!isValid) {
		e.preventDefault();
	}
});
