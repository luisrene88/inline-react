import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import videoStore from './libs/store';
import Utils from './libs/utils';
import dispatcher from './libs/dispatcher';
import * as actions  from './libs/actions';

import {ThemeProvider ,jss} from 'react-jss';
import jssNested from 'jss-nested';
import Loader from './modules/loader';
jss.use(jssNested());

function Widget(props){
  const widgetProps = Object.assign({}, props);
  Utils.removeObjectProperties(widgetProps,['type','classes', 'rule', 'sheet']);
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
  componentWillMount(){
    const { config } = this.props;
    actions.fetchVideos(config);
    videoStore.on('received', () =>{
      this.setState({
        videoList: videoStore.getAll()
      });
    });
  }
  render(){
    const { config } = this.props;
    jss.setup({
      insertionPoint: document.getElementById('tvp_'+config.targetEl+'_root')
    });
    return (
      <ThemeProvider theme={config}>
          <div id={'tvp_'+config.targetEl+'_root'}>
            {!this.state.videoList
              ? <Loader config={config}/>
              : <Widget videoList={this.state.videoList} {...config}/>
            }
            <div id={'tvp_'+config.targetEl+'_modal_holder'}></div>
          </div>
      </ThemeProvider>
    );
  }
}

Main.propTypes = {
  config: PropTypes.object.isRequired
};

window.__TVPage__ = window.__TVPage__ || {};
__TVPage__.config = __TVPage__.config || {};

const config = __TVPage__.config['category-page-carousel'];

if (!config.hasOwnProperty('targetEl') || !document.getElementById(config.targetEl)) {
  throw new Error("Must pass \"targetEl\"");
}

render(<Main config={config} />,document.getElementById(config.targetEl));
