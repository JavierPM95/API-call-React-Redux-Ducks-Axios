import React from 'react'
import { Divider, Drawer, makeStyles } from '@material-ui/core'
import List from './List';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
}))

const DrawerContainer = () => {

    const classes = useStyles();

    return (
        <div>
            <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}} anchor="left">
                <div className={classes.toolbar}></div>
                <Divider/>
                <List/>
            </Drawer>
        </div>
    )
}

export default DrawerContainer
