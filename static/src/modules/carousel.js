import React, {Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet, {ThemeProvider,jss} from 'react-jss';
import jssCache from 'jss-cache';
import Utils from '../utils';

import styles from  '../style_modules/carousel_styles';

import Slider from 'react-slick';
import VideoItem from './videoItem';

const ToStyle = props => {
  const videoList = props.videoList || [];
  const sliderSettings = {
    dots: true,
    infinite: true,
    centerMode:false,
    centerPadding:"0",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className={props.classes.carousel_container}>
      <Slider {...sliderSettings}>
        {videoList.map(eachItem,props)}
      </Slider>
    </div>
  );
};

function eachItem(obj, index){
  // retrieve originalProps with 'this'
  const originalProps = Object.assign({}, this);
  // avoid style related conflicts between modules, sremove classes,sheet and theme from props obj.
  Utils.removeObjectProperties(originalProps,['videoList','classes','sheet','theme']);

  return(
    <div key={index}>
      <VideoItem currentVideo={obj} {...originalProps}/>
    </div>
  );
} 

const Styled = injectSheet(styles)(ToStyle);
const createGenerateClassName = () => {
  let random = Math.floor(Math.random().toString());
  let current_date = (new Date()).valueOf().toString();
  return (rule, sheet) => `tvp_${current_date + random}`
};

class Carousel extends Component{
  render(){
    console.log(document.getElementById('tvp_'+this.props.targetEl+'_styles_holder'))
    jss.use(jssCache);
    jss.setup({createGenerateClassName},{
      insertionPoint: document.getElementById('tvp_'+this.props.targetEl+'_styles_holder')
    });
    return (
      <ThemeProvider theme={this.props}>
        <Styled {...this.props}/>
      </ThemeProvider>
    );
  }
};

Carousel.propTypes = {
  targetEl: PropTypes.string.isRequired
};

module.exports = Carousel;