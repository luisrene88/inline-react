import React, {Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet,{jss} from 'react-jss';
import Dotdotdot from 'react-dotdotdot';
import styles from  '../style_modules/videoItem_styles';

@injectSheet(styles)
class VideoItem extends Component{
  constructor(props) {
    super(props);
  }
  videoClick(e) {
    this.props.handleClick(this.props.currentVideo, true, e);
  }
  render(){
    const { classes, currentVideo} = this.props;
    return(
      <div id="video_container">
        <div className={classes.video_wrapper} onClick={this.videoClick.bind(this)}>
          <div className={classes.video_item} style={{'backgroundImage':'url('+currentVideo.asset.thumbnailUrl+')'}}></div>
        </div>
        <div className={classes.video_info}>
          <Dotdotdot clamp={2}>
            {currentVideo.title}
          </Dotdotdot>
        </div>
      </div>
    );
  }
};

VideoItem.propTypes = {
  targetEl: PropTypes.string
};

module.exports = VideoItem;