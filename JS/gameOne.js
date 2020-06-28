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
  var ref = firebase.database().ref("/stocks");
  var first_price
  var second_price
  var third_price
  var forth_price
  var lastModified

function repaint(){
    document.getElementById("stock_price_1").innerHTML = first_price
}

function changePrice(){
    var currentTime = new Date();
    var seconds = (currentTime.getTime() - Date.parse(lastModified)) / 1000
    console.log("Time difference: " + seconds)
    if (seconds > 5){
      ref.update({
          lastUpdate : currentTime,
          AED: 60000 + Math.floor(Math.random() * (1000  - 100) * 100)
          }) 
      repaint()
    }
  }
ref.on("value", function(snapshot){
  first_price = snapshot.val().AED;
  lastModified = snapshot.val().lastUpdate
  repaint()
  setTimeout(function() {
    repaint()
  }, 300000)
}, function (error){
  console.log("Error: "+error.code)
})

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log ("Welcome "+ user.displayName)   // ...
    } else {

    }
  });
