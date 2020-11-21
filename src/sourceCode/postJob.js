import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "20px",
    padding: "60px",
    boxShadow: "-1px 4px 20px -6px rgba(0, 0, 0, 0.75)",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    height: "70px",
    width: "70px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    // backgroundColor: "primary",
  },
  desc: {
    width: "100%",
    fontSize: "large",
  },
  fileupload: {
    // backgroundColor: "primary",
    color: "white",
  },
  icon: {
    height: '40px',
    width: '40px',
  },
}));

export default function SignUp() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PostAddOutlinedIcon className={classes.icon} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Post a Job
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextareaAutosize
                aria-label="minimum height"
                rowsMin={3}
                placeholder="Minimum 3 rows"
                placeholder="Description in not more than 1000 words"
                required
                className={classes.desc}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="date"
                label="Deadline Date"
                type="date"
                defaultValue=""
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="time"
                label="Deadline Time"
                type="time"
                defaultValue=""
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="reward"
                label="Enter Reward in "
                type="text"
                id="reward"
                autoComplete=""
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                color="secondary"
                className={classes.fileupload}
              >
                Upload Image
                <input type="file" hidden />
              </Button>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Post
          </Button>
        </form>
      </div>
    </Container>
  );
}