import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Form from './Form';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import FileCopy from '@material-ui/icons/FileCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const styles = theme => {
    return {
        root: {
        },
        form: {

        },
        previous: {

        },
        input: {
            display: 'flex'
        }
    }
}

const OutputForm = ({ classes, onPreviousClick, recto, verso }) => {
    const copyButton = <Tooltip title={'Copier'}>
        <IconButton>
            <FileCopy color='primary' />
        </IconButton>
    </Tooltip>

    return (
        <div className={classes.root}>
            <IconButton className={classes.previous}
                onClick={onPreviousClick}>
                <ChevronLeft />
            </IconButton>

            <Form classes={{ root: classes.form }}>
                <div className={classes.input}>
                    <TextField fullWidth
                        id="recto"
                        label="Recto"
                        disabled
                        value={recto}
                    />
                    <CopyToClipboard text={recto}>
                        {copyButton}
                    </CopyToClipboard>
                </div>
                <div className={classes.input}>
                    <TextField fullWidth
                        id="verso"
                        label="Verso"
                        disabled
                        value={verso}
                    />
                    <CopyToClipboard text={verso}>
                        {copyButton}
                    </CopyToClipboard>
                </div>
            </Form>

        </div>
    )
}

export default withStyles(styles)(OutputForm);