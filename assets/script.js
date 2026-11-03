const toggleState = (selected) => {
	document.getElementsByClassName("selected")[0].className = "unselected";
	selected.className = "selected";
	if (selected.id === "sign-up") {
		selected.disabled = true, document.getElementById("login").disabled = false;
		document.getElementById("save-session").style.display = "none";
		document.getElementById("submit").value = "Sign up";
	} else {
		selected.disabled = true, document.getElementById("sign-up").disabled = false;
		document.getElementById("save-session").style.removeProperty("display");
		document.getElementById("submit").value = "Login";
	}
}, togglePassword = (checked) => {
	if (checked === true) document.getElementById("password").type = "text";
	else document.getElementById("password").type = "password";
}