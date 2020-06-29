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
  var ref = firebase.database().ref("/stocks/mode1");
  var first_price;
  var second_price;
  var third_price;
  var forth_price;
  var fifth_price;
  var lastModified ;
  var asset;
  var holdings_1;
  var holdings_2;
  var holdings_3;
  var holdings_4;
  var holdings_5;
  var user_id;
  var nickName;

 
ref.on("value", function(snapshot){
    first_price = snapshot.val().CBY;
    second_price = snapshot.val().EFS;
    third_price = snapshot.val().SFL;
    forth_price = snapshot.val().DME;
    fifth_price = snapshot.val().EPC;
    lastModified = snapshot.val().lastUpdate
    repaint()
  }, function (error){
    console.log("Error: "+error.code)
  })

function repaint(){
    document.getElementById("stock_price_1").innerHTML = first_price;
    document.getElementById("stock_price_2").innerHTML = second_price;
    document.getElementById("stock_price_3").innerHTML = third_price;
    document.getElementById("stock_price_4").innerHTML = forth_price;
    document.getElementById("stock_price_5").innerHTML = fifth_price;
    document.getElementById("asset").innerHTML = asset;
    document.getElementById("stock_holding_1").innerHTML = holdings_1;
    document.getElementById("stock_holding_2").innerHTML = holdings_2;
    document.getElementById("stock_holding_3").innerHTML = holdings_3;
    document.getElementById("stock_holding_4").innerHTML = holdings_4;
    document.getElementById("stock_holding_5").innerHTML = holdings_5;
    document.getElementById("name_field").innerHTML = nickName;
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
    var stock = [first_price,second_price,third_price,forth_price,fifth_price]
    console.log(stock)
    if (seconds >= 7200 - 10){
      for (var i=0;i<5;i++){
        var luck = Math.round(Math.random() * ( 2 - 0 )+ 0)
        console.log(luck)
        if (luck ==0 || luck == 2){
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
      fifth_price = stock[4];
    }
    if (seconds >= 7200-10){ //7200-10
        ref.update({
            lastUpdate : currentTime.getTime(),
            CBY: stock[0],
            EFS: stock[1],
            SFL: stock[2],
            DME : stock[3],
            EPC : stock[4]
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
      user_id = user.uid;
      var providerData = user.providerData;
      console.log("Welcome "+ user.displayName)  // ...
      //read nickName
      firebase.database().ref("players/"+ user.uid).on("value", function(snapshot){
        nickName = snapshot.val().name
        repaint()
       }, function (error){
         console.log("Error: "+error.code)
       })
       //read mode 1 data
      firebase.database().ref("players/"+ user.uid+"/mode1/").on("value", function(snapshot){
      asset = snapshot.val().money
      holdings_1 = snapshot.val().hold_1
      holdings_2 = snapshot.val().hold_2
      holdings_3 = snapshot.val().hold_3
      holdings_4 = snapshot.val().hold_4;
      holdings_5 = snapshot.val().hold_5;
      repaint()
     }, function (error){
       console.log("Error: "+error.code)
     })
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
  },7200000) //7200000

  function lightTheme(){
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "white";
    document.getElementsByTagName("BODY")[0].style.color = "black";
  }
  function darkTheme(){
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "#121212";
    document.getElementsByTagName("BODY")[0].style.color = "white";
  }
//第一款股票
  document.getElementById("buy_1").addEventListener('click', () => {
    var quan = number_1.value
    if (asset >= first_price * quan && quan >0){
        holdings_1 = Number(holdings_1)+ Number(quan)
        asset = asset - (first_price * quan)
      firebase.database().ref("players/"+ user_id+"/mode1").update({
        hold_1 : holdings_1,
        money  : asset.toFixed(2)
      })
    }
    else if (quan <=0){
      alert("股票數量錯誤")
    }
    else{
      alert("你沒有足夠的金錢")
    }
  })

  document.getElementById("sell_1").addEventListener('click', () => {
    var quan = number_1.value
    if (holdings_1 >= quan && quan >0){
      holdings_1 = Number(holdings_1) - Number(quan);
      asset = Number(asset) + (Number(quan) * Number(first_price));
      firebase.database().ref("players/"+ user_id+"/mode1").update({
        hold_1 : holdings_1,
        money  : asset.toFixed(2)
      })
    }
    else if (quan <=0){
      alert("股票數量錯誤")
    }
    else if (holdings_1 < quan){
      alert("你沒有足夠的股票")
    }
    else{
      alert("你沒有足夠的金錢")
    }
  })
//第二款股票
  document.getElementById("buy_2").addEventListener('click', () => {
    var quan = number_2.value
    if (asset >= second_price * quan && quan >0){
        holdings_2 = Number(holdings_2)+ Number(quan)
        asset = asset - (second_price * quan)
      firebase.database().ref("players/"+ user_id+"/mode1").update({
        hold_2 : holdings_2,
        money  : asset.toFixed(2)
      })
    }
    else if (quan <=0){
      alert("股票數量錯誤")
    }
    else{
      alert("你沒有足夠的金錢")
    }
  })

  document.getElementById("sell_2").addEventListener('click', () => {
    var quan = number_2.value
    if (holdings_2 >= quan && quan >0){
      holdings_2 = Number(holdings_2) - Number(quan);
      asset = Number(asset) + (Number(quan) * Number(second_price));
      firebase.database().ref("players/"+ user_id+"/mode1").update({
        hold_2 : holdings_2,
        money  : asset.toFixed(2)
      })
    }
    else if (quan <=0){
      alert("股票數量錯誤")
    }
    else if (holdings_2 < quan){
      alert("你沒有足夠的股票")
    }
    else{
      alert("你沒有足夠的金錢")
    }
  })
//第三款股票
  document.getElementById("buy_3").addEventListener('click', () => {
    var quan = number_3.value
    if (asset >= third_price * quan && quan >0){
        holdings_3 = Number(holdings_3)+ Number(quan)
        asset = asset - (third_price * quan)
      firebase.database().ref("players/"+ user_id+"/mode1").update({
        hold_3 : holdings_3,
        money  : asset.toFixed(2)
      })
    }
    else if (quan <=0){
      alert("股票數量錯誤")
    }
    else{
      alert("你沒有足夠的金錢")
    }
  })

  document.getElementById("sell_3").addEventListener('click', () => {
    var quan = number_3.value
    if (holdings_3 >= quan && quan >0){
      holdings_3 = Number(holdings_3) - Number(quan);
      asset = Number(asset) + (Number(quan) * Number(third_price));
      firebase.database().ref("players/"+ user_id+"/mode1").update({
        hold_3 : holdings_3,
        money  : asset.toFixed(2)
      })
    }
    else if (quan <=0){
      alert("股票數量錯誤")
    }
    else if (holdings_3 < quan){
      alert("你沒有足夠的股票")
    }
    else{
      alert("你沒有足夠的金錢")
    }
  })
//第四款股票
  document.getElementById("buy_4").addEventListener('click', () => {
    var quan = number_4.value
    if (asset >= forth_price * quan && quan >0){
        holdings_4 = Number(holdings_4)+ Number(quan)
        asset = asset - (forth_price * quan)
      firebase.database().ref("players/"+ user_id+"/mode1").update({
        hold_4 : holdings_4,
        money  : asset.toFixed(2)
      })
    }
    else if (quan <=0){
      alert("股票數量錯誤")
    }
    else if (holdings_4 < quan){
      alert("你沒有足夠的股票")
    }
    else{
      alert("你沒有足夠的金錢")
    }
  })

  document.getElementById("sell_4").addEventListener('click', () => {
    var quan = number_4.value
    if (holdings_4 >= quan && quan >0){
      holdings_4 = Number(holdings_4) - Number(quan);
      asset = Number(asset) + (Number(quan) * Number(forth_price));
      firebase.database().ref("players/"+ user_id+"/mode1").update({
        hold_4 : holdings_4,
        money  : asset.toFixed(2)
      })
    }
    else if (quan <=0){
      alert("股票數量錯誤")
    }
    else{
      alert("你沒有足夠的金錢")
    }
  })
//第五款股票
  document.getElementById("buy_5").addEventListener('click', () => {
    var quan = number_5.value
    if (asset >= fifth_price * quan && quan >0){
        holdings_5 = Number(holdings_5)+ Number(quan)
        asset = asset - (fifth_price * quan)
      firebase.database().ref("players/"+ user_id+"/mode1").update({
        hold_5 : holdings_5,
        money  : asset.toFixed(2)
      })
    }
    else if (quan <=0){
      alert("股票數量錯誤")
    }
    else if (holdings_5 < quan){
      alert("你沒有足夠的股票")
    }
    else{
      alert("你沒有足夠的金錢")
    }
  })

  document.getElementById("sell_5").addEventListener('click', () => {
    var quan = number_5.value
    if (holdings_5 >= quan && quan >0){
      holdings_5 = Number(holdings_5) - Number(quan);
      asset = Number(asset) + (Number(quan) * Number(fifth_price));
      firebase.database().ref("players/"+ user_id+"/mode1").update({
        hold_5 : holdings_5,
        money  : asset.toFixed(2)
      })
    }
    else if (quan <=0){
      alert("股票數量錯誤")
    }
    else{
      alert("你沒有足夠的金錢")
    }
  })