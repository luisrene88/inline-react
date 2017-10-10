const styles = (style) => {
  return({
    tvp_pop_up:{
      width: '260px',
      background: '#FFFFFF',
      padding: '0px 18px 18px 18px',
      border: '1px solid #D2D2D2',
      borderRadius: '0',
      boxShadow: '2px 4px 8px 0 rgba(0,0,0,0.25)',
      position: 'absolute',
      textDecoration: 'none',
      top: '50%',
      right: '23%',
      zIndex: '21474836',
      transform: 'translateY(-50%)'
    },
    tvp_pop_up_img_wrapper:{
      position: 'relative',
      paddingTop: '100%'
    },
    tvp_pop_up_img:{
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
    tvp_pop_up_prod_title:{
      fontFamily: 'Helvetica, Neue',
      fontWeight: 'normal',
      fontSize: '14px',
      color: '#222222',
      textTransform: 'capitalize',
      textDecoration: 'none',
      textAlign: 'left',
      margin: '5px 0px 0px 0px',
      minHeight: '28px',
      lineHeight: '14px',
    },
    tvp_pop_up_prod_cta:{
      background: '#000000',
      border: 'none',
      borderRadius: '0',
      borderBottom: 'none',
      color: '#FFFFFF',
      textTransform: 'uppercase',
      position: 'relative',
      textDecoration:'none',
      fontSize: '26px',
      fontFamily: 'Helvetica, Neue',
      fontWeight: '500',
      height:' 54px',
      margin: '10px 0 0 0',
      width: '100%',
      display: 'block',
      cursor: 'pointer'
    },
    tvp_pop_up_prod_cta_span:{
      width: '100%',
      top: '50%',
      left: '0',
      right: '0',
      textAlign: 'center',
      position: 'absolute',
      transform: 'translateY(-50%)'
    }
  });               
};

module.exports = styles;