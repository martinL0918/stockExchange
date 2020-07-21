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
      console.log("Welcome "+ user.name)  
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
              [newStockAKA]: newStockPrice
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
          var targetName
          var newPrice = document.getElementById("text_"+targetId).value
        //get stock name
            firebase.database().ref("stocks/mode2/"+targetId).on("value", function(snapshot){
                    targetName = Object.keys(snapshot.val())[0];
                    console.log(targetName)
              }, function (error){
                console.log("Error: "+error.code)
        })
        //update price
        if (!isNaN(newPrice)){
            firebase.database().ref("stocks/"+"/mode2/"+targetId).update({
                [targetName] : newPrice
            })
         }
         else{
             alert("欄位: "+targetId+"不是正確數字")
         }
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
                    <button onClick = {e => this.setPrice(e)} id = {this.props.code} className={"btn btn-sm btn-primary"}>設定價格</button>
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
                    sharePrice : [0]};
                     
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
         //股票代碼
         firebase.database().ref("stocks/mode2").on("value", function(snapshot){
        //股票編號
           stockCode = Object.keys(snapshot.val())
          Object.values(snapshot.val()).forEach((element,index) => {
            stockAKA[index] = Object.keys(element)[0]
          });
          //股票名稱
          Object.values(snapshot.val()).forEach((element,index) => {
            stockName[index] = Object.values(element)[1]
          });
          Object.values(snapshot.val()).forEach((element,index) => {
            stockPrice[index] = Object.values(element)[0]
          });
        }, function (error){
          console.log("Error: "+error.code)
        })
        this.setState({uid : user_id});
        this.setState({shareAKA : stockAKA})
        this.setState({shareName : stockName})
        this.setState({shareCode : stockCode})
        this.setState({sharePrice : stockPrice})
      }
      render(){
          const row = [];
          for (var index=0;index<=this.state.sharePrice.length - 1 ;index++){ //選擇顯示的股票數目
                  row.push(
                      <StockRow AKA = {this.state.shareAKA[index]} name = {this.state.shareName[index]}price = {this.state.sharePrice[index]} key ={index} uid = {this.state.uid} code={this.state.shareCode[index]}/>
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
                  <th style={{width:"30%"}}>股票名稱</th>
                  <th style={{width:"10%"}}>股票價格</th>
                  <th style={{width:"45%"}}>Admin操作</th>
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
  