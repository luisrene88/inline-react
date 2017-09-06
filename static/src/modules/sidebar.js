import React, {Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet, {ThemeProvider,jss} from 'react-jss';

import styles from  '../style_modules/sidebar_styles';

const ToStyle = props => {
  return (
    <div className={props.classes.tvp_sidebar}>
      sidebar
    </div>
  );
};

const Styled = injectSheet(styles)(ToStyle);

class Sidebar extends Component{
  render(){
    jss.setup({
      insertionPoint: document.getElementById('tvp_'+this.props.name+'_root')
    });
    return (
      <ThemeProvider theme={this.props.config}>
        <Styled {...this.props}/>
      </ThemeProvider>
    );
  }
};

Sidebar.propTypes = {
  name: PropTypes.string.isRequired,
  videosArray: PropTypes.array.isRequired
};

module.exports = Sidebar;