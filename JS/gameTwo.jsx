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
                  holdings : ["Loading","Loading","Loading","Loading","Loading"],
                  shareName :["Loading","Loading","Loading","Loading","Loading"],
                  sharePrice : ["0","0","0","0","0"]};
                  
  }
    componentDidMount(){
      setInterval(
        () => this.tick(),
        2000
      );
    }
    tick(){
       var tempArray = ["Loading","Loading","Loading","Loading","Loading"] //玩家持股量
       var stocKName = ["Loading","Loading","Loading","Loading","Loading"] //股票代號
       var stockPrice = ["0","0","0","0","0"]
       //玩家持股量
       firebase.database().ref("players/"+ user_id+"/mode2/").on("value", function(snapshot){
         tempArray = [snapshot.val().hold_1,snapshot.val().hold_2,snapshot.val().hold_3,snapshot.val().hold_4,snapshot.val().hold_5]
       }, function (error){
         console.log("Error: "+error.code)
       })
       //股票代號
       firebase.database().ref("stocks/mode1/").on("value", function(snapshot){
        stocKName = (Object.keys(snapshot.val())).map(x => x)
        stockPrice = (Object.values(snapshot.val())).map(x => x)
      }, function (error){
        console.log("Error: "+error.code)
      })
      this.setState({uid : user_id});
      this.setState({holdings: tempArray})
      this.setState({shareName : stocKName})
      this.setState({sharePrice : stockPrice})
    }
    render(){
        const row = [];
        var userAsset = [];
        var userName = [];
        var holdings = Object.values(this.state.holdings)
        for (var index=0;index<this.state.sharePrice.length - 1;index++){ //選擇顯示的股票數目
                row.push(
                    <StockRow name = {this.state.shareName[index]} price = {this.state.sharePrice[index]} key ={index} uid = {this.state.uid} playerData = {holdings[index]}/>
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
                <th>股票編號</th>
                <th>股票價格</th>
                <th>持股量</th>
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
