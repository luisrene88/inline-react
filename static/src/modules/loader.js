import React, {Component} from 'react';
import PropTypes from 'prop-types';
import injectSheet,{jss} from 'react-jss';
import classNames from 'classnames';
import Resize from 'react-resize-to-aspect-ratio';
import styles from  '../style_modules/loader_styles';

@injectSheet(styles)
class Loader extends Component{
    render(){
        const { classes, config } = this.props;
        let divLoader = [];
        for (let i = 0; i < config.carousel_settings['slidesToShow']; i++) {
            divLoader.push(
                <Resize style={{margin:'0 5px'}} aspectRatio="16:9" key={i}>
                    <div className={classes.tvp_div_loader}></div>
                    <div className={classes.tvp_div_text_loader}></div>
                    <div className={classes.tvp_div_text_loader2}></div>
                </Resize>
            );
        }
        return (
            <div className={classes.tvp_loader_wrapper}>
                <div className={classes.tvp_div_loader_container}>{divLoader}</div>
                <div className={classes.tvp_loader_container}>
                    <div className={classes.tvp_loader}>
                        <div className={classNames(classes.tvp_loader_child, classes.tvp_loader_child1)}></div>
                        <div className={classNames(classes.tvp_loader_child, classes.tvp_loader_child2)}></div>
                        <div className={classNames(classes.tvp_loader_child, classes.tvp_loader_child3)}></div>
                        <div className={classNames(classes.tvp_loader_child, classes.tvp_loader_child4)}></div>
                        <div className={classNames(classes.tvp_loader_child, classes.tvp_loader_child5)}></div>
                        <div className={classNames(classes.tvp_loader_child, classes.tvp_loader_child6)}></div>
                        <div className={classNames(classes.tvp_loader_child, classes.tvp_loader_child7)}></div>
                        <div className={classNames(classes.tvp_loader_child, classes.tvp_loader_child8)}></div>
                        <div className={classNames(classes.tvp_loader_child, classes.tvp_loader_child9)}></div>
                        <div className={classNames(classes.tvp_loader_child, classes.tvp_loader_child10)}></div>
                        <div className={classNames(classes.tvp_loader_child, classes.tvp_loader_child11)}></div>
                        <div className={classNames(classes.tvp_loader_child, classes.tvp_loader_child12)}></div>
                    </div>
                </div>
            </div>
        );
    }
}

Loader.PropTypes = {
  config: PropTypes.object.isRequired,
};

module.exports = Loader;