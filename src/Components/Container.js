import React from "react";
import MuiNavbar from "./MuiNavbar";
import Pokemon from "./Pokemon";
import { Hidden, makeStyles } from "@material-ui/core";
import DrawerContainer from "./DrawerContainer";
import { useState } from "react";


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

    const [open, setOpen] = useState(false)

    const opener = () =>{
        setOpen(!open)
    }

  return (
    <div className={classes.root}>
      <MuiNavbar 
      opener={opener}
      />
      <Hidden xlUp>
        <DrawerContainer
            variant="temporary"
            open={open}
            onClose={opener}
        />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <Pokemon />
      </div>
    </div>
  );
};

export default Container;
