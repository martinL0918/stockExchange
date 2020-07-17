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



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    user_id = user.uid;
    var providerData = user.providerData;
    console.log("Welcome "+ user.name)  // ...
  } else {
    alert("請先登入")
  }
});
class StockRow extends React.Component{
    constructor(props){
      super(props)
      this.state = {uid : "Error"}
    }
    componentDidMount(){
      setTimeout(
        () => this.tick(),
        2000
      );
    }
    tick(){
      this.setState({uid : this.props.uid});
    }
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
    this.state = {uid : "Error"};
  }
    componentDidMount(){
      setTimeout(
        () => this.tick(),
        3000
      );
    }
    tick(){
      this.setState({uid : user_id});
      console.log(this.state.uid)
    }
    render(){
        const row = [];
        var name = Object.keys(this.props.stockMarket)
        var price = Object.values(this.props.stockMarket)
        var temp = "this.props.playerData."+this.state.uid
        var holdings = Object.values(this.props.playerData.lnUEYL7LL2auR6KyvCfxCyy85P73.mode2)
        name.forEach((share,index)=> {
                row.push(
                    <StockRow name = {share} price = {price[index]} key ={share} uid = {this.state.uid} playerData = {holdings[index]}/>
                );
            })
        return (
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
        );
    }

}

const testDatabase = [
    {
  "stocks" : {
      "CBY" : "1139.16",
      "DME" : "497.27",
      "EFS" : "1316.14",
      "EPC" : "1361.03",
      "SFL" : "589.05",
      "lastUpdate" : 1593492854499
    }
  }
];

const playerData = [
    {
    "players" : {
        "M3dqOFeDuZgOGYomaPvQcbTzyA22" : {
          "email" : "donald@donald.com",
          "mode1" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "mode2" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "mode3" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "name" : "donald"
        },
        "hNfKtPdUyzgkZMJMl0yvXCNAq572" : {
          "email" : "Haha@gmail.com",
          "mode1" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "mode2" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "mode3" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "name" : "BD"
        },
        "i79a7iKwU1XG6aNjkuDeki6puGT2" : {
          "email" : "admin@admin.com",
          "mode1" : {
            "hold_1" : 2,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : "4997445.64"
          },
          "mode2" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "mode3" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "name" : "Admin"
        },
        "lnUEYL7LL2auR6KyvCfxCyy85P73" : {
          "email" : "martin@martin.com",
          "mode1" : {
            "hold_1" : 2014,
            "hold_2" : 1500,
            "hold_3" : 1000,
            "hold_4" : 800,
            "hold_5" : 1300,
            "money" : "1760511.27"
          },
          "mode2" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "mode3" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "name" : "martin"
        }
      }
    }
]
ReactDOM.render(
    <StockTable stockMarket={testDatabase[0].stocks} playerData={playerData[0].players}/>,
    document.getElementById('stockTable')
  );
var test = Object.values(playerData[0].players.lnUEYL7LL2auR6KyvCfxCyy85P73.mode2);
/*  database[0].stocks.forEach((share)=> {
    console.log(share)
})*/