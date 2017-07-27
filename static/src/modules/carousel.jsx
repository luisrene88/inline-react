var React = require('react');
var Slider = require('react-slick');

var Carousel = React.createClass({
  render: function() {
    var settings = {
      dots: true
    }
    return (
      <div className='container'>
        <Slider {...settings}>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
        </Slider>
      </div>
    );
  }
});

module.exports = Carousel;