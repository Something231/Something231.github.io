function check(form) {
	if(form.username.value == "admin" && form.password.value == "code3") {
		window.open('mindoor.html')
	} else {
		alert("Incorrect Username or Password")
	}
}
