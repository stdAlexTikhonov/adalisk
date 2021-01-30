import React from "react";
import { Redirect } from "react-router-dom";

const logged_in = false;

export const Table = () =>
  logged_in ? <div>This is table</div> : <Redirect to="/login" />;
