import React from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { TParams } from "./types";

const logged_in = false;

export const DataPage: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const { id } = match.params;
  return logged_in ? (
    <div>This is DataPage {id} </div>
  ) : (
    <Redirect to="/login" />
  );
};
