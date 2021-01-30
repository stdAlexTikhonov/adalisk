import React from "react";

declare global {
  interface Window {
    location: Location;
  }
}

export const NotFound = () => (
  <div>
    <h3>
      No match for <code>{window.location.pathname}</code>
    </h3>
  </div>
);
