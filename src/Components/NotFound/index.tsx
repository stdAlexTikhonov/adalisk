import React from "react";
import { Redirect } from "react-router-dom";
import Auth from "../../store/Authentication";
import { observer } from "mobx-react-lite";
import { Header } from "../Header";

declare global {
  interface Window {
    location: Location;
  }
}

export const NotFound = observer(() =>
  Auth.token ? (
    <div>
      <Header showBackButton={true} />
      <h3>
        No match for <code>{window.location.pathname}</code>
      </h3>
    </div>
  ) : (
    <Redirect to="/login" />
  )
);
