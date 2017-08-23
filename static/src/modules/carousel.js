import React from 'react';
import PropTypes from 'prop-types';
import injectSheet, {ThemeProvider,jss} from 'react-jss';
import Utils from '../utils.js';

import styles from  '../style_modules/carousel_styles.js';

import Slider from 'react-slick';
import Product from './product.js';
import VideoItem from './videoItem.js';

const ToStyle = props => {
  const videosArray = props.videosArray || [];
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
    <div className={props.classes.tvp_carousel_container}>
      <Slider {...sliderSettings}>
        {videosArray.map(eachItem,props)}
      </Slider>
    </div>
  );
};

function eachItem(obj, index){
  // retrieve originalProps with 'this'
  const originalProps = Object.assign({}, this);
  // avoid style related conflicts between modules, sremove classes,sheet and theme from props obj.
  Utils.removeObjectProperties(originalProps,['videosArray','classes','sheet','theme']);

  return(
    <div key={index}>
      <VideoItem currentVideo={obj} {...originalProps}/>
    </div>
  );
} 

const Styled = injectSheet(styles)(ToStyle);

class Carousel extends React.Component{
  render(){
    jss.setup({
      insertionPoint: document.getElementById('tvp_'+this.props.name+'_root')
    });
    return (
      <ThemeProvider theme={this.props.config}>
        <Styled {...this.props}/>
      </ThemeProvider>
    );
  }
};

Carousel.propTypes = {
  name: PropTypes.string.isRequired,
  videosArray: PropTypes.array.isRequired
};

module.exports = Carousel;