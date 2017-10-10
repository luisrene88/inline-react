import React,{Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet,{jss} from 'react-jss';
import styles from '../style_modules/popUp_styles';
import Dotdotdot from 'react-dotdotdot';

@injectSheet(styles)
class PopUp extends Component{
  constructor(props){
    super(props)
    this.state = {
      product: this.props.product
    };
  }
  componentWillReceiveProps(){
    this.setState({
      product:this.props.product
    });
  }
  render(){
    const {product} = this.state;
    const {classes} = this.props;
    let prodImg = { 'backgroundImage':'url('+product.imageUrl+')' };
    return(
      <div className={classes.tvp_pop_up}>
          <div className={classes.tvp_pop_up_img_wrapper}>
            <div style={prodImg} className={classes.tvp_pop_up_img}></div>
          </div>
          <div id="tvp_pop_up_details">
            <Dotdotdot clamp={2}>
              <p className={classes.tvp_pop_up_prod_title} >{product.title}</p>
            </Dotdotdot>
            <p className={classes.tvp_pop_up_prod_price} >{product.price}</p>
            <a className={classes.tvp_pop_up_prod_cta} href={product.linkUrl} target="_blank" ><span className={classes.tvp_pop_up_prod_cta_span}>View Details</span></a>
          </div>
      </div>
    );
  }
}

PopUp.propTypes = {
  product: PropTypes.object.isRequired
};

module.exports = PopUp;