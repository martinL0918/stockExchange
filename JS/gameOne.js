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
  var ref = firebase.database().ref("/stocks");
  var first_price
  var second_price
  var third_price
  var forth_price



function repaint(){
    document.getElementById("stock_price_1").innerHTML = first_price
}

function changePrice(){
    setTimeout(function() {
        ref.update({
            AED : 60000 + Math.floor(Math.random() * (1000  - 100) * 100)
        })
    },60000);
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
      console.log ("Welcome "+ user.displayName)
      ref.on("value", function(snapshot){
        console.log(snapshot.val().AED);
        first_price = snapshot.val().AED;
        changePrice()
        repaint()
    }, function (error){
        console.log("Error: "+error.code)
    })

      // ...
    } else {

    }
  });