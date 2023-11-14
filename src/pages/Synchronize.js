import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { synchronizeUser } from "../reducers/loginSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { GoogleIcon } from "../components/img/GoogleIcon";
import { GarminIcon } from "../components/img/GarminIcon";
import { FacebookIcon } from "../components/img/FacebookIcon";
import { InstagramIcon } from "../components/img/InstagramIcon";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { addUserVehicles } from "../reducers/userVehiclesSlice";
import { cars } from "../components/UserVehicles";

export default function Synchronize() {
  const dispatch = useDispatch();
  const history = useHistory();

  const doSynchronize = () => {
    dispatch(addUserVehicles(cars.cars));

    dispatch(synchronizeUser());
    history.push("/");
  };

  const [checked, setChecked] = React.useState([
    "1",
    "2",
    "3",
    "4",
    // "5",
    "6",
    // "7",
    "8",
    "9",
  ]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "50px" }}
      >
        <Grid item xs={10}>
          <Typography variant="h2">Synchronize Your Data</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <List sx={{ width: "100%" }}>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <GoogleIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-wifi" primary="Google Maps" />
              <Switch
                edge="end"
                onChange={handleToggle("1")}
                checked={checked.indexOf("1") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-wifi",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GoogleIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary="Google Home"
              />
              <Switch
                edge="end"
                onChange={handleToggle("2")}
                checked={checked.indexOf("2") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-bluetooth",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GoogleIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary="Google Calendar"
              />
              <Switch
                edge="end"
                onChange={handleToggle("3")}
                checked={checked.indexOf("3") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-bluetooth",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GoogleIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary="Google Wallet"
              />
              <Switch
                edge="end"
                onChange={handleToggle("4")}
                checked={checked.indexOf("4") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-bluetooth",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GarminIcon />
              </ListItemIcon>
              <ListItemText id="switch-list-label-bluetooth" primary="Garmin" />
              <Switch
                edge="end"
                onChange={handleToggle("5")}
                checked={checked.indexOf("5") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-bluetooth",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary="Facebook"
              />
              <Switch
                edge="end"
                onChange={handleToggle("6")}
                checked={checked.indexOf("6") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-bluetooth",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <InstagramIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary="Instagram"
              />
              <Switch
                edge="end"
                onChange={handleToggle("7")}
                checked={checked.indexOf("7") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-bluetooth",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ShoppingBasketIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary="CCC (Loyality Program App)"
              />
              <Switch
                edge="end"
                onChange={handleToggle("8")}
                checked={checked.indexOf("8") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-bluetooth",
                }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ShoppingBasketIcon />
              </ListItemIcon>
              <ListItemText
                id="switch-list-label-bluetooth"
                primary="Reserved (Loyality Program App)"
              />
              <Switch
                edge="end"
                onChange={handleToggle("9")}
                checked={checked.indexOf("9") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-bluetooth",
                }}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Button variant="outlined" fullWidth onClick={() => doSynchronize()}>
            Synchronize
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
