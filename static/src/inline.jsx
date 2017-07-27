var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('./modules/carousel.jsx');

class Inline extends React.Component{
  render(){
    return (
      <div>
        Widget 12312a3s1da {this.props.name}
        <Carousel />
      </div>
    );
  }
}
ReactDOM.render(<Inline name="Inline"/>,document.getElementById("inline"));
