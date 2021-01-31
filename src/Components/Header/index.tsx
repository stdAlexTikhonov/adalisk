import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";
import { LOGOUT } from "../../utils/constants";
import { SearchInput } from "../SearchInput";
import { Props } from "./types";

const StyledToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const Header: React.FC<Props> = ({
  showBackButton,
  showSearchInput,
}) => {
  return (
    <div>
      <AppBar position="static">
        <StyledToolBar>
          {showBackButton && (
            <IconButton edge="start" color="inherit">
              <ArrowBackIcon />
            </IconButton>
          )}
          {showSearchInput && <SearchInput />}
          <Button color="inherit">{LOGOUT}</Button>
        </StyledToolBar>
      </AppBar>
    </div>
  );
};
