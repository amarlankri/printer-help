import React from 'react';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => {
    return {
        root : {
            width : '250px',
            height : '200px',
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'space-around',
            alignItems : 'center',
        }
    }
}

const Form = ({ classes, children }) => {
    return (
        <form className={classes.root}>
            {children}
        </form>
    )
}

export default withStyles(styles)(Form);
