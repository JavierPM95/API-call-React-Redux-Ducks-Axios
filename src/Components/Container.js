import React from "react";
import MuiNavbar from "./MuiNavbar";
import Pokemon from "./Pokemon";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core";
import DrawerContainer from "./DrawerContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Container = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiNavbar />
      <Navbar />
      <DrawerContainer/>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <Pokemon />
      </div>
    </div>
  );
};

export default Container;
