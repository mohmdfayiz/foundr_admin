import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select,
  useTheme,
  MenuItem,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { tokens } from "../../theme";
import converToBase64 from "../../helper/convert";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { validateEvent } from "../../helper/validate";
import { hostEvent } from "../../helper/helper";
import { useSelector, useDispatch } from "react-redux";
import { setShow } from "../../features/eventModal/modalSlice";

export const NewEvent = () => {

  const [date, setDate] = useState(dayjs());
  const [venue, setVenue] = useState("");
  const [mentorImage, setMentorImage] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dispatch = useDispatch()
  const {show} = useSelector((state)=>state.showModal)

  const onUploadMentor = async (e) => {
    const base64 = await converToBase64(e.target.files[0]);
    setMentorImage(base64);
  };

  const handleClose = () => {
    dispatch(setShow())
  };

  const handleChange = (event) => {
    setVenue(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      mentorName: "",
      title: "",
      description: "",
      joinLink: "",
      enrollmentFee: ""
    },
    validate: validateEvent,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = Object.assign(
        values,
        { mentorImage: mentorImage },
        { venue: venue },
        { dateAndTime: date }
      );
      let eventPromise = hostEvent(values);
      toast.promise(eventPromise, {
        loading: "Loading...",
        success: "Hosted successfully.",
        error: "Could not host..!",
      });
    },
  });

  return (
    <Dialog
        open={show}
        maxWidth={"md"}
        component={"form"}
        onSubmit={formik.handleSubmit}
      >
        <DialogTitle
          sx={{ fontWeight: "bold", background: colors.primary[400] }}
        >
          New Event
        </DialogTitle>
        <DialogContent sx={{ background: colors.primary[400] }}>
          <DialogContentText>Fill all the fields below.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name of Mentor"
            type="text"
            fullWidth
            variant="standard"
            {...formik.getFieldProps("mentorName")}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Title of Event"
            type="text"
            fullWidth
            variant="standard"
            {...formik.getFieldProps("title")}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            {...formik.getFieldProps("description")}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Join Link"
            type="text"
            fullWidth
            variant="standard"
            {...formik.getFieldProps("joinLink")}
          />

          <Box display={"inline-flex"} gap={'10px'} my={1}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                disablePast={true}
                closeOnSelect={false}
                renderInput={(props) => <TextField {...props} />}
                inputProps={{ "aria-label": "Without label" }}
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
              />
            </LocalizationProvider>
            <Select
              sx={{ minWidth: 120 }}
              displayEmpty
              value={venue}
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Venue</em>
              </MenuItem>
              <MenuItem value={"Discord"}>Discord</MenuItem>
              <MenuItem value={"Google Meet"}>Google Meet</MenuItem>
              <MenuItem value={"Zoom"}>Zoom</MenuItem>
            </Select>

            <OutlinedInput
            id="enrollmentFee"
            type="number"
            {...formik.getFieldProps("enrollmentFee")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{ mr: 2 }}
              component="label"
              startIcon={<PersonIcon />}
            >
              Upload an image of Mentor
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={onUploadMentor}
              />
            </Button>

            {mentorImage && (
              <img
                src={mentorImage}
                style={{ marginLeft: "10px" }}
                width={100}
                alt="mentorImage"
              />
            )}
          </Box>
        </DialogContent>
        <DialogActions sx={{ background: colors.primary[400] }}>
          <Button
            variant="filled"
            sx={{ color: "blue", fontWeight: "bold" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            sx={{ color: "blue", fontWeight: "bold" }}
            type="submit"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
  )
}
