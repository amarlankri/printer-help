import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Form from './Form';
import AssertedTextField from './AssertedTextField';
import IconButton from '@material-ui/core/IconButton';

import ChevronRight from '@material-ui/icons/ChevronRight';

const styles = theme => {
    return {
        root: {
        },
        form: {

        },
        next: {

        }
    }
}

class InputForm extends Component {



    handleKeyPress = event => {
        if (event.key === 'Enter') {
            return this.props.onNextClick();
        }
    }

    render() {
        const { classes, onNextClick, onInputChange, pages, pagePerPage } = this.props;

        const predicate = value => {
            const int = parseInt(value, 10);
            return !isNaN(int) && int >= 1;
        };

        const helperText = 'La valeur donnée doit être > ou = à 1';

        return (
            <div className={classes.root}
                onKeyPress={this.handleKeyPress}>
                <Form classes={{ root: classes.form }}>
                    <AssertedTextField fullWidth
                        name='pages'
                        label="Nombre de page"
                        required
                        onChange={onInputChange}
                        value={pages}
                        predicate={predicate}
                        helperText={helperText}
                    />
                    <AssertedTextField fullWidth
                        name='pagePerPage'
                        label="Nombre de pages par page"
                        required
                        onChange={onInputChange}
                        value={pagePerPage}
                        predicate={predicate}
                        helperText={helperText}
                    />
                </Form>
                <IconButton className={classes.next}
                    onClick={onNextClick}>
                    <ChevronRight />
                </IconButton>

            </ div>
        );
    }
}

export default withStyles(styles)(InputForm);
