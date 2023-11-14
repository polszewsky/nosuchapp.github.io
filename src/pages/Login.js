import { Button, CardMedia, Grid, TextField, Typography } from "@mui/material";
import { GoogleIcon } from "../components/img/GoogleIcon";
import { useDispatch, useSelector } from "react-redux";
import { loginAuthenticate } from "../reducers/loginSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import homelogo from "../components/img/homelogo.jpg";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuth = false } = useSelector((state) => state.login);

  useEffect(() => {
    isAuth && history.push("/synchronize");
  }, [isAuth, history]);

  const doLogin = () => {
    dispatch(loginAuthenticate());
  };

  return (
    <>
      {!isAuth && (
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
            <Grid item xs={12}>
              <CardMedia
                component="img"
                height="360"
                width="360"
                image={homelogo}
                alt="Paella dish"
                sx={{ objectFit: "contain" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "-1rem" }}
          >
            <Grid item xs={10}>
              <Typography
                variant="h2"
                sx={{ fontWeight: 500, color: "#074548" }}
              >
                <span style={{ fontSize: "48pt" }}>e</span>CO
                <span style={{ fontSize: "21pt", fontWeight: 500 }}>
                  2
                </span>{" "}
                <span style={{ fontSize: "36pt" }}>LIFE</span>
              </Typography>
            </Grid>

            <Grid item xs={10}>
              <Typography variant="h2" sx={{ fontSize: "8pt", color: "#888" }}>
                Created By <b>NoSuchAppException</b>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={10}>
              <TextField
                fullWidth
                id="filled-password-input"
                label="email"
                type="text"
                value="johndoe@gmail.com"
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                fullWidth
                id="filled-password-input"
                label="password"
                type="password"
                value="SuperAdmin123"
              />
            </Grid>
            <Grid item xs={10}></Grid>

            <Grid item xs={10}>
              <Button variant="outlined" fullWidth onClick={() => doLogin()}>
                <GoogleIcon sx={{ marginRight: "1rem" }} />
                Sign in with Google
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
