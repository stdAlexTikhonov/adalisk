import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { SEARCH } from "../../utils/constants";
import CasesData from "../../store/CasesData";
import { observer } from "mobx-react-lite";

type Props = {};

const StyledSearchInput = styled.div`
  position: relative;
  margin-left: auto;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
  margin-left: 0;
`;

const StyledSearchIcon = styled.div`
  padding: 0 16px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInputBase = styled(InputBase).attrs((props) => ({
  inputProps: { "aria-label": "search" },
  placeholder: SEARCH,
  value: props.value,
  onChange: props.onChange,
}))`
  padding: 8px;
  width: 15ch;
  color: white;
  padding-left: calc(1em + 32px);
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    width: 40ch;
  }
`;

export const SearchInput: React.FC<Props> = observer((props) => (
  <StyledSearchInput {...props}>
    <StyledSearchIcon>
      <SearchIcon />
    </StyledSearchIcon>
    <StyledInputBase
      value={CasesData.searchField}
      onChange={(e) => CasesData.setSearchField(e.target.value)}
    />
  </StyledSearchInput>
));
