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
import { useHistory } from "react-router-dom";
import Auth from "../../store/Authentication";

const StyledToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const StyledLogin = styled.span`
  font-size: 17px;
  padding: 5px;
`;

export const Header: React.FC<Props> = ({
  showBackButton,
  showSearchInput,
}) => {
  let history = useHistory();

  return (
    <div>
      <AppBar position="static">
        <StyledToolBar>
          {showBackButton && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => history.goBack()}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          {showSearchInput && <SearchInput />}
          <div>
            <StyledLogin>{Auth.login}</StyledLogin>
            <Button color="inherit" onClick={() => Auth.logout()}>
              {LOGOUT}
            </Button>
          </div>
        </StyledToolBar>
      </AppBar>
    </div>
  );
};
