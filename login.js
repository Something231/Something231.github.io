function check(form) {
	if(form.username.value == "admin" && form.password.value == "code3") {
		window.open('target.html')
	} else {
		alert("Incorrect Username or Password")
	}
}