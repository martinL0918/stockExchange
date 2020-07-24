'use strict';

const div1ele = <h1>Hello World</h1>;
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
firebase.initializeApp(firebaseConfig);

class Hello extends React.Component{
    render(){
        return <div style={{backgroundColor:"red"}}><h1>Hello World</h1></div>
    }
}

ReactDOM.render(<Hello />, document.getElementById('div1'));