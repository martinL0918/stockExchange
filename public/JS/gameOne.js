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
 
ref.on("value", function(snapshot){
    first_price = snapshot.val().ABCD;
    second_price = snapshot.val().EFGH;
    third_price = snapshot.val().HATE;
    forth_price = snapshot.val().DMD;
    lastModified = snapshot.val().lastUpdate
    repaint()
  }, function (error){
    console.log("Error: "+error.code)
  })

function repaint(){
    document.getElementById("stock_price_1").innerHTML = first_price
    document.getElementById("stock_price_2").innerHTML = second_price
    document.getElementById("stock_price_3").innerHTML = third_price
    document.getElementById("stock_price_4").innerHTML = forth_price
    document.getElementById("error-checking").innerHTML = lastModified
}

function changePrice(){
    var currentTime = new Date();
    var oldTime
    ref.on("value", function(snapshot){
      oldTime = snapshot.val().lastUpdate
    })
    console.log(oldTime)
    var seconds = (currentTime.getTime() - oldTime) / 1000
    console.log("Time difference: " + seconds)
    var luck = math.random * (1 - 0 )+ 0
    console.log(luck)
    if (seconds >= 5-0.05){
      if (luck ==0){
        ref.update({
            lastUpdate : currentTime.getTime(),
            ABCD: (first_price * (1+ Math.random() * (0.03 - 0.01) + 0.01)).toFixed(2),
            EFGH: (second_price * (1+ Math.random() * (0.03 - 0.01) + 0.01)).toFixed(2),
            HATE: (third_price * (1+ Math.random() * (0.03 - 0.01) + 0.01)).toFixed(2),
            DMD: (forth_price * (1+ Math.random() * (0.03 - 0.01) + 0.01)).toFixed(2)
            }) 
      }else if (luck == 1){
        lastUpdate : currentTime.getTime(),
        ABCD: (first_price * (1- Math.random() * (0.03 - 0.01) + 0.01)).toFixed(2),
        EFGH: (second_price * (1- Math.random() * (0.03 - 0.01) + 0.01)).toFixed(2),
        HATE: (third_price * (1- Math.random() * (0.03 - 0.01) + 0.01)).toFixed(2),
        DMD: (forth_price * (1- Math.random() * (0.03 - 0.01) + 0.01)).toFixed(2)
      }
      repaint()

    }
    else{
      console.log("Not yet")
    }
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
      console.log("Welcome "+ user.displayName)  // ...
      repaint()
      setTimeout(updateRegularly,1500);
    } else {

    }
  });

  function setTime(){
    var current = new Date();
    ref.update({
      lastUpdate : current.getTime()
    })
  }

  function updateRegularly(){
      changePrice()
  }


  setInterval(function(){
      updateRegularly()
  },5000)