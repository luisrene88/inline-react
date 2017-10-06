import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Player from './player';
import Utils from '../libs/utils';
import Product from './product';

import styles from  '../style_modules/modalContent_styles';

@injectSheet(styles)
class TvpModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			relatedProducts: null,
      hasProducts: false
		};
	}
	componentWillMount(){
		const {config , video} = this.props;
		Utils.fetchData(config.loginId, video.id, config, true)
			.then((data)=>{
        if (!data || !data.length) return;
				this.setState({
					relatedProducts: data,
          hasProducts: true
				});
			});
	}
  handleClick(){
    this.props.closeModal();
  }
  render(){
    const {classes, video, options} = this.props,
          {relatedProducts,hasProducts} = this.state,
          originalProps = Object.assign({}, this.props);
    // avoid style related conflicts between modules, remove classes,sheet and theme from props obj.
    Utils.removeObjectProperties(originalProps,['config','closeModal','handleClose','classes','sheet',]);
    return (
      <div id='tvp_modal_contents'>
        <div className={classes.tvp_modal_title}>{video.title}</div>
        <button onClick={this.handleClick.bind(this)}>Close</button>
        <Player hasProducts={hasProducts} video={video} options={options} {...originalProps}/>
        {relatedProducts &&
          <Product relatedProducts={relatedProducts}/>
        }
      </div>
    );
  }
}

TvpModal.propTypes = {
  video: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired
};

module.exports = TvpModal;