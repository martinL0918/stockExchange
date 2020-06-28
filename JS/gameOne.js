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
    var stock = [first_price,second_price,third_price,forth_price]
    console.log(stock)
    for (var i=0;i<4;i++){
      var luck = Math.round(Math.random())
      if (luck ==0){
        //stock[i] = 1000;
        stock[i]  = (stock[i] * (1+ (Math.random() * (0.03 - 0.01) + 0.01))).toFixed(2);
        console.log(i + ":   " + stock[i])
      }
      else if (luck == 1){
        stock[i]  = (stock[i] * (1 - (Math.random() * (0.04 - 0.02) + 0.02))).toFixed(2);
        console.log(i + ":   " + stock[i])
      }
    } 
    first_price = stock[0];
    second_price = stock[1];
    third_price = stock[2];
    forth_price = stock[3];
 
    if (seconds >= 5-0.05){
        ref.update({
            lastUpdate : currentTime.getTime(),
            ABCD: stock[0],
            EFGH: stock[1],
            HATE: stock[2],
            DMD : stock[3]
            })    
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
  },10000)