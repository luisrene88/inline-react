import React,{Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet, {ThemeProvider,jss} from 'react-jss';

import ScrollArea from 'react-scrollbar';
import Resize from 'react-resize-to-aspect-ratio';
import ScriptCache from './ScriptCache';
import styles from	'../style_modules/product_styles';

const ProductToStyle = props => {
	const prodItems = props.producItems || [];
	return (
		<div className={props.classes.tvp_products_container}>
			<ScrollArea className={props.classes.tvp_products_scroller} contentClassName={props.classes.tvp_products_scroller_content}>
				{prodItems.map(eachProduct, props)}	
			</ScrollArea>
		</div>
	);
};

function eachProduct(obj, index){
	// retrieve originalProps with 'this'
	const prodImg = { 'backgroundImage':'url('+obj.imageUrl+')' };
	return(
    <Resize aspectRatio="16:9" key={index} className={this.classes.tvp_product_item_container}>
      <div className={this.classes.tvp_product_item} style={prodImg}></div>
    </Resize>
	);
}              

const StyledProduct = injectSheet(styles)(ProductToStyle);

class Product extends Component{
	componentWillMount() {
		var cache = new ScriptCache(['https://cdnjs.tvpage.com/tvplayer/tvp-3.1.1.min.js']);
	}
	render(){
		jss.setup({
			insertionPoint: document.getElementById('tvp_'+this.props.targetEl+'_root')
		});
		return (
			<ThemeProvider theme={this.props}>
				<StyledProduct {...this.props}/>
			</ThemeProvider>
		);
	}
}

Product.propTypes = {
  targetEl: PropTypes.string.isRequired,
  currentVideo: PropTypes.object.isRequired
};

module.exports = Product;