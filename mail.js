const firebaseConfig = {
    apiKey: "AIzaSyDSv0YzQqMnQSpQulQcZKjY0zdTgripAMM",
    authDomain: "lundry-lagbe-web.firebaseapp.com",
    databaseURL: "https://lundry-lagbe-web-default-rtdb.firebaseio.com",
    projectId: "lundry-lagbe-web",
    storageBucket: "lundry-lagbe-web.appspot.com",
    messagingSenderId: "105131917875",
    appId: "1:105131917875:web:e19f0904b0870daa1e1946"
  };

  //initilize firebase
  firebase.initializeApp(firebaseConfig);

  //reference database
  var LaundryLagbeWebDB = firebase.database().ref("LaundryLagbeWeb");

  document.getElementById('LaundryLagbeWeb').addEventListener("submit", submitFrom);

function submitFrom(e){
    e.preventDefault();

    var email = getElementval('email');
    var password = getElementval('password');

    console.log(email, password);
}

 const getElementval = (id) => {
     return document.getElementById(id).value;
 };