import React, {Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet,{jss} from 'react-jss';
import styles from  '../style_modules/sidebar_styles';

@injectSheet(styles)
class Sidebar extends Component{
  render(){
    return (
      <div className={this.props.classes.tvp_sidebar}>
        sidebar
      </div>
    );
  }
};

Sidebar.propTypes = {
  targetEl: PropTypes.string.isRequired,
  videoList: PropTypes.array.isRequired
};

module.exports = Sidebar;
