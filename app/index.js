var React = require ('react');
var ReactDOM = require ('react-dom');
require('./index.css');

//State
//lifecycle event
//UI of the component


class App extends React.Component{
    render(){
        return(
            <div>Hello Dunia</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app') );