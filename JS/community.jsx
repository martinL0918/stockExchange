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
    }
  });

  class Card extends React.Component{
      constructor(props){
          super(props)
      }
      render(){
          const cardStyle = {
              margin: "0 auto",
              width: "50%",
              marginBottom: "40px"
          };
          return(
          
                <div className="card border-0" style={cardStyle}>
                <div className="card-header bg-dark">  
                    <h5 className="card-title text-left"><img src="https://www.flaticon.com/premium-icon/icons/svg/202/202333.svg" className="icon-image" ></img>索羅斯股市新聞中心</h5>
                    </div>
                    <div className="card-body p-0 pl-2">
                        <p className="card-text text-dark bg-white text-left pb-4 post-font "><strong>{this.props.content}</strong></p>
                        <p className="card-text bg-white text-left">
                            <small className="text-muted postTime-size">發佈於:</small>
                        </p>
                    </div>

                </div>
          );
      }
  }
  /*
          var playerName =this.props.playerData
          var playerData = Object.values(this.props.playerData)*/
  class CardHub extends React.Component{
      constructor(props){
          super(props)
          this.state = {
              msg : ""
          }
      }
      componentDidMount(){
            setInterval(
              () => this.tick()
              ,2000);
      }
      tick(){
          var msgArray = [];
        firebase.database().ref("community/").on("value", function(snapshot){
            msgArray = Object.values(snapshot.val())
          }, function (error){
            console.log("Error: "+error.code)
          }) 
          this.setState({msg : msgArray})
      }
      render(){
          const row = [];
          for (var index=this.state.msg.length-1;index>=0;index--){ //選擇顯示的股票數目
           // console.log('000'.substring(0))
                  row.push(
                      <Card key={index} content={this.state.msg[index]} />
                  );
              }
          return (
            <div>
                <div className="container">
                <h1 style={{marginBottom:"30px"}}>股市新聞</h1>
                    {row}
                </div>
            </div> 
          );
      }
  
  }
  ReactDOM.render(
      <CardHub />,
      document.getElementById('cardBody')
    );
  