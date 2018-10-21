import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class AssertedTextField extends Component {

    state = {
        error: false
    }

    handleChange = event => {
        const { onChange, predicate } = this.props;
        this.setState({
            error: !predicate(event.target.value)
        });

        onChange(event);
    }

    render() {
        const { error } = this.state;
        const { helperText, ...other } = this.props;

        return (
            <TextField {...other} onChange={this.handleChange}
                error={error}
                helperText={error && helperText} />
        );
    }
}

export default AssertedTextField;
