import React from "react";
import { Redirect, NavLink } from "react-router-dom";
import { Header } from "../Header";
import Data from "../../store/Data";
import { TUser } from "../../utils/types";
import { observer } from "mobx-react-lite";
import Auth from "../../store/Authentication";

export const Table = observer(() => {
  return Auth.token ? (
    <>
      <Header showSearchInput={true} />
      <div>
        {Data.cases.map((c: TUser) => (
          <NavLink
            to={"/data/" + c.caseUid}
            key={c.caseUid}
            onClick={() => Data.getCase(c.caseUid)}
          >
            {c.status}
          </NavLink>
        ))}
      </div>
    </>
  ) : (
    <Redirect to="/login" />
  );
});
