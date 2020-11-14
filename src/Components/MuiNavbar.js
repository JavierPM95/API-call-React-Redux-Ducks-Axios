import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navBar: {
    width: `calc (100% - ${drawerWidth}px`,
    marginLeft: drawerWidth
  }
}));

const MuiNavbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.navBar} position="fixed" color="primary">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              aria-label="Menu"
              edge="start"
              color="inherit"
              className={classes.menuButton}
            >
              <Menu/>
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              Pokémon API
            </Typography>
            <Button variant="text" color="inherit">
              Reset Page
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default MuiNavbar;
