const styles = (style) => {
  return({
    tvp_player_holder:{
        width:'80%',
        height:'90%',
        float:'left'
    },
    tvp_player_holder_full:{
        width:'100%'
    },
    tvp_player:{
    	height:0,
    	width:'100%',
    	position:'relative',
    	paddingBottom:'56.25%'
    },
    tvp_player_el:{
    	backgroundColor:'#000',
    	backgroundSize:'cover',
    	position:'absolute',
    	top:0,
    	bottom:0,
    	right:0,
    	left:0,
    	width:'100%',
    	height:'100%'
    }
  });               
};

module.exports = styles;