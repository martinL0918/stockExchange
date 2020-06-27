// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDtlZcy8IgiOT3ZR704t4u-jBXSX26tf9g",
    authDomain: "stockmarket-d6c7e.firebaseapp.com",
    databaseURL: "https://stockmarket-d6c7e.firebaseio.com",
    projectId: "stockmarket-d6c7e",
    storageBucket: "stockmarket-d6c7e.appspot.com",
    messagingSenderId: "566720432394",
    appId: "1:566720432394:web:ced6853795924c063852f3",
    measurementId: "G-5YMJC76HZ9",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
document.getElementById("login").addEventListener('click', () => {
    let user = {
        email: email.value,
        pwd: pwd.value,
    }
    firebase.auth().signInWithEmailAndPassword(user.email, user.pwd).then(function success(userData) {
        console.log("Successfully Login")
        //document.getElementById("welcome").innerHTML = "Successfully Login"
      }).catch (function failure(error){
         // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log (errorCode + " " + errorMessage)
      })
    })
function redirect(){
      // For testing
      location.replace("gameMode.html");
}

firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        alert("Welcome!"+ user.displayName)
        redirect()
        // ...
      } else {
        console.log("Good Bye")
      }
    });
/*document.getElementById("logout").addEventListener('click', () => {
  firebase.auth().signOut().then(function() {
    alert("你登出了")
  })
})*/


