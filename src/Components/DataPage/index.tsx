import React from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { TParams } from "./types";
import { Header } from "../Header";
import Data from "../../store/Data";
import Auth from "../../store/Authentication";
import { observer } from "mobx-react-lite";

export const DataPage: React.FC<RouteComponentProps<TParams>> = observer(
  ({ match }) => {
    const { id } = match.params;

    return Auth.token ? (
      <>
        <Header showBackButton={true} />
        <div>{Data.selected?.status}</div>
      </>
    ) : (
      <Redirect to="/login" />
    );
  }
);
