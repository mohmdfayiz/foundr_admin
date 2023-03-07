import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

const columns = [
  {
    id: "profilePhoto",
    label: "Photo",
    minWidth: 30,
  },
  { id: "userName", label: "Full Name", minWidth: 150 },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
  },
  {
    id: "location",
    label: "Country",
    minWidth: 150,
  },
];

const AttendiesTable = ({ attendees }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440, backgroundColor: colors.primary[400] }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
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
            {attendees
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === "profilePhoto") {
                        return (
                          <TableCell key={column.id}>
                            <img
                              src={value}
                              alt="avatar"
                              style={{ width: 40, height:40, borderRadius: "50%", objectFit:'cover' }}
                            />
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell key={column.id}>
                            {column.id === "location"
                              ? `${row.location["country"]}, ${row.location["city"]}`
                              : value}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={attendees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default AttendiesTable;
