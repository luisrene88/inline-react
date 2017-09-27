import React, {Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet, {ThemeProvider,jss} from 'react-jss';
import Utils from '../utils';

import styles from  '../style_modules/carousel_styles';

import Slider from 'react-slick';
import VideoItem from './videoItem';
import Modal from 'react-modal';
import ModalContent from  './modalContent'

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
    <div className={props.classes.tvp_carousel_container}>
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
      <VideoItem handleClick={this.handleClick} currentVideo={obj} {...originalProps}/>
    </div>
  );
} 

const Styled = injectSheet(styles)(ToStyle);

class Carousel extends Component{
  constructor(props){
    super(props);

    this.state = {
      video: null,
      modalIsOpen: false
    };
  }
  closeModal(){
    this.setState({
      video: null,
      modalIsOpen: false
    });
  }
  handleClick(vid, isOpen){
    this.setState(() => {
      let newState = {};
      newState['video'] = vid;
      newState['modalIsOpen'] = isOpen;
      return newState;
    });
  }
  render(){
    jss.setup({
      insertionPoint: document.getElementById('tvp_'+this.props.targetEl+'_root')
    });
    return (
      <ThemeProvider theme={this.props}>
        <div>
          <Styled handleClick={this.handleClick.bind(this)} {...this.props}/>
          {this.state.video && 
            <Modal 
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal.bind(this)} 
            contentLabel={this.state.video.title}
            >
              <ModalContent closeModal={this.closeModal.bind(this)} video={this.state.video} config={this.props}/>
            </Modal>
          }
        </div>
      </ThemeProvider>
    );
  }
};

Carousel.propTypes = {
  targetEl: PropTypes.string.isRequired
};

module.exports = Carousel;