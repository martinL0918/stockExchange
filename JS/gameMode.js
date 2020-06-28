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
 
  document.getElementById("logout").addEventListener('click', () => {
    firebase.auth().signOut().then(function() {
      alert("你登出了")
      location.replace("login.html")
    })
  })
  function redirect(){
    // For testing
    location.replace("gameOne.html");
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
      document.getElementById("remind-message").innerHTML = "歡迎回來! " + user.displayName
      // ...
    } else {
        document.getElementById("remind-message").innerHTML = "請先登入遊戲" ;
    }
  });