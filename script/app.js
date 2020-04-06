var config = {
	apiKey: 'AIzaSyBtXKiptTFYdqhWHmisps7h6ndT8QJkuzg',
	authDomain: 'contact-form-2c19f.firebaseapp.com',
	databaseURL: 'https://contact-form-2c19f.firebaseio.com',
	projectId: 'contact-form-2c19f',
	storageBucket: 'contact-form-2c19f.appspot.com',
	messagingSenderId: '908344678366',
	appId: '1:908344678366:web:673f0618f7ab1b3ae8ef4f',
	measurementId: 'G-66EHFPCMWQ'
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
	e.preventDefault();

	// Get values
	var name = getInputVal('name');
	var email = getInputVal('email');
	var subject = getInputVal('subject');
	var message = getInputVal('message');

	// Save message
	saveMessage(name, email, subject, message);

	// Clear form
	document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
	return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		email: email,
		subject: subject,
		message: message
	});
}

// //////////////////////////////////////////////////////////////////////////////
// hamburger menu

$(function() {
	var navMain = $('.navbar-collapse');
	navMain.on('click', 'a:not([data-toggle])', null, function() {
		navMain.collapse('hide');
	});
});
