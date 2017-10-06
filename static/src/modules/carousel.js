import React, {Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet, {jss} from 'react-jss';

import Utils from '../libs/utils';

import styles from  '../style_modules/carousel_styles';

import Slider from 'react-slick';
import VideoItem from './videoItem';
import Modal from 'react-modal';
import ModalContent from  './modalContent'

@injectSheet(styles)
class Carousel extends Component{
  constructor(props){
    super(props);

    this.state = {
      video: null,
      modalIsOpen: false,
      dragging: false
    };
  }
  closeModal(){
    this.setState({
      video: null,
      modalIsOpen: false,
      dragging: false
    });
  }
  eachItem(obj, index){
    // retrieve originalProps with 'this'
    const originalProps = Object.assign({}, this.props);
    // avoid style related conflicts between modules, sremove classes,sheet and theme from props obj.
    Utils.removeObjectProperties(originalProps,['videoList','classes','sheet','theme','rule']);

    return(
      <div key={index}>
        <VideoItem handleClick={this.handleClick.bind(this)} currentVideo={obj} {...originalProps}/>
      </div>
    );
  } 
  handleClick(vid, isOpen, e){
    if (this.state.dragging) return;
    this.setState(() => {
      let newState = {};
      newState['video'] = vid;
      newState['modalIsOpen'] = isOpen;
      return newState;
    });
  }
  render(){
    const {carousel_settings, classes, videoList} = this.props;
    const { video, modalIsOpen } = this.state;
    carousel_settings.dots = (videoList.length > 2 && videoList.length < 10 ? carousel_settings.dots : false);
    return (
        <div>
          <div className={classes.carousel_container}>
            <Slider afterChange={() =>{this.setState({dragging:false})}} beforeChange={() => {this.setState({dragging:true})}} {...carousel_settings}>
              {this.props.videoList.map(this.eachItem.bind(this))}
            </Slider>
          </div>
          {video && 
            <Modal 
             className={{
              base: classes.tvp_modal_base
            }}
            overlayClassName={{
              base: classes.tvp_modal_overlay
            }}
            isOpen={modalIsOpen}
            onRequestClose={this.closeModal.bind(this)} 
            contentLabel={video.title}
            >
              <ModalContent closeModal={this.closeModal.bind(this)} video={video} config={this.props}/>
            </Modal>
          }
        </div>
    );
  }
};

Carousel.propTypes = {
  carousel_settings: PropTypes.object.isRequired,
  videoList: PropTypes.array.isRequired
};

module.exports = Carousel;