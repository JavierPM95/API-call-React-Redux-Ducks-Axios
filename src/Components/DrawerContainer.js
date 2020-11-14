import React from "react";
import { Divider, Drawer, makeStyles } from "@material-ui/core";
import ListNavbar from "./ListNavbar";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const DrawerContainer = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
        variant={props.variant}
        open={props.open}
        onClose={props.onClose ? props.onClose : null}
      >
        <div className={classes.toolbar}></div>
        <Divider />
        <ListNavbar />
      </Drawer>
    </div>
  );
};

export default DrawerContainer;
