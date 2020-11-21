import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Home, Refresh } from "@material-ui/icons";

const ListNavbar = () => {
  return (
    <div>
        <List component="nav" arial-label="main-list">
          <ListItem button href="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Refresh />
            </ListItemIcon>
            <ListItemText>Refresh Pokémon Index</ListItemText>
          </ListItem>
        </List>
    </div>
  );
};

export default ListNavbar;