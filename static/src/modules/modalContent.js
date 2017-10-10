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
      <div className={classes.tvp_modal_content}>
        <div className={classes.tvp_modal_header}>
          <div className={classes.tvp_modal_close_btn} onClick={this.handleClick.bind(this)}>
            <svg className={classes.tvp_modal_close_svg} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path className={classes.tvp_modal_close_svg_path} d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </div>
          <div className={classes.tvp_modal_title}>{video.title}</div>
          <div className={classes.tvp_modal_headline}>Related Products</div>
        </div>
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