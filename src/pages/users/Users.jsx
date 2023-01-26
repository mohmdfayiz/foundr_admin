import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataUsers } from "../../data/mockData";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Header from "../../components/Header";

const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Full Name",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width={"60%"}
            m="0 auto"
            p="5px"
            display={"flex"}
            justifyContent="center"
            backgroundColor={
              status === "Active"
                ? colors.greenAccent[600]
                : colors.redAccent[600]
            }
            borderRadius="4px"
          >
            {status === "Active" ? (
              <CheckCircleOutlinedIcon />
            ) : (
              <HighlightOffOutlinedIcon />
            )}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m={"20px"}>
      <Header title={"Users"} subtitle={"Manage all users"} />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            backgroundColor: colors.primary[400],
            border: "none",
          },
          // "& .MuiDataGrid-cell": {
          //   borderBottom: "",
          // },
          // "& .name-column--cell": {
          //   color: colors.greenAccent[300],
          // },
          // "& .MuiDataGrid-columnHeaders": {
          //   backgroundColor: colors.primary[400],
          //   // borderBottom: "none",
          // },
          // "& .MuiDataGrid-virtualScroller": {
          //   backgroundColor: colors.primary[400],
          // },
          // "& .MuiDataGrid-footerContainer": {
          //   borderTop: "none",
          //   backgroundColor: colors.primary[700],
          // },
          // "& .MuiCheckbox-root": {
          //   color: `${colors.greenAccent[200]} !important`,
          // },
        }}
      >
        <DataGrid rows={mockDataUsers} columns={columns} />
      </Box>
    </Box>
  );
};

export default Users;
