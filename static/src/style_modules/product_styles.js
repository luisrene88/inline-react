const styles = (style) => {
	return({
		tvp_products_container: style.tvp_products_container,
		tvp_products_scroller: {
      height:'100%'
		},
	    tvp_products_scroller_content: {
			paddingRight:'10%'
		},
		tvp_product_item_container: {
      'display':'block',
			'paddingTop':'100%',
      'position':'relative',
      'margin':'5px 0',
      'border': '1px solid #333',
      '&:first-child':{
        marginTop:'0'
      },
      '&:last-child':{
        marginBottom:'0'
      }
		},
		tvp_product_item: {
			'backgroundSize':'contain',
      'backgroundPosition':'center',
      'backgroundRepeat':'no-repeat',
      'position':'absolute',
      'top':'0',
      'bottom':'0',
      'right':'0',
      'left':'0',
      'cursor':'pointer'
		},
		tvp_product_item_title: {
			color: '#24292e',
			'&:hover': {
			  opacity: style.a
			}
		}
	});               
};

module.exports = styles;