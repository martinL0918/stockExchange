/*
                    <td style="width:10%">股票編號</td>
                    <th style="width:20%">股票名稱</th>
                    <th style="width:15%">持股數</th>
                    <th style="width:45%">操作</th>
*/
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
    var user_id;
    var nickName = "loading";
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      user_id = user.uid;
      var providerData = user.providerData;
      //read nickName
      firebase.database().ref("players/"+ user.uid).on("value", function(snapshot){
        nickName = snapshot.val().name
        }, function (error){
          console.log("Error: "+error.code)
        })
        console.log(user.uid)
        if (user.uid != "lnUEYL7LL2auR6KyvCfxCyy85P73" && user.uid !="eiQEHqoNQXgW7cLNFroOSlpVBCc2"){
          setInterval(notShow,1000) 
          notShow()
          alert("你並不是管理員，死87")
          setTimeout(redirect,2000)
        } 
    }
    else {
      alert("你並不是管理員，死87")
      notShow()
      setTimeout(redirect,2000)
    }
  });
  function redirect(){
    location.replace("gameMode.html");
 }
function notShow(){
    document.getElementById("stockTable").style.visibility = "hidden";
    document.getElementById("setSQL").style.visibility = "hidden";
    document.getElementById("addStock").style.visibility = "hidden";
    document.getElementById("stockTable").style.display = "none";
    document.getElementById("setSQL").style.display = "none";
    document.getElementById("addStock").style.display = "none";
}
document.getElementById("deleteMode2PlayersData").addEventListener('click', function(){
     //玩家持股量
     var totalPlayers = []
     firebase.database().ref("players/").on("value", function(snapshot){
       totalPlayers = (Object.keys(snapshot.val())).map(x => x)
      }, function (error){
        console.log("Error: "+error.code)
      })
      console.log(totalPlayers)
      if (totalPlayers.length != 0 && confirm("此動作不能被被還原，你確定要清除玩家資料?")){
        totalPlayers.forEach(element => defaultSQL(element)  )
        alert("成功清理所有玩家資料")
      }else if (totalPlayers.length == 0){
          alert("PlayersData are still loading")
      }
})
function defaultSQL(x){
    firebase.database().ref("players/"+x+"/mode2/" ).set({
        money: 5000000
    })
}
document.getElementById("newStockBtn").addEventListener('click',function(){
    var newStockAKA = document.getElementById("newStockAKA").value
    var newStockPrice = document.getElementById("newStockPrice").value
    var newStockName  = document.getElementById("newStockName").value
    var noOfStocks
    var ans
    firebase.database().ref("stocks/mode2").once("value", function(snapshot){
        noOfStocks = (Object.keys(snapshot.val())).length + 1
        var str = "" + 1 
        var pad = "000"
        ans = pad.substring(0,pad.length - str.length) + noOfStocks
        console.log(ans)
       }, function (error){
         console.log("Error: "+error.code)
       })
       newStockAKA = newStockAKA.toUpperCase()
       if (newStockAKA.length==3){
         if (!isNaN(newStockPrice)){
              firebase.database().ref("stocks/"+"/mode2/"+ans).set({
              _name :  newStockName, 
              _price: newStockPrice,
              _flow : "平穩",
              _code : newStockAKA
            })
         }
         else{
           alert("股票價格不是數字")
         }
       }else{
          alert("股票代碼不是3位英文字母")
        }
  }
)

  class StockRow extends React.Component{
      setPrice(id){
          var targetId = id.target.id
          var newPrice = document.getElementById("text_"+targetId).value
        //update price
        if (!isNaN(newPrice)){
            firebase.database().ref("stocks/"+"/mode2/"+targetId).update({
                _price : newPrice
            })
         }
         else{
             alert("欄位: "+targetId+"不是正確數字")
         }
      }
      setFlow(id,stockPrice){
        const translate = {rup: "急升",
                          sup: "穩升",
                          normal: "平穩",
                          sdown: "下跌",
                          rdown: "急跌",}
        var targetID = id.target.id
        var firstUnder = targetID.indexOf("_")
        var secondUnder = targetID.indexOf("_", firstUnder+1)
        var targetAction = targetID.substring(firstUnder+1,secondUnder) //目標走向
        var targetCode = targetID.substring(secondUnder+1)
        var update = translate[targetAction]  //更新資料
        var newPrice
        /* For debug (即時更新)
        switch (targetAction){
          case "rup":
            newPrice = stockPrice * (Math.random() * (rupRate.max - rupRate.min) + rupRate.min)
            break;
          case "sup":
            newPrice = stockPrice * (Math.random() * (supRate.max - supRate.min) + supRate.min)
            break;
          case "normal":
            newPrice = stockPrice * (Math.random() * (normalRate.max - normalRate.min) + normalRate.min)
            break;
          case "sdown":
            newPrice = stockPrice * (Math.random() * (sdownRate.max - sdownRate.min) + sdownRate.min)
            break;
          case "rdown":
            newPrice = stockPrice * (Math.random() * (rdownRate.max - rdownRate.min) + rdownRate.min)
        }*/
        firebase.database().ref("stocks/"+"/mode2/"+targetCode).update({
          _flow : update
          //_price : newPrice.toFixed(2)
        })
      }
      changePrice(){
        var lastUpdate
        var timeDifference
        var stockArray = []
        var stockPrice = []
        var nextAction = []
        var currentTime = new Date().getTime();
        var newPrice = 1
        //讀取最後更新時間
        firebase.database().ref("time/mode2").on("value", function(snapshot){
          lastUpdate = snapshot.child("lastUpdate").val()
        })
        timeDifference = (currentTime - lastUpdate) / 1000
        if (timeDifference >= updateTime - 0.25) { 
          //讀取所有股票
            firebase.database().ref("stocks/mode2").once("value", function(snapshot){
              stockArray = Object.keys(snapshot.val())
              stockArray.forEach((element,index) => {
                  stockPrice[index] = snapshot.child(element+"/_price").val()
                  nextAction[index] = snapshot.child(element+"/_flow").val()
                  console.log(nextAction[index])
                  switch (nextAction[index]){
                    case "急升":
                      newPrice = stockPrice[index] * (Math.random() * (rupRate.max - rupRate.min) + rupRate.min)
                      break;
                    case "穩升":
                      newPrice = stockPrice[index] * (Math.random() * (supRate.max - supRate.min) + supRate.min)
                      break;
                    case "平穩":
                      newPrice = stockPrice[index] * (Math.random() * (normalRate.max - normalRate.min) + normalRate.min)
                      break;
                    case "下跌":
                      newPrice = stockPrice[index] * (Math.random() * (sdownRate.max - sdownRate.min) + sdownRate.min)
                      break;
                    case "急跌":
                      newPrice = stockPrice[index] * (Math.random() * (rdownRate.max - rdownRate.min) + rdownRate.min)
                      break;
                    default :
                      newPrice = 888
                  }
                  firebase.database().ref("stocks/"+"/mode2/"+element).update({
                    _price : newPrice.toFixed(2)
                  })
              })
              console.log(stockPrice)
          })
            firebase.database().ref("time/mode2").update({
              lastUpdate : currentTime
          })
          console.log("Time passed: "+ timeDifference)
        }
      }
      componentDidMount(){
        setInterval(
          () => this.changePrice(),2000
        )
      }
      render(){
          return(
              <tr>
                  <td>{this.props.code}</td>
                  <td>{this.props.AKA}</td>
                  <td>{this.props.name}</td>
                  <td>{this.props.price}</td>
                  <td>
                    <input type="textfield" id = {"text_"+this.props.code} style={{width: "100px"}}></input>
                    <button onClick = {e => this.setPrice(e,this.props.price)} id = {this.props.code} className={"btn btn-sm btn-primary mx-1"}>設定價格</button>
                    <button onClick = {e => this.setFlow(e,this.props.price)} id = {"flow_rup_"+ this.props.code} className={"btn btn-sm btn-primary mr-1"}>急升</button>
                    <button onClick = {e => this.setFlow(e,this.props.price)} id = {"flow_sup_"+ this.props.code} className={"btn btn-sm btn-primary mr-1"}>穩升</button>
                    <button onClick = {e => this.setFlow(e,this.props.price)} id = {"flow_normal_"+ this.props.code}  className={"btn btn-sm btn-primary mr-1"}>平穩</button>
                    <button onClick = {e => this.setFlow(e,this.props.price)} id = {"flow_sdown_"+ this.props.code}  className={"btn btn-sm btn-primary mr-1"}>下跌</button>
                    <button onClick = {e => this.setFlow(e,this.props.price)} id = {"flow_rdown_"+ this.props.code}   className={"btn btn-sm btn-primary mr-1"}>急跌</button>
                  </td>
                  <td>
                  <label>{this.props.flow}</label>
                  </td>
              </tr>
          );
      }
  }

  /*
          var playerName =this.props.playerData
          var playerData = Object.values(this.props.playerData)*/
  class StockTable extends React.Component{
    
    constructor(props){
      super(props);
      this.state = {uid : "Error",
                    shareCode: ["000"],
                    shareAKA :["Loading"],
                    shareName :["Loading"],
                    sharePrice : [0],
                    shareFlow : "讀取"};
                     
    }
      componentDidMount(){
        setInterval(
          () => this.tick(),
          2000
        );
      }

      tick(){
         var stockCode = []
         var stockAKA = ["Loading",] //股票代號
         var stockName = []
         var stockPrice = [0]
         var stockFlow = ["讀取"]
         
         firebase.database().ref("stocks/mode2").on("value", function(snapshot){
        //股票編號 e.g. 001 002
           stockCode = Object.keys(snapshot.val())
           stockCode.forEach((element,index)=>{
        //股票代碼
            stockAKA[index] = snapshot.child(element + "/_code").val()
        //股票名稱
            stockName[index] = snapshot.child(element+"/_name").val()
        //股票價格
            stockPrice[index] = snapshot.child(element + "/_price").val()
         //股票走向
            stockFlow[index] = snapshot.child(element+"/_flow").val()
           })
      })
        this.setState({uid : user_id});
        this.setState({shareAKA : stockAKA})
        this.setState({shareName : stockName})
        this.setState({shareCode : stockCode})
        this.setState({sharePrice : stockPrice})
        this.setState({shareFlow : stockFlow})
      }
      render(){
          const row = [];
          for (var index=0;index<=this.state.sharePrice.length - 1 ;index++){ //選擇顯示的股票數目
                  row.push(
                      <StockRow AKA = {this.state.shareAKA[index]} name = {this.state.shareName[index]}price = {this.state.sharePrice[index]} key ={index} uid = {this.state.uid} code={this.state.shareCode[index]}  flow ={this.state.shareFlow[index]}/>
                  );
              }
          return (
            <div>
            <h5 className={"float-left"}>歡迎: Admin</h5>
              <table className={"table table-light table-striped"}>
              <thead>
                <tr >
                  <th style={{width:"10%"}}>股票編號</th>
                  <th style={{width:"5%"}}>股票代碼</th>
                  <th style={{width:"20%"}}>股票名稱</th>
                  <th style={{width:"10%"}}>股票價格</th>
                  <th style={{width:"48%"}}>Admin操作</th>
                  <th style={{width:"7%"}}>走向</th>
                </tr>
              </thead>
              <tbody>
                  {row}
              </tbody>
              </table>
            </div> 
          );
      }
  
  }
  ReactDOM.render(
      <StockTable />,
      document.getElementById('stockTable')
    );
  