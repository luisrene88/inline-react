import React, {Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet, {ThemeProvider,jss} from 'react-jss';

// import styles from  '../style_modules/videoItem_styles';

import Resize from  'react-resize-to-aspect-ratio';
import Modal from 'react-modal';
import Product from './product';

class VideoItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      currProducts:{}
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
      currProducts: this.props.currentVideo.videoProducts
    });
  }

  render(){
    var styles = {
      'width':'100%',
      'height':'100%',
      'backgroundImage':'url('+this.props.currentVideo.asset.thumbnailUrl+')',
      'backgroundSize':'cover',
      'backgroundPosition':'center',
      'backgroundRepeat':'no-repeat'
    },
    modalStyles = {
      overlay : {
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
      content : {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: '40px',
        bottom: '40px',
        border: '1px solid rgb(204, 204, 204)',
        backgroundColor: 'rgb(255, 255, 255)',
        overflow: 'hidden',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        width: '50%',
        transform: 'translate(-50%, -50%)'
      }
    },
    getParent = function(){
      return document.querySelector('#tvp_'+this.props.targetEl+'_modal_holder');
    };
    return(
      <div>
        <Resize aspectRatio="16:9">
          <div onClick={this.openModal.bind(this)}>
            <div style={styles}></div>
          </div>
        </Resize>
        <div style={{ position:'relative', textAlign:'center'}} >{this.props.currentVideo.title}</div>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          style={modalStyles}
          parentSelector={getParent.bind(this)}
          bodyOpenClassName={'tvp_'+this.props.targetEl + "_modal_open"}
          contentLabel={'tvp_'+this.props.targetEl + '_modal'}
          portalClassName={'tvp_'+this.props.targetEl + '_modal_container'}
          className={{
            base: 'tvp_'+this.props.targetEl + '_modal',
            afterOpen: 'tvp_'+this.props.targetEl + '_modal_afterOpen',
            beforeClose: 'tvp_'+this.props.targetEl + '_modal_beforeClose'
          }}
          overlayClassName={{
            base: 'tvp_'+this.props.targetEl + '_modal_overlay',
            afterOpen: 'tvp_'+this.props.targetEl + '_modal_overlay_afterOpen',
            beforeClose: 'tvp_'+this.props.targetEl + '_modal_overlay_beforeClose'
          }}
        >
          <h2>{this.props.currentVideo.title}</h2>
          <div className="box1">
          </div>
          <Product producItems={this.state.currProducts} {...this.props}/>
        </Modal>
      </div>
    );
  }
};

VideoItem.propTypes = {
  targetEl: PropTypes.string.isRequired
};

module.exports = VideoItem;