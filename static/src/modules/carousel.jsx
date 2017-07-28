import React from 'react';
import Slider from 'react-slick';

class VideoItem extends React.Component{
  openModal(){
    console.log('abre!')
  }
  render(){
    return(
      <div className="tvp-video-item" onClick={this.openModal}>
        <img style={{margin:"auto"}} src={this.props.obj.asset.thumbnailUrl}/>
      </div>
    );
  }
};

class Carousel extends React.Component{
  constructor(props) {
    super(props)
  }
  eachItem(obj, index){
    return(
      <div key={index}>
        <VideoItem obj={obj}/>
      </div>
    );
  }
  render(){
    const settings = {
      dots: true,
      infinite: true,
      centerMode:true,
      centerPadding:"25% 0 0",
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    },
    styles = {
      margin: "0 auto",
      padding: "40px",
      width: "1px",
      minWidth: "100%",
      height: "50%",
      color: "#333",
      background: "#eaeaea"
    };
    return (
      <div className="container" style={styles}>
        <Slider {...settings}>
          {this.props.videosObj.map(this.eachItem)}
        </Slider>
      </div>
    );
  }
};
module.exports = Carousel;
