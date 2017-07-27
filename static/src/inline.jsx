import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './modules/carousel.jsx';

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
