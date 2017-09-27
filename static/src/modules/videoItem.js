import React, {Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet, {ThemeProvider,jss} from 'react-jss';

// import styles from  '../style_modules/videoItem_styles';

import Resize from  './resize';


class VideoItem extends Component{
  constructor(props) {
    super(props);
  }
  handleClick() {
    window.currentVideo = this.props.currentVideo;
    this.props.handleClick(this.props.currentVideo, true);
  }
  handleChange(e){
    console.log(e);
  }
  render(){
    var styles = {
      'width':'100%',
      'height':'100%',
      'backgroundImage':'url('+this.props.currentVideo.asset.thumbnailUrl+')',
      'backgroundSize':'cover',
      'backgroundPosition':'center',
      'backgroundRepeat':'no-repeat'
    };

    return(
      <div>
        <Resize aspectRatio="16:9" onChange={this.handleChange.bind(this)}>
          <div onClick={this.handleClick}>
            <div style={styles}></div>
          </div>
        </Resize>
        <div style={{ position:'relative', textAlign:'center'}} >{this.props.currentVideo.title}</div>
      </div>
    );
  }
};

VideoItem.propTypes = {
  targetEl: PropTypes.string.isRequired
};

module.exports = VideoItem;