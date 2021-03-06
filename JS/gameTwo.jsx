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
      })// ...
  } else {
    alert("請先登入")
    document.getElementById("stockTable").style.visibility = "hidden";
    document.getElementById("aTitle").innerHTML = "請先登入";
  }
});
class AssetRow extends React.Component{
  constructor(props){
    super(props)
    this.state = {asset : "Loading"}
  }
  componentDidMount(){
    setInterval(
      () => this.tick()
      ,2000);
  }
  tick(){
    var money = "Loading"
      firebase.database().ref("players/"+ user_id+"/mode2/").on("value", function(snapshot){
        money = snapshot.val().money
        money = money.toFixed(2)
      }, function (error){
        console.log("Error: "+error.code)
      }) 
      this.setState({asset : money})
  }
  render(){
    return(
      <span>{this.state.asset}</span>
   );
  }
}
class StockRow extends React.Component{
  componentDidMount(){
    setInterval(
      () => this.changePrice()
    ,2000)
  }
  addHoldings(event){
    var targetId = event.target.id
    var start = targetId.indexOf("_")+1
    var sqlID = targetId.substring(start)
    var currentHoldings
    var addStock = Number(document.getElementById("text_"+sqlID).value)
    var currentStockPrice
    var userMoney
     //get player current hodldings
        firebase.database().ref("players/"+user_id+"/mode2/"+sqlID).on("value", function(snapshot){
          currentHoldings = Number(snapshot.val())
    }, function (error){
      console.log("Error: "+error.code)
    })
     //get player's money
     firebase.database().ref("players/"+user_id+"/mode2/money").on("value", function(snapshot){
      userMoney = Number(snapshot.val())
    })
    //getStockPrice
        firebase.database().ref("stocks/mode2/"+sqlID).on("value", function(snapshot){
          currentStockPrice = snapshot.child("_price").val()
    }, function (error){
      console.log("Error: "+error.code)
    })
    //update holdings
    if (!isNaN(addStock) && addStock != ""){
      if (userMoney > currentStockPrice * addStock){
        firebase.database().ref("players/"+user_id+"/mode2/").update({
            [sqlID] : currentHoldings + addStock
        })
        this.updatePrice("add",currentStockPrice * addStock)
        console.log("Bought successful")
      }
      else{
        alert("你沒有足夠的金錢")
      }
    }
    else{
      alert("欄位: "+sqlID+"不是正確數字")
    }
  }
  subHoldings(event){
    var targetId = event.target.id
    var start = targetId.indexOf("_")+1
    var sqlID = targetId.substring(start)
    var currentHoldings
    var subStock = Number(document.getElementById("text_"+sqlID).value)
    var currentStockPrice
    var userMoney
     //get player current hodldings
        firebase.database().ref("players/"+user_id+"/mode2/"+sqlID).on("value", function(snapshot){
          currentHoldings = Number(snapshot.val())
    }, function (error){
      console.log("Error: "+error.code)
    })
    //get player's money
     firebase.database().ref("players/"+user_id+"/mode2/money").on("value", function(snapshot){
      userMoney = Number(snapshot.val())
      //console.log(userMoney)
    })
    //getStockPrice
    firebase.database().ref("stocks/mode2/"+sqlID).on("value", function(snapshot){
      currentStockPrice = snapshot.child("_price").val()
}, function (error){
  console.log("Error: "+error.code)
})
    //update holdings
    if (!isNaN(subStock) && subStock != ""){
      //console.log(currentStockPrice)
        if (subStock <= currentHoldings){
          firebase.database().ref("players/"+user_id+"/mode2/").update({
              [sqlID] : currentHoldings - subStock
          })
          this.updatePrice("sub",currentStockPrice * subStock)
          console.log("Sell successful")
        }
        else {
          alert("你沒有足夠的股票")
        }
    }
    else{
      alert("欄位: "+sqlID+"不是正確數字")
    }
  }
  updatePrice(action,actionPrice){
    var userMoney
     //get player's money
     firebase.database().ref("players/"+user_id+"/mode2/money").on("value", function(snapshot){
      userMoney = Number(snapshot.val())
     // console.log(userMoney)
    }, function (error){
    console.log("Error: "+error.code)
    })
    if (action == "add"){
      firebase.database().ref("players/"+user_id+"/mode2/").update({
        money : userMoney - actionPrice
    })
  }
    if (action == "sub"){
      firebase.database().ref("players/"+user_id+"/mode2/").update({
        money : userMoney + actionPrice
    })
  }
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
            //console.log(nextAction[index])
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
        //console.log(stockPrice)
    })
      firebase.database().ref("time/mode2").update({
        lastUpdate : currentTime
    })
    //console.log("Time passed: "+ timeDifference)
  }
}
    render(){
        /*playerName.forEach((name,index)=>{
            console.log(name,playerData[index])
        })*/
        return(
            <tr>
                <td>{this.props.code}</td>
                <td>{this.props.AKA}</td>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.playerData}</td> 
                <td>
                    <input type="number" id = {"text_"+this.props.code} style={{width: "30px"},{marginRight: "10px"}}></input>
                    <button id = {"buybtn_"+this.props.code} onClick = {e => this.addHoldings(e)}className={"btn btn-sm btn-primary"} style={{marginRight: "10px"}}>購買</button>
                    <button id = {"sellbtn_"+this.props.code} onClick = {e => this.subHoldings(e)}className={"btn btn-sm btn-primary"}>售出</button>
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
                  shareCode :["0"],
                  shareAKA :["0"],
                  shareName :["Loading"],
                  sharePrice : ["0"],
                  holdings : ["Loading"],};
                   
  }
    componentDidMount(){
      setInterval(
        () => this.tick(),
        2000
      );
    }
    tick(){

       var stockAKA = ["Loading"] //股票編號
       var stockName = ["Loading"] //股票代號
       var stockPrice = ["0"]
       var stockCode = ["0"]
       var playerHoldings = ["Loading"] //玩家持股量
       this.checkSQL() 
       //玩家持股量
       firebase.database().ref("players/"+ user_id+"/mode2/").on("value", function(snapshot){
        playerHoldings = (Object.values(snapshot.val())).map(x => x)
       }, function (error){
         console.log("Error: "+error.code)
       })
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

           })
      })
      this.setState({uid : user_id});
      this.setState({shareAKA : stockAKA})
      this.setState({shareName : stockName})
      this.setState({shareCode : stockCode})
      this.setState({sharePrice : stockPrice})
      this.setState({holdings : playerHoldings})
    }
    checkSQL(){
      var sqlAmount = []
      firebase.database().ref("players/"+ user_id+"/mode2/").on("value", function(snapshot){
        sqlAmount = (Object.values(snapshot.val())).map(x => x)
      }, function (error){
      })
      console.log("SQLAmount: "+ sqlAmount.length + " shareAKA: "+ this.state.shareAKA.length)
      if (sqlAmount.length-1 <= this.state.shareAKA.length){
        console.log("SQLamount: "+ sqlAmount.length + " shareAmount: " +this.state.shareAKA.length)
        console.log("You need to update SQL first")
        this.updateSQL(sqlAmount.length-1)
      }
    }
     updateSQL(alength) {
      // Get a key for a new Post.
      var str = "" + (alength)
      var pad = "000"
      var ans = pad.substring(0,pad.length - str.length) + str
      var postData = "0"
      // Write the new post's data simultaneously in the posts list and the user's post list.
      firebase.database().ref("players/"+ user_id+"/mode2/").update({
          [ans] : postData
      })
      console.log("updated")
    }
    render(){
        const row = [];
        var userAsset = [];
        var userName = [];
        var holdings = Object.values(this.state.holdings)
        for (var index=0;index<=this.state.sharePrice.length - 1 ;index++){ //選擇顯示的股票數目
         // console.log('000'.substring(0))
                row.push(
                    <StockRow AKA = {this.state.shareAKA[index]} name = {this.state.shareName[index]} price = {this.state.sharePrice[index]} key ={index} uid = {this.state.uid} playerData = {holdings[index]} code={this.state.shareCode[index]}/>
                );
            }
        userAsset.push(<AssetRow key="1"/>)
        return (
          <div>
          <h5 className={"float-left"}>歡迎: {nickName}</h5>
          <h5 className={"float-right"}>你現擁有資產: {userAsset}</h5>
            <table className={"table table-light table-striped"}>
            <thead>
              <tr>
                  <th style={{width:"5%"}}>股票編號</th>
                  <th style={{width:"5%"}}>股票代碼</th>
                  <th style={{width:"25%"}}>股票名稱</th>
                  <th style={{width:"10%"}}>股票價格</th>
                  <th style={{width:"10%"}}>持股量</th>
                  <th style={{width:"45%"}}>操作</th>
              </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
            </table>
            <hr className = "mt-5" style={{height:"2px"},{borderWidth:"0"},{color:"gray"},{backgroundColor:"gray"}}></hr>
                <div className="float-sm-left text-sm-left">
                  <h5>規則:</h5>
                  <p className="small">1. 每十秒跳動一次(For Testing)</p>
                  <p className="small">2. 每人一開始有500萬現金</p>
                </div>
          </div> 
        );
    }

}

function redirect(){
  setTimeout(function(){
    document.getElementById("loader").style.display = "none";
  },2000)
}

ReactDOM.render(
    <StockTable />,
    document.getElementById('stockTable')
  );
