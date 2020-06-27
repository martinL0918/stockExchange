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

function redirect(){
    // For testing
    location.replace("https://stockmarket-d6c7e.web.app/login.html");
}
//Sign up 登入功能
document.getElementById("submit").addEventListener('click', () =>{
    let user = {
        email: email.value,
        pwd: pwd.value,
        name: nickname.value
    }
    firebase.auth().createUserWithEmailAndPassword(user.email, user.pwd).then( function success(userData){
        var uid = userData.user.uid
        database.ref("/players/" + uid).set({money:5000000,
                               email: user.email,
                               name: user.name});
        userData.user.updateProfile({
            displayName: user.name
        })
        location.replace("login.html")
    }).catch (function failure(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
    })
})

 