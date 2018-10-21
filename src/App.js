import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import InputForm from './InputForm';
import OutputForm from './OutputForm';
import Snackbar from '@material-ui/core/Snackbar';
import { calculatePages } from './utils';


const styles = theme => {
  const width = '400px';
  const padding = 4 * theme.spacing.unit;
  const transition = theme.transitions.create(['transform'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  });

  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection : 'column',
      height: '100%'
    },
    title : {
      fontSize : '60px',
      marginBottom : 4* theme.spacing.unit,
      fontFamily : 'Magneto',
      color : theme.palette.primary.main
    },
    formContainer: {
      display: 'flex',
      width: width,
      minHeight : '200px',
      overflow: 'hidden',
      boxShadow: theme.shadows[5]
    },
    form: {
      display: 'flex',
      width: `calc(${width} - ${2 * padding}px)`,
      padding: padding,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 0,
      transition: transition
    },
    translation: {
      transform: `translate(-${width})`,
      transition: transition,
    }
  }
};

class App extends Component {
  state = {
    showFirstPage: true,
    pages: '',
    pagePerPage: '',
    recto: '',
    verso: '',
    snackbarOpen: false
  }

  handleNextClick = () => {
    const { pages, pagePerPage } = this.state;
    const res = calculatePages(pages, pagePerPage);

    if (res === null) {
      this.setState({
        snackbarOpen: true
      });
    } else {
      this.setState({
        showFirstPage: false,
        ...res
      });
    }
  }

  handlePreviousClick = () => {
    this.setState({ showFirstPage: true });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSnackbarClose = () => {
    this.setState({
      snackbarOpen: false
    })
  }

  render() {
    const { classes } = this.props;
    const { showFirstPage, pages, pagePerPage, recto, verso, snackbarOpen } = this.state;

    const formClasses = classNames(classes.form, !showFirstPage && classes.translation);

    return (
      <div className={classes.root}>
        <span className={classes.title}>Printer help</span>
        <div className={classes.formContainer}>
          <InputForm classes={{ root: formClasses }}
            onNextClick={this.handleNextClick}
            onInputChange={this.handleInputChange}
            pages={pages}
            pagePerPage={pagePerPage} />
          <OutputForm classes={{ root: formClasses }}
            onPreviousClick={this.handlePreviousClick}
            recto={recto}
            verso={verso}
          />
        </div>

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={this.handleSnackbarClose}
          message={'Au moins une des valeurs données est invalide'}
        />
      </div>
    );
  }
}

export default withStyles(styles)(App);
