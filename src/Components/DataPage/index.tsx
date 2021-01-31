import React from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { TParams } from "./types";
import { Header } from "../Header";

const logged_in = true;

export const DataPage: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const { id } = match.params;
  return logged_in ? (
    <>
      <Header showBackButton={true} />
      <div>This is DataPage {id} </div>
    </>
  ) : (
    <Redirect to="/login" />
  );
};
