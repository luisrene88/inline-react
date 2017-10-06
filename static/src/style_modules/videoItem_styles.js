const styles = (style) => {
  return({
    video_wrapper:{
      'paddingTop':'56.25%',
      'position':'relative'
    },
    video_item:{
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
    video_info:{
      'position':'relative',
      'textAlign':'left',
      'overflow': 'hidden',
      'width': '100%'
    }
  });               
};

module.exports = styles;