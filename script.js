// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyCjC5dmtePQ5yw7OqO5k-VEBsHXRAib9lE",
    authDomain: "contact-44436.firebaseapp.com",
    databaseURL: "https://contact-44436.firebaseio.com",
    projectId: "contact-44436",
    storageBucket: "contact-44436.appspot.com",
    messagingSenderId: "158288445008",
    appId: "1:158288445008:web:8b2f804c8d25999c675b55"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var messageRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e)
{
    e.preventDefault();

    var name = getInputVal('name');
    var email = getInputVal('email');
    var concern = getInputVal('concern');

    saveMessage(name, email, concern);

    document.querySelector('.alert').style.display = 'block';


    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    
    document.getElementById('contactForm').reset();
} 


function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, email, concern) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        concern: concern
    });
}