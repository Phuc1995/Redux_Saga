import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardAction from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styles from "./styles";
import TaskItem from '../TaskItem';

class TaskList extends Component {
    render() {
        const { classes, tasks, status } = this.props;
        console.log("phuc: " + JSON.stringify(this.props));
        return (
            <Grid item md={4} xs={12} key={status.value}>
                <Box mt={1} mb={1}>
                    <div className={classes.status}>{status.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {
                        tasks.map(task => {
                            return <TaskItem task={task} status={status} key={task.id}></TaskItem>
                        })
                    }
                </div>
            </Grid>);
    }
}

export default withStyles(styles)(TaskList);