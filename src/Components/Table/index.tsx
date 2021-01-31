import React from "react";
import { Redirect, NavLink } from "react-router-dom";
import { Header } from "../Header";
import Data from "../../store/Data";
import { TUser } from "../../utils/types";
import { observer } from "mobx-react-lite";
import Auth from "../../store/Authentication";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "calc(100vh - 110px)",
  },
});

interface Column {
  id:
    | "accountId"
    | "caseUid"
    | "creationDate"
    | "publicId"
    | "status"
    | "reference";
  label: string;
  minWidth?: number;
  align?: "right";
}

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

export const MyTable = observer(() => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return Auth.token ? (
    <div>
      <Header showSearchInput={true} />
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
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
              {Data.cases
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: TUser) => {
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
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "reference" ? (
                              <NavLink
                                to={"/data/" + row.caseUid}
                                onClick={() => Data.getCase(row.caseUid)}
                              >
                                {value}
                              </NavLink>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={Data.cases.length}
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
