const styles = (style) => {
  return({
    tvp_modal_header:{
      height:'10%'
    },
    tvp_modal_title:{
      color:"#333",
      maxHeight: '100%',
      width: '80%',
      float:'left'
    },
    tvp_modal_headline:{
      float:'right',
      width: '20%',
      textAlign:'center',
      top: '50%',
      position: 'relative'
    },
    tvp_modal_close_svg:{
      display:'block'
    },
    tvp_modal_content:{
      position:'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding:'20px'
    },
    tvp_modal_close_btn:{
      position: 'absolute',
      top: '5px',
      right: '5px',
      cursor:'pointer',
      height: '24px',
      width: '24px'
    },
    tvp_modal_close_svg_path:{
      fill: '#333',
      strokeWidth: '0',
      stroke: '#333'
    }
  });               
};

module.exports = styles;