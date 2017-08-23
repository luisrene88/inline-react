import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Utils from './utils.js';

function Widget(props){
  const widgetProps = Object.assign({}, props);
  const widgetType = Utils.getType(props);
  Utils.removeObjectProperties(widgetProps.config,['type']);

  let Widget_required;
  switch (widgetType) {
    case 'Carousel':
      Widget_required = require('./modules/carousel.js');
      break;
    case 'Sidebar':
      Widget_required = require('./modules/sidebar.js');
      break;
   }
   return <Widget_required {...widgetProps}/>;
}

class Main extends React.Component{
  render(){
    return (
      <div id={'tvp_'+this.props.name+'_root'}>
        <Widget {...this.props}/>
        <div id={'tvp_'+this.props.name+'_modal_holder'}></div>
      </div>
    );
  }
}

Main.PropTypes = {
  name: PropTypes.string.isRequired,
  videosArray: PropTypes.array.isRequired
};

window.__TVPage__ = window.__TVPage__ || {};
__TVPage__.config = __TVPage__.config || {};

const config = __TVPage__.config['category-page-carousel'];

if (!config.hasOwnProperty('targetEl') || !document.getElementById(config.targetEl)) {
  throw new Error("Must pass \"targetEl\"");
}

const targetEl = config.targetEl;
const logId = (config.loginId || config.loginid) || 0;
const channel = config.channel || {};
const channId = config.channelId || config.channel.id;

function fetchData(loginId, itemId, getProducts){
  if(!loginId) return console.warn('Need loginId');
  const cbName = 'tvp_' + Math.floor(Math.random() * 555);
  let url;
  if (!getProducts) {
    url = config.api_base_url + '/channels/'+itemId+'/videos?X-login-id='+loginId+'&p=0&n=1000&callback='+cbName;
    let params = config.channel.parameters || {};
    for (let i in params) {
      if(!params[i] || !params[i].length) break; 
      url += "&" + i + "=" + params[i];
    }
  }else{
   url = config.api_base_url + '/videos/'+itemId+'/products?X-login-id='+loginId+'&callback='+cbName;
  }

  return Promise.resolve($.get({
        url: url,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp'
      }));
}

fetchData(logId, channId)
  .then( videoResponse => {
    if (!videoResponse || !videoResponse.length) return console.error('No Videos/Data');
    videoResponse.map((prods,index) => {
      fetchData(logId, prods.id, true).then( productsRes => {
        if (!productsRes || !productsRes.length) return;
        if(index !== 1) {
          prods.videoProducts = productsRes;
        }
      });
    });
    render(<Main config={config} name={targetEl} videosArray={videoResponse}/>,document.getElementById(targetEl))
  });