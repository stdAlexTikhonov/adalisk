import React from "react";
import { Redirect } from "react-router-dom";
import { Header } from "../Header";

const logged_in = true;

export const Table = () =>
  logged_in ? (
    <>
      <Header showSearchInput={true} />
      <div>This is table</div>
    </>
  ) : (
    <Redirect to="/login" />
  );
