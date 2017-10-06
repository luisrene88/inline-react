const styles = (style) => {
	return({
		tvp_products_container: style.tvp_products_container,
		tvp_products_scroller: {
		},
	    tvp_products_scroller_content: {
			paddingRight:'0'
		},
		tvp_product_item_container: {
			'paddingTop':'56.25%',
      'position':'relative'
		},
		tvp_product_item: {
			'backgroundSize':'cover',
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