import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useStyles } from "./styles";

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            disabled={true}
          >
            <ArrowBackIcon />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
