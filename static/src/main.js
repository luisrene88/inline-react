import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Utils from './utils';
import Loader from './modules/loader'

function Widget(props){
  const widgetProps = Object.assign({}, props);
  Utils.removeObjectProperties(widgetProps,['type']);

  let WidgetRequired;
  switch (Utils.getType(props)) {
    case 'Carousel':
      WidgetRequired = require('./modules/carousel.js');
      break;
    case 'Sidebar':
      WidgetRequired = require('./modules/sidebar.js');
      break;
   }
   return <WidgetRequired {...widgetProps}/>;
}

class Main extends Component{
  constructor(props){
    super(props);

    this.state = {
      videoList: null
    }
  }
  componentDidMount(){
    const config = this.props.config;
    const logId = config.loginId;
    const channId = config.channel.id;

    Utils.fetchData(logId, channId, config, false)
      .then((res) => {
        this.setState({
          videoList: res
        });
      });
  }
  render(){
    return (
      <div id={'tvp_'+this.props.config.targetEl+'_root'}>
        {!this.state.videoList
          ? <Loader config={this.props.config}/>
          : <Widget videoList={this.state.videoList} {...this.props.config}/>
        }
        <div id={'tvp_'+this.props.config.targetEl+'_modal_holder'}></div>
        <div id={'tvp_'+this.props.config.targetEl+'_styles_holder'}></div>
      </div>
    );
  }
}

Main.PropTypes = {
  config: PropTypes.array.isRequired
};

window.__TVPage__ = window.__TVPage__ || {};
__TVPage__.config = __TVPage__.config || {};

const config = __TVPage__.config['category-page-carousel'];

if (!config.hasOwnProperty('targetEl') || !document.getElementById(config.targetEl)) {
  throw new Error("Must pass \"targetEl\"");
}

render(<Main config={config} />,document.getElementById(config.targetEl));
