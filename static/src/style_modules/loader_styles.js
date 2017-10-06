const styles = (style) => {
  return({
    '@import':[
     ' url(//fonts.googleapis.com/css?family=Open+Sans)'
    ],
    tvp_loader_container:{
      position:'absolute',
      top:'50%',
      left:'50%',
      transform: 'translate(-50%,-50%)',
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
    },
    tvp_div_loader:{
      position: 'relative',
      height: '90%',
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center',
      backgroundSize:'cover',
      backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAACWAQMAAACsKXI0AAAABlBMVEXq6urq6uqJJbp/AAABN0lEQVRYw+3UIXLDMBBA0b+yRhHwTAUNCnQEg4JCwR7DsLBH2BT1WDpKj+AjFET2TICUkLL9yMq8ceRoHbAsy7Isy7Is65bsAFO9+3Dv4NfACsvalu8sEOYOzkKGHNvygwTRdTeiGYpvix8SJBlibfeSSIKMDvF0u3YN1wEW2hfPkQSF8gzmeVweYiEjoBT0xLmDHZkJlCzHNmoXe6ZfB0pyQER2tIs3PqMDJXog8uYH+IstOFB8BCLrNMABnAPFJSCCDLCAOFAk3zDax2jD1CdwQb7vcB1irnfbKOUBFs4HpAxmoyBXhOOngzrGgnAcCugYo8Jx3KB5MKII6jgGCXT0WuEogWNEEZJo/wQ923wOP45l6tg1sC2k5Xyt1hkfOviy8/LLpZ74sre/NMuyLMuyLMv6h/4AtYM2UT3qPicAAAAASUVORK5CYII=)'
    },
    tvp_div_text_loader:{
      position: 'relative',
      height: '5%',
      backgroundColor: '#eaeaea',
      margin:'5px 0'
    },
    tvp_div_text_loader2:{
      width: '50%',
      height: '5%',
      position: 'relative',
      backgroundColor: '#eaeaea'
    },
    tvp_loader_wrapper:{
      position: 'relative',
      maxWidth: '100%',
      maxHeight: '100%',
      padding: '40px',
      backgroundColor: ' #f5f5f5'
    },
    tvp_div_loader_container:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }
  });               
};

module.exports = styles;