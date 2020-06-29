var firebaseConfig = {
    apiKey: config.apiKey,
    authDomain:  config.authDomain,
    databaseURL:  config.databaseURL,
    projectId:  config.projectId,
    storageBucket:  config.storageBucket,
    messagingSenderId:  config.messagingSenderId,
    appId: config.appId,
    measurementId:  config.measurementId,
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function redirect(){
    // For testing
    location.replace("gameMode.html");
}
//Register 註冊功能
document.getElementById("submit").addEventListener('click', () =>{
    let user = {
        email: document.getElementById("email-register").value,
        pwd: document.getElementById("pwd-register").value,
        name: document.getElementById("nickname-register").value
    }
    var nickName = user.name
    console.log
    firebase.auth().createUserWithEmailAndPassword(user.email, user.pwd).then( function success(userData){
        var uid = userData.user.uid
        database.ref("/players/" + uid).set({money:5000000,
                               email: user.email,
                               name: user.name,
                               hold_1: 0,
                               hold_2: 0,
                               hold_3: 0,
                               hold_4: 0,
                            });
        userData.user.updateProfile({
            displayName: user.name
        }).then (function(){
                console.log("Update successfully")
        }, function(error){
                console.log("Error")
        });
        //location.replace("gameMode.html")
    }).catch (function failure(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
    })
})
// Login 登入功能
document.getElementById("login-btn").addEventListener('click', () => {
    let user = {
        email: document.getElementById("email-login").value,
        pwd: document.getElementById("pwd-login").value,
    }
    firebase.auth().signInWithEmailAndPassword(user.email, user.pwd).then(function success(userData) {
        console.log("Successfully Login")
        //document.getElementById("welcome").innerHTML = "Successfully Login"
        redirect()
      }).catch (function failure(error){
         // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log (errorCode + " " + errorMessage)
      })
    })
//檢查是否已經登入
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          setTimeout(function(){ alert("Welcome! "+ user.displayName); redirect()},1500)
          //redirect()
          // ...
        } else {
          console.log("Good Bye")
        }
      });
function lightTheme(){
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "white";
    document.getElementsByTagName("BODY")[0].style.color = "black";
}

 