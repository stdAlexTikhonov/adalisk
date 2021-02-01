import React from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { TParams } from "./types";
import { Header } from "../Header";
import Data from "../../store/Data";
import Auth from "../../store/Authentication";
import { observer } from "mobx-react-lite";
import { TObject } from "../../utils/types";

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
        <div style={{ flexGrow: 1, display: "flex" }}>
          <div style={{ margin: "auto" }}>
            {selected &&
              keys.map((key: string, i: number) => (
                <div key={i} style={{ display: "flex" }}>
                  <div>{key}: </div>
                  <div>{selected[key]}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
);
