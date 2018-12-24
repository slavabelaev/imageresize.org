import './AppLogo.scss';
import AppLogoImage from './AppLogo.svg';

import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class AppLogo extends Component {
    render() {
        const props = this.props;
        const classNames = 'AppLogo' + (props.className ? ' ' + props.className : '');

        return (
            <Router>
                <Link to="/" className={classNames}>
                    <img src={AppLogoImage} alt="ImageResize Logo" className="AppLogo__image" />
                </Link>
            </Router>
        );
    }
}
 
export default AppLogo;