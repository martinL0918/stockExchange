
    //import { Route } from 'react-router';
    //import { TitleComponent } from './JS/TitleComponent.jsx'
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


      const database = firebase.database();
      var user_id;
      var nickName = "loading";
      var logIn

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          firebase.database().ref("players/"+ user.uid).on("value", function(snapshot){
          nickName = snapshot.val().name
        }, function (error){
          console.log("Error: "+error.code)
        })
          logIn = "true"

        }
        else{
            logIn = "false"
        }
      });

      const withTitle = ({ component: Component, title}) => {
          return class Title extends Component{
              render() {
                  return (
                    <React.Fragment>
                        <TitleComponent title={title} />
                        <Component {...this.props} />
                    </React.Fragment>
                  );
              }
          }
      }

      // The Main Component
      class UserInfoComponent extends React.Component{
        // add constructor
        constructor(props){
          super(props);
          this.state = {
            userName: nickName,
          }
        }
        
        // 讀取玩家姓名
        tick(){
            console.log(nickName)
        }
        componentDidMount(){
          setInterval(
            () => this.tick()
            ,2000);
        }

        // Render the whole component
        render(){
          return(
            <div className="container vertical-center horizontal-center">
              <h1>Hi</h1>
              <div className="d-flex flex-row justify-content-center shadow">
                <InfoOptions className="Personal-options col-md-4 col-sm-12" />
                <InfoDetails className="Personal-Info col-md-8 col-sm-12"/>
              </div>
            </div>
          )
      }
    }

      // Info Options
      class InfoOptions extends React.Component{
        // Add constructor
        constructor(props){
          super(props);
          this.state = {
            changeName: false,
            changePic: false,
            profilePic: null
          }
        }

        // Render Info Options
        render(){
          return(
            <div>
              <div id="profile-img" ></div>
                <div className="horizontal-center vertical-center center-justify-list detail-options-div" >
                <button href="#" type="button" className="btn btn-block btn-outline-info btn-square">Change your name</button>
                <button href="#" type="button" className="btn btn-block btn-outline-light btn-square">Change your profile picture</button>
              </div>
            </div>
          );
        }
      }

      // Info Details
      class InfoDetails extends React.Component{
        // Add Constructor
        constructor(props){
          super(props);
          this.state = {
            userName: 'Loading',
            userJoinDate: 'DD/MM/YYYY',
            userStatus: 'Loading',
            userCurrent: '$ Loading',
          };
        } 
        // Render Info Details
        render(){
          return(
            <div className="d-flex justify-content-center">
              <ul className="vertical-center left-justify-list personal-info-list">
                <li>Name: {this.state.userName}</li>
                <li>Joined Date: {this.state.userJoinDate}</li>
                <li>Status: {this.state.userStatus}</li>
                <li>Current: {this.state.userCurrent}</li>
              </ul>
            </div>
          );
        }
      }

ReactDOM.render(
  <UserInfoComponent />,
  document.getElementById('user-info-component')
);