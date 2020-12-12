import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../svgs/signupbcg.svg";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import {Redirect} from 'react-router-dom';
import Auth from "./firebase";
import AuthContext from "./AuthContext";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        Bounty Hunter
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${image1})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#DF7332",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#DF7332",
  },
}));

function handleSubmit(fields, confirm) {
  console.log(fields);
  if (fields.password === confirm) {
    Auth.createUserWithEmailAndPassword(fields.email,fields.password).then(creds=>{
      console.log(creds)
      creds.user.updateProfile({
        displayName: fields.displayName,
        phoneNumber: fields.mobile,
      })
    }).then(user=>{
      console.log(user)
      window.location.assign('/dashboard')
    }).catch(err=>{
      console.log(err)
    })
  }
}

export default function SignUpSide() {
  const classes = useStyles();
  const [displayName, updateName] = useState("");
  const [username, updateUid] = useState("");
  const [password, updatePassword] = useState("");
  const [cP, updateCp] = useState("");
  const [mobile, updatePhone] = useState("");
  const [email, updateEmail] = useState("");

  return (
    <AuthContext.Consumer>
    {(token,updateToken)=>(
    <>
    {!token?
    (<Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="Name"
            autoComplete="Name"
            autoFocus
            value={displayName}
            onChange={(e) => updateName(e.target.value)}
          />

          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="gender1">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            display={username}
            onChange={(e) => updateUid(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            display={email}
            onChange={(e) => updateEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Contact Number"
            name="phone"
            autoComplete="phone"
            autoFocus
            value={mobile}
            onChange={(e) => updatePhone(e.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => updatePassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="cpassword"
            label="Confirm Password"
            type="password"
            id="cpassword"
            password={cP}
            onChange={(e) => updateCp(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="#953C25"
            className={classes.submit}
            onClick={() =>
              handleSubmit({ displayName, username, password, email, mobile }, cP)
            }
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>):<Redirect to="/dashboard" />}
    </>
    )}
    </AuthContext.Consumer>
  );
}
