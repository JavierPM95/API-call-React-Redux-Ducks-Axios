import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Home, Refresh } from "@material-ui/icons";

const List = () => {
  return (
    <div>

        <List component="nav" arial-label="main-list">
          <ListItem button>
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

export default List;
