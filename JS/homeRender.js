'use strict';

const div1ele = <h1>Hello World</h1>;


class Hello extends React.Component{
    render(){
        return <div style={{backgroundColor:"red"}}><h1>Hello World</h1></div>
    }
}

ReactDOM.render(<Hello />, document.getElementById('div1'));