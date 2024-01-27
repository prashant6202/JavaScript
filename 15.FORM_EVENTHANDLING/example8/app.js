const myform = document.frmcontact;
const txtEmailId = myform.txtEmail;
const span = document.querySelector("#error");
txtEmailId.onblur = function () {
	if (!txtEmailId.value.includes("@")) {
		txtEmailId.classList.add("invalid");
		span.innerHTML = "Please enter a correct email.";
	}
};
txtEmailId.onfocus = function () {
	if (txtEmailId.classList.contains("invalid")) {
		txtEmailId.classList.remove("invalid");
		span.innerHTML = "";
	}
};
