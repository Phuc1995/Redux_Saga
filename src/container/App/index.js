import styles from './style';
import { withStyles } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import Taskboard from '../Taskboard';
import theme from '../../commons/Theme';

class App extends Component {

  render() {
    console.log(this.props);
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Taskboard></Taskboard>
      </ThemeProvider>
      // <div className="App">
      //   <Button variant="contained" color="primary" href="#contained-buttons">
      //     Link
      //   </Button>
      //   <div className={classes.box}>
      //     <div className={classes.shape}>abc</div>
      //     <div className={classes.shape}>abc</div>
      //     <div className={classes.shape}>abc</div>
      //   </div>
      // </div>
    );
  }
}

export default withStyles(styles)(App);
