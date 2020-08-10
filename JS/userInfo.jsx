
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
      class UserInfoComponent extends React.Component{
        constructor(props){
          super(props);
          this.state={
            name : "Loading" 
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
        render(){
            return(
              <div></div>
            )
        }
      }

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
        }
        // Render the whole component
        render(){
          return;
        }
      }

      // Info Options
      class InfoOptions extends React.Component{
        // Add constructor
        constructor(props){
          super(props);
          this.state = {
            changeName = false,
            changePic = false,
            profilePic = null
          }
        }

        // Render Info Options
        render(){
          return;
        }
      }

      // Info Details
      class InfoDetails extends React.Component{
        // Add Constructor
        constructor(props){
          super(props);
          this.state = {

          };
        } 
        // Render Info Details
        render(){
          return;
        }
      }

ReactDOM.render(
  <UserInfoComponent />,
  document.getElementById('martinTest')
);