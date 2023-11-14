import { Grid, MenuItem, Select, TextField } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GarageIcon from "@mui/icons-material/Garage";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import StartIcon from "@mui/icons-material/Start";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import CreateIcon from "@mui/icons-material/Create";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import types from "../../../components/VehicleTypes";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { Fragment, useState } from "react";
import TitleReturnBar from "../../../components/TitleReturnBar";
import { CalendarIcon } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";
import { addUserTodayTravel } from "../../../reducers/userTravelSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function AddTravelPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { vehicles } = useSelector((state) => state.userVehicles);

  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [type, settype] = useState("");
  const [car, setCar] = useState(""); //fuel Usage

  const handlestartChange = (event) => {
    setstart(event.target.value);
  };

  const handleendChange = (event) => {
    setend(event.target.value);
  };

  const handletypeChange = (event) => {
    settype(event.target.value);
  };

  const handleCarChange = (event) => {
    setCar(event.target.value);
  };

  const saveForm = () => {
    const newTravel = {
      from: start,
      to: end,
      CO2: 12,
      type: type,
      date: "22.08.2023",
    };

    dispatch(addUserTodayTravel(newTravel));
    history.push("/travel");
  };

  const saveAndNavigate = () => {
    const newTravel = {
      from: start,
      to: end,
      CO2: 12,
      type: type,
      date: "22.08.2023",
    };

    dispatch(addUserTodayTravel(newTravel));

    history.push("/travel");

    window.open(
      "https://www.google.com/maps/dir/?api=1&origin=" +
        start +
        "&destination=" +
        end +
        "&travelmode=" +
        type
    );
  };

  return (
    <Fragment>
      <TitleReturnBar site="Add Travel" />

      <Grid
        container
        spacing={5}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "1rem" }}
      >
        <Grid
          justifyContent="center"
          item
          style={{ width: "400px" }}
          xs={12}
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <DirectionsCarIcon sx={{ mr: 1, my: 0.5 }} />
          <FormControl fullWidth>
            <InputLabel variant="standard">Travel type</InputLabel>
            <Select
              variant="standard"
              value={type}
              onChange={handletypeChange}
              placeholder="Travel type"
            >
              {types.map((element) => (
                <MenuItem value={element}>{element}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          justifyContent="center"
          item
          style={{ width: "400px" }}
          xs={12}
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <GarageIcon sx={{ mr: 1, my: 0.5 }} />
          <FormControl fullWidth>
            <InputLabel variant="standard">Your vehicles</InputLabel>

            <Select
              variant="standard"
              value={car}
              onChange={handleCarChange}
              placeholder="Car"
            >
              {vehicles.map((element) => (
                <MenuItem value={element.fuelUsage}>
                  {element.brand} {element.model}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          justifyContent="center"
          item
          style={{ width: "400px" }}
          xs={12}
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <LocalGasStationIcon sx={{ mr: 1, my: 0.5 }} />
          <TextField
            variant="standard"
            label="Average fuel consumption"
            style={{ marginRight: 5, width: "400px" }}
          />
        </Grid>
        <Grid
          justifyContent="center"
          item
          style={{ width: "400px" }}
          xs={12}
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <StartIcon sx={{ mr: 1, my: 0.5 }} />
          <TextField
            variant="standard"
            label="Starting location"
            value={start}
            onChange={handlestartChange}
            style={{ marginRight: 5, width: "400px" }}
          />
        </Grid>
        <Grid
          justifyContent="center"
          item
          style={{ width: "400px" }}
          xs={12}
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <SportsScoreIcon sx={{ mr: 1, my: 0.5 }} />
          <TextField
            variant="standard"
            label="Destination"
            value={end}
            onChange={handleendChange}
            style={{ marginRight: 5, width: "400px" }}
          />
        </Grid>
        <Grid
          item
          style={{ width: "400px" }}
          xs={12}
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <CalendarIcon sx={{ mr: 1, my: 0.5 }} />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                style={{ marginRight: 5, width: "100%" }}
                label="Date of travel"
                fullWidth
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid
          container
          item
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={10}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<CreateIcon />}
              color="primary"
              size="large"
              onClick={() => saveForm()}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={10} sx={{ marginTop: "1rem" }}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<MyLocationIcon />}
              color="primary"
              size="large"
              // onClick={(() => window.open("https://www.google.com/maps?f=d&saddr=" + start + "&daddr=" + end + "&dirflg=d"))}
              onClick={() => saveAndNavigate()}
            >
              Save and navigate
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
