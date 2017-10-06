import React, {Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import ScriptCache from '../libs/ScriptCache';
import videoStore from '../libs/store';
import PlayerLib from "../libs/player";

import styles from  '../style_modules/player_styles';

@injectSheet(styles)
class Player extends Component{
  constructor(props){
    super(props);
    this.state = {
      video: props.video,
      hasProducts: props.hasProducts
    }
  }
  componentDidMount(){
    const _this = this;
    const not = (obj) => {return 'undefined' === typeof obj};
    if (not(window.TVPage)) {
        this.cache = new ScriptCache(['https://cdnjs.tvpage.com/tvplayer/tvp-3.1.1.min.js','https://a.tvpage.com/tvpa.min.js','static/src/libs/analytics.js']);
        let libsCheck = 0;
        (function libsReady() {
            setTimeout(() => {
                if ((not(window.TVPage)) && (++libsCheck < 50)) {
                    libsReady();
                } else {
                    _this.initPlayer();
                }
            },150);
        })();
    } else{
      _this.initPlayer();
    }
  }
  initPlayer(){
    const { video } = this.state;
    let playerLib = new PlayerLib('tvp_player_el', {
          play_button_border_radius: '50%',
          play_button_border_width: '5px',
          play_button_border_color: 'white',
          play_button_border_style: 'solid',
          play_button_background_color: 'transparent',
          progress_color: '#0090D3',
          api_base_url: this.props.theme.api_base_url,
          loginId: this.props.theme.loginId,
          data: [videoStore.getAll()],
          analytics: true,
          autoplay: true,
          autonext: true
    },video.id);
    playerLib.initialize();
    playerLib.resize();
  }
  render(){
    const {classes, hasProducts} = this.props;
    return (
      <div id='tvp_player_holder' className={(hasProducts?classes.tvp_player_holder:classes.tvp_player_holder_full)}>
        <div id='tvp_player' className={classes.tvp_player}>
          <div id='tvp_player_el' className={classes.tvp_player_el}></div>
        </div>
      </div>
    );
  }
};

Player.propTypes = {
  video: PropTypes.object.isRequired
};

module.exports = Player;