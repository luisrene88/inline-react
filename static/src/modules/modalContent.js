import React, {Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet, {ThemeProvider,jss} from 'react-jss';
import styles from  '../style_modules/modalContent_styles';
import PlayerComp from './player';
import Utils from '../utils';
import Product from './product';

const ToStyle = props => {
	const originalProps = Object.assign({}, props);
	// avoid style related conflicts between modules, remove classes,sheet and theme from props obj.
	Utils.removeObjectProperties(originalProps,['config','closeModal','handleClose','classes','sheet','theme']);
    return (
        <div id='tvp_modal_contents'>
        	<div className={props.classes.tvp_modal_title}>{props.video.title}</div>
        	<button onClick={handleClick}>Close</button>
        	<PlayerComp video={props.video} options={props.options} {...originalProps}/>
        	{props.relatedProducts
	        	? <Product relatedProducts={props.relatedProducts}/>
	        	: null
	        }
        </div>
    );
    function handleClick(){
    	props.handleClose();
    };
};

const Styled = injectSheet(styles)(ToStyle);

class TvpModal extends Component{
	constructor(props){
		super(props);
		this.state = {
			relatedProducts: null
		};
	}
	componentWillMount(){
		const config = this.props.config;
		const logId = config.loginId;
		const videoId = this.props.video.id;
		Utils.fetchData(logId, videoId, config, true)
			.then((data)=>{
				this.setState({
					relatedProducts: data
				});
			});
	}
    render(){
        return (
            <ThemeProvider theme={this.props}>
                <Styled relatedProducts={this.state.relatedProducts} handleClose={this.props.closeModal} options={this.props.config} {...this.props}/>
            </ThemeProvider>
        );
    }
}

TvpModal.propTypes = {
  video: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired
};

module.exports = TvpModal;