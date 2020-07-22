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

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      logIn = "true"
    }
    else{
        logIn = "false"
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
        this.state = {logged : "登入/創帳號"}
    }
    componentDidMount(){
        setInterval(
            () => this.tick(),
            2000
          );
    }
    tick(){
        if (logIn == "true"){
            this.setState({logged : "已登入"})
        }
        else{
            this.setState({logged : "登入/創帳號"})
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
                </ul>
                <ul className="navbar-nav ml-auto">
                    <BootstrapSwitchButton checked={true} onstyle="outline-light" onlabel="Dark"
                    offstyle="outline-light" offlabel="Light" />
    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop"
                        data-toggle="dropdown">
                        <i className="fas fa-language"></i>語言</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">中文</a>
                            <a className="dropdown-item" href="#">English</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="acc.html">
                            <i className="far fa-user-circle"></i>{this.state.logged}</a>
                    </li>
                </ul>
              </nav>
        </div>
        );
    }
}

ReactDOM.render(footer, document.getElementById('footer'));
ReactDOM.render(<NavBar />, document.getElementById('navb'));  