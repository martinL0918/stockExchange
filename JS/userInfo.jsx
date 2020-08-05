    import React from '@babel/preset-react';
    import Helmet from 'react-helmet';
    
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
            })
            console.log(user.uid)
            if (user.uid != "lnUEYL7LL2auR6KyvCfxCyy85P73" && user.uid !="eiQEHqoNQXgW7cLNFroOSlpVBCc2"){
              setInterval(notShow,1000) 
              notShow()
              alert("你並不是管理員，死87")
              setTimeout(redirect,2000)
            } 
        }
        else {
          alert("你並不是管理員，死87")
          notShow()
          setTimeout(redirect,2000)
        }
      });

      const TitleComponent = ({title}) => {
        var defaultTitle = 'Your Info';
        return(
            <Helmet>
                <title>{title ? title : defaultTitle}</title>
            </Helmet>
        )
      };