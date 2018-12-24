import './AppIcon.scss';

import React, { Component } from 'react'

class AppIcon extends Component {
    render() { 
        const props = this.props;
        const classNames = 'AppIcon' + (props.className ? ' ' + props.className : '');
        const iconSize = !props.size ? null : props.size;
        const iconSizeStyles = !iconSize ? null : {
            width: iconSize,
            height: iconSize,
            minWidth: iconSize,
            minHeight: iconSize
        };
        const styles = !props.icon ? null : {
            backgroundImage: 'url(' + require(`../../../assets/icons/${props.icon}.svg`) + ')',
            ...iconSizeStyles
        };


        return (
            <i className={classNames} style={styles}></i>
        );
    }
}
 
export default AppIcon;