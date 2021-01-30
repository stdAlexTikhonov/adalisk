import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { TParams } from "./types";

export const DataPage: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const { id } = match.params;
  return <div>This is DataPage {id} </div>;
};
