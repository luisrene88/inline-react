import React from 'react';
import injectSheet, {ThemeProvider,jss} from 'react-jss';

import ScrollArea from 'react-scrollbar';
import Resize from 'react-resize-to-aspect-ratio';
import ScriptCache from './ScriptCache.js';
import styles from	'../style_modules/product_styles.js';

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
	const prodImg = { 'backgroundImage':'url('+obj.imageUrl+')' };
	return(
		<Resize aspectRatio="16:9" key={index} className={this.classes.tvp_product_item_container}>
            <div className={this.classes.tvp_product_item} style={prodImg}></div>
        </Resize>
	);
}              

const StyledProduct = injectSheet(styles)(ProductToStyle);

export default class Product extends React.Component{
	componentWillMount() {
		var cache = new ScriptCache(['https://cdnjs.tvpage.com/tvplayer/tvp-3.1.1.min.js',]);
		cache.onLoad(() => {
      		debugger;
      		
    	});
	}
	render(){
		console.log(this.props.name)
		jss.setup({
			insertionPoint: document.getElementById('tvp_'+this.props.name+'_root')
		});
		return (
			<ThemeProvider theme={this.props.config}>
				<StyledProduct {...this.props}/>
			</ThemeProvider>
		);
	}
}