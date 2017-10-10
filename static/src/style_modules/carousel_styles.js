const styles = (style) => {
	return({
		carousel_container:{
			margin: "0 auto",
			padding: "40px",
			maxWidth: "100%",
			maxHeight: "100%",
			color: "#333",
			background: "#f5f5f5"
		},
    tvp_modal_opened:{
      overflow:'hidden'
    },
    tvp_modal_base:{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '890px',
      height: '460px',
      backgroundColor: '#fff',
      outline: 'none',
      boxShadow: '0 2px 18px 0 rgba(0,0,0,0.5)'
    },
    tvp_modal_base_open:{
      display:'block'
    },
    tvp_modal_base_closed:{
      display:'none'
    },
    tvp_modal_overlay:{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    tvp_modal_overlay_open:{
      display:'block'
    },
    tvp_modal_overlay_closed:{
      display:'none'
    }
	});               
};

module.exports = styles;


// position: absolute;
//     top: 0;
//     right: 0;
//     height: 30px;
//     width: 30px;
//     cursor: pointer;


// display: block;
//     border: 1px solid red;
//     background-color: blue;

    // stroke: black;
    // fill: transparent;
    // stroke-linecap: round;
    // stroke-width: 5;