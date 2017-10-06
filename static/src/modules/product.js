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
  eachProduct(val, key){
  	const prodImg = { 'backgroundImage':'url('+val.imageUrl+')' };
		return(
			<div key={key} className={this.props.classes.tvp_product_item_container}>
				<div className={this.props.classes.tvp_product_item} style={prodImg}></div>
			</div>
		);
  }
	render(){
		return (
			<div className={this.props.classes.tvp_products_container}>
				<ScrollArea className={this.props.classes.tvp_products_scroller} contentClassName={this.props.classes.tvp_products_scroller_content}>
					{this.props.relatedProducts.map(this.eachProduct.bind(this))}	
				</ScrollArea>
			</div>
		);
	}
}

Product.propTypes = {
  relatedProducts: PropTypes.array.isRequired
};

module.exports = Product;