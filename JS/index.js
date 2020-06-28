// Your web app's Firebase configuration
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
    location.replace("https://stockmarket-d6c7e.web.app/login.html");
}
//Sign up 登入功能
document.getElementById("submit").addEventListener('click', () =>{
    let user = {
        email: email.value,
        pwd: pwd.value,
        name: nickname.value + ""
    }
    firebase.auth().createUserWithEmailAndPassword(user.email, user.pwd).then( function success(userData){
        var uid = userData.user.uid
        database.ref("/players/" + uid).set({money:5000000,
                               email: user.email,
                               name: user.name});
        userData.user.updateProfile({
            displayName: user.name
        })
        console.log(user.name)
        location.replace("login.html")
    }).catch (function failure(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
    })
})

 