import React, {Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet, {ThemeProvider,jss} from 'react-jss';
import styles from  '../style_modules/loader_styles';
import classNames from 'classnames';
import vendorPrefixer from 'jss-vendor-prefixer';

const ToStyle = props => {
    return (
        <div className={props.classes.tvp_loader_container}>
            <p className={props.classes.tvp_loader_text}>Loading "{props.config.targetEl}" Widget</p>
            <div className={props.classes.tvp_loader}>
                <div className={classNames(props.classes.tvp_loader_child, props.classes.tvp_loader_child1)}></div>
                <div className={classNames(props.classes.tvp_loader_child, props.classes.tvp_loader_child2)}></div>
                <div className={classNames(props.classes.tvp_loader_child, props.classes.tvp_loader_child3)}></div>
                <div className={classNames(props.classes.tvp_loader_child, props.classes.tvp_loader_child4)}></div>
                <div className={classNames(props.classes.tvp_loader_child, props.classes.tvp_loader_child5)}></div>
                <div className={classNames(props.classes.tvp_loader_child, props.classes.tvp_loader_child6)}></div>
                <div className={classNames(props.classes.tvp_loader_child, props.classes.tvp_loader_child7)}></div>
                <div className={classNames(props.classes.tvp_loader_child, props.classes.tvp_loader_child8)}></div>
                <div className={classNames(props.classes.tvp_loader_child, props.classes.tvp_loader_child9)}></div>
                <div className={classNames(props.classes.tvp_loader_child, props.classes.tvp_loader_child10)}></div>
                <div className={classNames(props.classes.tvp_loader_child, props.classes.tvp_loader_child11)}></div>
                <div className={classNames(props.classes.tvp_loader_child, props.classes.tvp_loader_child12)}></div>
            </div>
        </div>
    );
};

const Styled = injectSheet(styles)(ToStyle);

class Loader extends Component{
    render(){
        jss.setup({
            insertionPoint: document.getElementById('tvp_'+this.props.config.targetEl+'_root')
        });
        return (
            <ThemeProvider theme={this.props}>
                <Styled {...this.props}/>
            </ThemeProvider>
        );
    }
}

Loader.propTypes = {
  config: PropTypes.object.isRequired,
};

module.exports = Loader;