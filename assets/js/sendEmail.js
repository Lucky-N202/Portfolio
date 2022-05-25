function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	To : 'nhlanhlaelvis67@gmail.com',
	From : document.getElementById("email"),
	Subject : "Employment",
	Body : document.getElementById("message"),
	}).then(
		message => alert("mail sent successfully")
	);
}