import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";
import { LOGIN } from "../../utils/constants";
import { SearchInput } from "../SearchInput";

const StyledToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <StyledToolBar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            disabled={true}
          >
            <ArrowBackIcon />
          </IconButton>
          <SearchInput />
          <Button color="inherit">{LOGIN}</Button>
        </StyledToolBar>
      </AppBar>
    </div>
  );
};
