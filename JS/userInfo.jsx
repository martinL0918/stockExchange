    import React from 'react';
    import { Route } from 'react-router';
    import { TitleComponent } from './JS/TitleComponent.jsx'
    
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
          firebase.database().ref("players/"+ user.uid).on("value", function(snapshot){
          nickName = snapshot.val().name
        }, function (error){
          console.log("Error: "+error.code)
        })
          logIn = "true"
          console.log(nickName)
          navRendered.tick()
        }
        else{
            logIn = "false"
            navRendered.tick()
        }
      });
    
      class userInfoComponent extends React.Component{
        constructor(props){
          super(props);
          this.state={

          }
        }
        render(){
          
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

      export default(
        <Route>
          <Route path={"/" + nickName} component={userInfoComponent} />
        </Route>
      );