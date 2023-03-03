import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import dateFormat from "dateformat";
import StatBox from "../../components/StatBox";
import EmailIcon from "@mui/icons-material/Email";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ArticleIcon from "@mui/icons-material/Article";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { getEvents } from "../../helper/helper";
import { useEffect, useState } from "react";
import BarChart from "../../components/BarChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const now = new Date();

  const [events, setEvents] = useState([]);

  const chartData = {
    labels: events?.map((event) => event.mentorName),
    datasets: [
      {
        label: "No of Enrollments",
        data: events?.map((event) => event.attendees.length),
      },
    ],
  };

  useEffect(() => {
    getEvents().then((data) => {
      setEvents(data);
    });
  }, []);

  return (
    <Box m={"20px"}>
      <Box
        sx={{ display: "flex", gap: "20px", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            width: "80%",
            borderRadius: "10px",
            backgroundColor: colors.primary[400],
            display: "flex",
            justifyContent: "space-between",
            p: "1rem",
          }}
        >
          <Box>
            <Typography variant="h3" fontWeight={"bold"}>
              Hello Admin 👋
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]}>
              Welcome to Dashboard
            </Typography>
            <Typography sx={{ mt: "10px" }}>
              Congratulations, You have some good newses, <br /> look into that!
            </Typography>
          </Box>
          <Box>
            <img
              style={{ height: "100px" }}
              src="/assets/admin.svg"
              alt="admin"
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "20%",
            borderRadius: "10px",
            backgroundColor: colors.primary[400],
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">{dateFormat(now, "mmmm")}</Typography>
          <Typography variant="h1" fontWeight={"bold"}>
            {dateFormat(now, "dd")}
          </Typography>
        </Box>
      </Box>
      <Box
        display="grid"
        mt="20px"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          borderRadius="8px"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="132"
            subtitle="New Users"
            progress="0.75"
            increase="+14%"
            icon={
              <GroupAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          borderRadius="8px"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1261"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          borderRadius="8px"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="36"
            subtitle="Published Articles"
            progress="0.75"
            increase="+14%"
            icon={
              <ArticleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          borderRadius="8px"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="04"
            subtitle="Upcoming Events"
            progress="0.75"
            increase="+14%"
            icon={
              <LiveTvIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
      <Box sx={{maxHeight:'400px'}}>
        <BarChart chartData={chartData} />
      </Box>
    </Box>
  );
};

export default Dashboard;
