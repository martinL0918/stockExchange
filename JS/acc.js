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

function CheckPassword(inputtxt) 
        { 
        var passw=  /^[A-Za-z]\w{7,14}$/;
        if(inputtxt.value.match(passw)) 
        { 
        return true;
        }
        else
        { 
        alert('Password must contain 7-14 characters and no invalid sign.')
        return false;
        }
        }

//Register 註冊功能
document.getElementById("submit").addEventListener('click', () =>{
    //Check if the password is valid
    //if(CheckPassword(document.getElementById("pwd-register").value) == true){
    let user = {
        email: document.getElementById("email-register").value,
        pwd: document.getElementById("pwd-register").value,
        name: document.getElementById("nickname-register").value
    }
    
    var nickName = user.name
    console.log
    firebase.auth().createUserWithEmailAndPassword(user.email, user.pwd).then( function success(userData){
        var uid = userData.user.uid
        database.ref("/players/"+uid).set({
            email: user.email,
            name: user.name,
        })
        database.ref("/players/" + uid + "/mode1/").set({
                               money:5000000,
                               hold_1: 0,
                               hold_2: 0,
                               hold_3: 0,
                               hold_4: 0,
                               hold_5: 0,
                            });
        database.ref("/players/" + uid + "/mode2/").set({
            money:5000000,
            "001": 0,
            "002": 0,
            "003": 0,
            "004": 0,
            "005": 0,
            "006": 0,
            "007": 0,
            "008": 0,
            "009": 0,
            "010": 0,
        });
        database.ref("/players/" + uid + "/mode3/").set({
            money:5000000,
            hold_1: 0,
            hold_2: 0,
            hold_3: 0,
            hold_4: 0,
            hold_5: 0,
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
    /*}else{
        
    }*/
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

 