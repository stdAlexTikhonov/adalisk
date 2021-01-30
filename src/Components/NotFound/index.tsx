import React from "react";
import { Redirect } from "react-router-dom";

declare global {
  interface Window {
    location: Location;
  }
}

const logged_in = false;

export const NotFound = () =>
  logged_in ? (
    <div>
      <h3>
        No match for <code>{window.location.pathname}</code>
      </h3>
    </div>
  ) : (
    <Redirect to="/login" />
  );
