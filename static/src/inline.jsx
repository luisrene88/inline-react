var React = require('react');
var ReactDOM = require('react-dom');
class Inline extends React.Component{
  render(){
    return (<div>Widget {this.props.name}</div>);
  }
}
ReactDOM.render(<Inline name="Inline"/>,document.getElementById("inline"));
