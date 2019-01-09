import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import CopyField from '../../common/CopyField/CopyField';
// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './EmbedList.styles';

class EmbedList extends React.Component {
    state = {
        imageUrl: this.props.url
    }

    render() {
        const { state, props } = this;
        const { className, classes } = props;
        const embedList = [
            { label: 'Direct Link', value: state.imageUrl },
            { label: 'Image Link', value: state.imageUrl },
            { label: 'HTML Image', value: `<img src="${state.imageUrl}" alt="">` },
            { label: 'BBCode', value: `[img]${state.imageUrl}[/img]` },
        ];
        
        return (
            <section className={classNames(className, classes.root)}>
                <Typography 
                    className={classes.Typography_title}
                    component="h2" 
                    variant="h3"
                >Image Links</Typography>
    
                {embedList.map((embed, index) => 
                    <CopyField 
                        className={classes.CopyField}
                        label={embed.label} 
                        value={embed.value}
                        key={index}
                    />
                )}
            </section>
        )
    }
}

EmbedList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmbedList);