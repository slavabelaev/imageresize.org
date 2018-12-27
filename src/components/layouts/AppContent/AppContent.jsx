import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
// Styles
import styles from './AppContent.styles';
// Routes
import routes from '../../../App.routes';

class AppContent extends React.Component {
    render() { 
        const props = this.props;
        const { classes } = this.props;

        return (
            <main className={`${props.className || ''} ${classes.root}`}>
                {routes.map((route, index) =>
                    <React.Fragment key={index}>
                        {route.redirectTo ? 
                            <Redirect 
                                from={route.path} 
                                to={route.redirectTo} 
                            /> :
                            <Route  
                                key={index}
                                path={route.path} 
                                exact={route.exact} 
                                component={route.component} 
                            />
                        }
                        {route.children ? route.children.map((routeChild, index) => 
                            <Route 
                                key={index} 
                                path={`${route.path}/${routeChild.path}`}
                                exact={route.exact}
                                component={routeChild.component} 
                            />
                        ) : null}
                    </React.Fragment>
                )}
            </main>
        );
    }
}
 
AppContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppContent);