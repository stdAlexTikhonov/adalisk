import React from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { TParams } from "./types";
import { Header } from "../Header";
import Data from "../../store/Data";
import Auth from "../../store/Authentication";
import { observer } from "mobx-react-lite";
import { TObject } from "../../utils/types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styled from "styled-components";

const StyledWrapper = styled.div`
  flex-grow: 1;
  display: flex;
`;

const StyledList = styled.div`
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const StyledListItem = styled(ListItem)`
  display: flex;
  border-bottom: 1px solid #ccc;
`;

export const DataPage: React.FC<RouteComponentProps<TParams>> = observer(
  ({ match }) => {
    const { id } = match.params;
    const { keys } = Data;
    const selected: TObject = { ...Data.selected };

    return Auth.token ? (
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header showBackButton={true} />
        <StyledWrapper>
          <StyledList>
            {selected &&
              keys.map((key: string, i: number) => (
                <StyledListItem button={true} key={i}>
                  <ListItemText style={{ minWidth: 150, maxWidth: 150 }}>
                    <span style={{ fontWeight: "bold" }}>{key}:</span>
                  </ListItemText>
                  <ListItemText>{selected[key]}</ListItemText>
                </StyledListItem>
              ))}
          </StyledList>
        </StyledWrapper>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
);
