const styles = (style) => {
	return({
		tvp_products_container: style.tvp_products_container,
		tvp_products_scroller: {
			height:'100%'
		},
	    tvp_products_scroller_content: {
			paddingRight:'15px'
		},
		tvp_product_item_container: {
			margin: '5px 0',
			border: '1px solid #333',
			padding:'1px',
			'&:last-child, &:first-child':{
				margin:0
			}
		},
		tvp_product_item: {
			width:'100%',
			height:'100%',
			backgroundSize:'contain',
			backgroundPosition:'center',
			backgroundRepeat:'no-repeat'
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