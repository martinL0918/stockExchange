//import en from "../Locale/en/translate.json.json";
//import hk from "../Locale/zh-hk/translate.json";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

var firebaseConfig = {
    apiKey: config.apiKey,
    authDomain:  config.authDomain,
    databaseURL:  config.databaseURL,
    projectId:  config.projectId,
    storageBucket:  config.storageBucket,
    messagingSenderId:  config.messagingSenderId,
    appId: config.appId,
    measurementId:  config.measurementId,
}
var logIn = "false";
var adminIn = "false";
var nickName = "載入中";

// To check did the user login
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in. 
      firebase.database().ref("players/"+ user.uid).on("value", function(snapshot){
      nickName = snapshot.val().name
        if (user.uid == "lnUEYL7LL2auR6KyvCfxCyy85P73" || user.uid =="eiQEHqoNQXgW7cLNFroOSlpVBCc2"){
            adminIn = "true"
            console.log("Admin entered the system")
            }
        logIn = "true"
    }, function (error){
      console.log("Error: "+error.code)
    })
    }
    else{
        logIn = "false"
        console.log("You are not admin")
    }
  });

const footer = (
    <div>
        <footer>
            <div className="border-line"></div>
            <h6>Created by Martin Leung & Donald Tsang (2020)</h6>
        </footer>
    </div>
);


class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {logged : (
            <a className="nav-link" href="acc.html">
            <i className="far fa-user-circle" ></i>登入/創帳號
            </a>
        ),
        isAdmin : (
             <div>     
           </div>
         ),
        isChecked : false} //default value of the button
    }
    componentDidMount(){
        setInterval(() => this.tick(),2000)
    }
    tick(){
        if (logIn == "true"){
            this.setState({logged : (
                <a className="nav-link" onClick={this.logOut}>
                <i className="far fa-user-circle" ></i>{nickName}
                </a>
            )})
        }
        if (adminIn == "true"){
            this.setState({isAdmin : (
                  <a className="dropdown-item" href="admin.html">Admin Page</a>
            )})
        }
  
    }
    logOut(){
        firebase.auth().signOut().then(function() {
            alert("你登出了")
          })
          location.reload()
    }
    //Theme Button
    changeStyle(){
        if (this.state.isChecked == false){ //false 即係之前未按過，而家第一次按所以換做light theme
            document.getElementById("pageStyle").setAttribute("href", "CSS/light.css");
            this.setState({isChecked : true})

        }
        else{ //true 即係之前按過，而家再按所以換翻做dark theme
            document.getElementById("pageStyle").setAttribute("href", "CSS/dark.css");  
            this.setState({isChecked : false})
        }
    }
    render(){
        return(
            <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <span className="navbar-text nav-title">股票交易市埸 | Stock Overflow</span>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="community.html">股市新聞</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">社群</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="gameMode.html">股市</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <BootstrapSwitchButton checked={true} 
                    onstyle="outline-light" onlabel="Dark"	
                    offstyle="outline-light" offlabel="Light" 
                    width={200} style="ios"
                    onChange = {() => this.changeStyle()} />
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop"
                        data-toggle="dropdown">
                        <i className="fas fa-language"></i>語言</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">中文</a>
                            <a className="dropdown-item" href="#">English</a>
                            {this.state.isAdmin}

                        </div>
                    </li>
                    <li className="nav-item">
                        {this.state.logged}
                    </li>
                </ul>
              </nav>
        </div>
        );
    }
}

ReactDOM.render(footer, document.getElementById('footer'));
var navRendered = ReactDOM.render(<NavBar />, document.getElementById('navb'));  