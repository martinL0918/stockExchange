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
      this.setState({shareCode : stockCode})
      this.setState({shareAKA : stockAKA})
      this.setState({shareName : stockName})
      this.setState({sharePrice : stockPrice})
      this.setState({holdings: playerHoldings})
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

function redirect(){
  setTimeout(function(){
    document.getElementById("loader").style.display = "none";
  },2000)
}

ReactDOM.render(
    <StockTable />,
    document.getElementById('stockTable')
  );
