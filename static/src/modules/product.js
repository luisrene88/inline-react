import React,{Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet,{jss} from 'react-jss';
import ScrollArea from 'react-scrollbar';
import styles from '../style_modules/product_styles';
      
@injectSheet(styles)
class Product extends Component{
  constructor(props) {
    super(props);
  }
  eachProduct(prod){
  	const { classes } = this.props,
      prodImg = { 'backgroundImage':'url('+prod.imageUrl+')' };
		return(
			<a key={prod.id} href={prod.linkUrl} className={classes.tvp_product_item_container}>
				<div className={classes.tvp_product_item} style={prodImg}></div>
			</a>
		);
  }
	render(){
    const {classes, relatedProducts } = this.props;
		return (
			<div className={classes.tvp_products_container}>
				<ScrollArea className={classes.tvp_products_scroller} contentClassName={classes.tvp_products_scroller_content}>
					{relatedProducts.map(this.eachProduct.bind(this))}	
				</ScrollArea>
			</div>
		);
	}
}

Product.propTypes = {
  relatedProducts: PropTypes.array.isRequired
};

module.exports = Product;