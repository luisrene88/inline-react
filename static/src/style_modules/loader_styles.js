const styles = (style) => {
  return({
    '@import':[
     ' url(//fonts.googleapis.com/css?family=Open+Sans)'
    ],
    tvp_loader_container:{
      textAlign: 'center'
    },
    tvp_loader_text:{
      color: '#e57211',
      fontSize: '18px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontFamily: '"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif'
    },
    tvp_loader:{
      margin: '0 auto',
      width: '40px',
      height: '40px',
      position: 'relative'
    },
    tvp_loader_child:{
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: '0',
      top: '0',
      '&:before':{
        content: '""',
        display: 'block',
        margin: '0 auto',
        width: '15%',
        height: '15%',
        backgroundColor: '#e57211',
        borderRadius: '100%',
        animation:{
          name: 'tvpAnimationLoader',
          duration:'1.2s',
          timingFunction: 'ease-in-out',
          iterationCount:'infinite',
          direction:'both'
        }
      }
    },
    tvp_loader_child2:{
      transform: 'rotate(30deg)',
      '&:before':{
        animationDelay: '-1.1s'
      }
    },
    tvp_loader_child3:{
      transform: 'rotate(60deg)',
      '&:before':{
        animationDelay: '-1s'
      }
    },
    tvp_loader_child4:{
      transform: 'rotate(90deg)',
      '&:before':{
        animationDelay: '-0.9s'
      }
    },
    tvp_loader_child5:{
      transform: 'rotate(120deg)',
      '&:before':{
        animationDelay: '-0.8s'
      }
    },
    tvp_loader_child6:{
      transform: 'rotate(150deg)',
      '&:before':{
        animationDelay: '-0.7s'
      }
    },
    tvp_loader_child7:{
      transform: 'rotate(180deg)',
      '&:before':{
        animationDelay: '-0.6s'
      }
    },
    tvp_loader_child8:{
      transform: 'rotate(210deg)',
      '&:before':{
        animationDelay: '-0.5s'
      }
    },
    tvp_loader_child9:{
      transform: 'rotate(240deg)',
      '&:before':{
        animationDelay: '-0.4s'
      }
    },
    tvp_loader_child10:{
      transform: 'rotate(270deg)',
      '&:before':{
        animationDelay: '-0.3s'
      }
    },
    tvp_loader_child11:{
      transform: 'rotate(300deg)',
      '&:before':{
        animationDelay: '-0.2s'
      }
    },
    tvp_loader_child12:{
      transform: 'rotate(330deg)',
      '&:before':{
        animationDelay: '-0.1s'
      }
    },
    '@keyframes tvpAnimationLoader': {
      '0%, 80%, 100%':{
        transform:'scale(0)'
      },
      '40%':{
        transform:'scale(1)'
      }
    }
  });               
};

module.exports = styles;