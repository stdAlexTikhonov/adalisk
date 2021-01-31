import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { LOGIN, PASSWORD } from "../../utils/constants";
import Auth from "../../store/Authentication";
import { observer } from "mobx-react-lite";
import { Redirect } from "react-router-dom";

const StyledForm = styled.form.attrs((props) => ({
  oValidate: true,
  autoComplete: "off",
}))`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledInput = styled(TextField).attrs((props) => ({
  variant: "outlined",
  type: props.type,
  label: props.label,
  value: props.value,
  onChange: props.onChange,
}))`
  width: 25ch;
  margin: 10px !important;
`;

export const Login = observer(() =>
  Auth.token ? (
    <Redirect to="/data" />
  ) : (
    <StyledForm>
      <StyledInput
        label={LOGIN}
        value={Auth.login}
        onChange={(e) => Auth.setLogin(e.target.value)}
      />
      <StyledInput
        label={PASSWORD}
        type="password"
        value={Auth.password}
        onChange={(e) => Auth.setPassword(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => Auth.loginUser()}
      >
        {LOGIN}
      </Button>
    </StyledForm>
  )
);
