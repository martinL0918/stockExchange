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

function writeUserData(){
   /* var playersRef = firebase.database().ref('/')

    playersRef.set({
        Martin:{
            money: 20000
        },
        Test:{
            money: 20000
        }
    })*/

    // For Testing
    database.ref('/mode/players/playerone').set({money:5000000});
}
 