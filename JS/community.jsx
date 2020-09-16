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
    var adminInput = (
        <div className="mb-5" style={{position:"relative"}}>
           <div style={{height:"120px"}} className="p-0">
            <textarea id="newsContent" style={{width:"500px",fontSize:"13px",height:"100%",paddingRight:"30px"}} placeholder="要新增的新聞"></textarea>
            <button className="btn btn-primary" style={{bottom:"0",position:"absolute"}} id="addPost" onClick={addPost}>新增</button>
           </div>
           
       </div>
     );

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
        if (user.uid != "lnUEYL7LL2auR6KyvCfxCyy85P73" && user.uid !="eiQEHqoNQXgW7cLNFroOSlpVBCc2"){
            adminInput = (<div></div>)
        }
    } else {
        adminInput = (<div></div>)
    }
  });
function addPost() {
    const month = ["January",
                   "February",
                   "March",
                   "April",
                   "May",
                   "June",
                   "July",
                   "August",
                   "September",
                   "October",
                   "November",
                   "December"]
    var key = firebase.database().ref("community").push().key
    var content = document.getElementById("newsContent").value
    var currentTime = new Date();
    var dd = currentTime.getDate();
    var mm = currentTime.getMonth();
    console.log("Month:" + mm)
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    currentTime = month[mm] +" "+ dd +" " + hour + ":"+ minute + ":"+ second 
    console.log(currentTime)
    firebase.database().ref("community/"+key).update({
        content : content,
        time : currentTime
    })
}

  class Card extends React.Component{
      constructor(props){
          super(props)
          this.state = {adminDisplay : (<div></div>)}
      }
      deletePost(btn) {
        var targetID = btn.target.id
        console.log(targetID)
        firebase.database().ref("community/"+targetID).remove()
    }
    componentDidMount(){
        setInterval(
          () => this.tick()
          ,2000);
  }
    tick(){
        var adminDelete= (<div></div>)
        if (user_id == "lnUEYL7LL2auR6KyvCfxCyy85P73" || user_id =="eiQEHqoNQXgW7cLNFroOSlpVBCc2"){
            adminDelete = (
                <button type="button" className="close float-right" aria-label="Close" >
                <span aria-hidden="true" className="text-white" id={this.props.id} onClick={e => this.deletePost(e)}>&times;</span>
                </button>
             );
            this.setState({adminDisplay : adminDelete})
        }else {
            adminDelete = (<div></div>)
            this.setState({adminDisplay : adminDelete})
        }
    }   
      render(){
          const cardStyle = {
              margin: "0 auto",
              width: "50%",
              marginBottom: "40px"
          };
        /*
            DONALD 修改下方HTML需知:
            {this.props.time} = 發佈時間
            {this.props.content} = 文字內容
            {this.state.adminDisplay} = 刪POST果個交叉 如果要改交叉樣式，要睇翻上面幾行 adminDelete = (...); 裹面就係
        */
          return(

                <div className="card cardBorder" style={cardStyle}>
                <div className="card-header bg-dark">  
                <h5 className="card-title float-left card-title-font"><img src="https://www.flaticon.com/premium-icon/icons/svg/202/202333.svg" className="icon-image" ></img>索羅斯股市新聞中心</h5>
                {this.state.adminDisplay}
                </div>
                    <div className="card-body p-0 pl-2">
                        <p className="card-text text-dark bg-white text-left pb-4 post-font my-1"><strong>{this.props.content}</strong></p>
                        <p className="card-text bg-white text-left">
                            <small className="text-muted postTime-size">發佈於: {this.props.time}</small>
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
          var msgID = [];
        firebase.database().ref("community/").on("value", function(snapshot){
            msgID = Object.keys(snapshot.val())
            msgArray =Object.values(snapshot.val())
          }, function (error){
            console.log("Error: "+error.code)
          }) 
          this.setState({msg : msgArray})
          this.setState({msgID : msgID})
      }
      render(){
          const row = [];
       
          for (var index=this.state.msg.length-1;index>=0;index--){ //選擇顯示的股票數目
           // console.log('000'.substring(0))
                  row.push(
                      <Card key={index} id= {this.state.msgID[index]} content={this.state.msg[index].content} time={this.state.msg[index].time}/>
                  );
              }
          return (
            <div>
                <div className="container">
                <h1 style={{marginBottom:"30px"}}>股市新聞</h1>
                {adminInput}
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