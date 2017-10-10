import React,{Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet,{jss} from 'react-jss';
import ScrollArea from 'react-scrollbar';
import PopUp from './popUp';
import styles from '../style_modules/product_styles';
      
@injectSheet(styles)
class Product extends Component{
  constructor(props) {
    super(props);
    this.state = {
      product: null
    }
  }
  eachProduct(prod){
    const { classes } = this.props,
    prodImg = { 'backgroundImage':'url('+prod.imageUrl+')' };
		return(
        <a key={prod.id} href={prod.linkUrl} className={classes.tvp_product_item_container} onMouseMove={this.handleHover.bind(this, prod)}>
          <div className={classes.tvp_product_item} style={prodImg}></div>
        </a>
		);
  }
  handleHover(prod, e){
    console.log(e.type)
    this.setState({
      product: prod
    });
  }
	render(){
    const { product } = this.state;
    const {classes, relatedProducts } = this.props;
		return (
			<div id="tvp_products_container" className={classes.tvp_products_container}>
				<ScrollArea horizontal={false} className={classes.tvp_products_scroller} contentClassName={classes.tvp_products_scroller_content}>
					{relatedProducts.map(this.eachProduct.bind(this))}	
				</ScrollArea>
        {product &&
          <PopUp product={product} />
        }
			</div>
		);
	}
}

Product.propTypes = {
  relatedProducts: PropTypes.array.isRequired
};

module.exports = Product;