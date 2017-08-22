import React from 'react';
import injectSheet, {ThemeProvider,jss} from 'react-jss';
import styles from  '../style_modules/sidebar_styles.js';

const ToStyle = props => {
  return (
    <div className={props.classes.tvp_sidebar}>sidebar</div>
  );
};

const Styled = injectSheet(styles)(ToStyle);

export default class Sidebar extends React.Component{
  render(){
    console.log(this.props.name)
    jss.setup({
      insertionPoint: document.getElementById('tvp_'+this.props.name+'_root')
    });
    return (
      <ThemeProvider theme={this.props.config}>
        <Styled {...this.props}/>
      </ThemeProvider>
    );
  }
}