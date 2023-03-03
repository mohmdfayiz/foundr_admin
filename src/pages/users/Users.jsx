import React, { useEffect, useState } from "react";
import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Header from "../../components/Header";
import { getUsers, updateUserStatus } from "../../helper/helper";
import { toast } from "react-hot-toast";

const Users = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);
  const [action, setAction] = useState(false);

  const handleUpdateStatus = async (userId) => {
    const { status } = await updateUserStatus(userId);
    console.log(status);
    status === 200
      ? toast.success("Status updated!")
      : toast.error("Something went wrong!");
    setAction(!action);
  };

  useEffect(() => {
    getUsers().then(({ data }) => {
      setUsers(data);
    });
  }, [action]);

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    {
      field: "userName",
      headerName: "User Name",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "location",
      headerName: "Location",
      valueGetter: (params) => {
        return params.row.location?.country;
      },
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box>
            {params.row.status === "Active" ? (
              <Button
                onClick={() => {
                  handleUpdateStatus(params.row._id);
                }}
                sx={{ backgroundColor: colors.greenAccent[500] }}
                variant="contained"
              >
                <CheckCircleOutlinedIcon />
                {params.row.status}
              </Button>
            ) : (
              <Button
                onClick={() => {
                  handleUpdateStatus(params.row._id);
                }}
                sx={{ backgroundColor: colors.redAccent[500] }}
                variant="contained"
              >
                <HighlightOffOutlinedIcon />
                {params.row.status}
              </Button>
            )}
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
        <DataGrid rows={users} columns={columns} getRowId={(e) => e._id} />
      </Box>
    </Box>
  );
};

export default Users;
