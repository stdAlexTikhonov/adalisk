import React from "react";
import { Redirect, NavLink } from "react-router-dom";
import { Header } from "../Header";
import CasesData from "../../store/CasesData";
import { TCase } from "../../utils/types";
import { observer } from "mobx-react-lite";
import Auth from "../../store/Authentication";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Column } from "./types";
import styled from "styled-components";
import { autorun } from "mobx";

const columns: Column[] = [
  {
    id: "reference",
    label: "Reference",
    minWidth: 170,
  },
  { id: "accountId", label: "Account ID", minWidth: 170 },
  { id: "caseUid", label: "Case ID", minWidth: 100 },
  {
    id: "creationDate",
    label: "Creation Date",
    minWidth: 170,
  },
  {
    id: "publicId",
    label: "Public ID",
    minWidth: 170,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
  },
];

const StyledContainer = styled(TableContainer)`
  max-height: calc(100vh - 115px);
`;

export const CasesTable = observer(() => {
  const { page, rowsPerPage, searchField } = CasesData;

  autorun(() => {
    if (CasesData.cases.length === 0) CasesData.fetchData();
  });

  const emphase = (value: string) =>
    value
      .split(searchField)
      .join("|" + searchField + "|")
      .split("|")
      .map((item: string, i: number) =>
        item === searchField ? (
          <span key={i} style={{ background: "yellow" }}>
            {item}
          </span>
        ) : (
          <span key={i}>{item}</span>
        )
      );

  const handleChangePage = (event: unknown, newPage: number) => {
    CasesData.setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    CasesData.setRowsPerPage(+event.target.value);
    CasesData.setPage(0);
  };

  return Auth.token ? (
    <div>
      <Header showSearchInput={true} />
      <Paper>
        <StyledContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column: Column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {CasesData.filtered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: TCase) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.caseUid}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id + row.caseUid}
                            align={column.align}
                          >
                            {column.id === "reference" ? (
                              <NavLink
                                to={"/case/" + row.caseUid}
                                onClick={() => CasesData.getCase(row.caseUid)}
                              >
                                {emphase(value)}
                              </NavLink>
                            ) : (
                              emphase(value)
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </StyledContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={CasesData.filtered.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  ) : (
    <Redirect to="/login" />
  );
});
