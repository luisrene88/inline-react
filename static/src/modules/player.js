import React, {Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet, {ThemeProvider,jss} from 'react-jss';
import styles from  '../style_modules/player_styles';
import ScriptCache from './ScriptCache';

const ToStyle = props => {
  return (
    <div id='tvp_player_holder' className={props.classes.tvp_player_holder}>
      <div id='tvp_player' className={props.classes.tvp_player}>
        <div id='tvp_player_el' className={props.classes.tvp_player_el}></div>
      </div>
    </div>
  );
};

const Styled = injectSheet(styles)(ToStyle);

class PlayerComp extends Component{
  constructor(props){
    super(props);
    this.state = {
      player: null
    }
    this.initPlayer = this.initPlayer.bind(this);
  }
  componentDidMount(){
    const _this = this;
    
    const not = (obj) => {return 'undefined' === typeof obj};
    if (not(window.TVPage) || not(window.Player)) {
        this.cache = new ScriptCache(['https://cdnjs.tvpage.com/tvplayer/tvp-3.1.1.min.js','https://a.tvpage.com/tvpa.min.js','static/src/modules/playerLib.js','static/src/modules/analytics.js']);
        let libsCheck = 0;
        (function libsReady() {
            setTimeout(() => {
                if ((not(window.TVPage) || not(window.Player)) && (++libsCheck < 50)) {
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
    if(!window.test)
      window.test = new Player(document.getElementById('tvp_player_el'), this.props.options, this.props.video.id);
  }
  render(){
    jss.setup({
      insertionPoint: document.getElementById('tvp_'+this.props.name+'_root')
    });
    return (
      <ThemeProvider theme={this.props}>
        <Styled {...this.props}/>
      </ThemeProvider>
    );
  }
};

PlayerComp.propTypes = {
  video: PropTypes.object.isRequired
};

module.exports = PlayerComp;