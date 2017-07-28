import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './modules/carousel.jsx';
import $ from 'jquery';

class Inline extends React.Component{
  render(){
    return (
      <div>
        {this.props.name} Widget 
        <Carousel videosObj={this.props.videosObj}/>
      </div>
    );
  }
}

var url = 'https://api.tvpage.com/v1/channels/66133904/videos?X-login-id=1758799&od=DESC&o=date_created&p=0&n=1000&callback=tvp_75';
Promise.resolve($.get({
      url: url,
      type: 'GET',
      crossDomain: true,
      dataType: 'jsonp'
    }))
.then((result)=>{
  ReactDOM.render(<Inline name="Inline" videosObj={result}/>,document.getElementById("tvp-carousel"));
})
.catch((e)=>{
  console.log(e);
});
