//import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
//import Card from "@material-ui/core/Card";
//import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import "./App.css";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "react-tabs/style/react-tabs.css";
import TabComponent from "./Components/TabComponent";

function App() {
  const [email, setEmail] = useState("");

  const onChangeText = (e) => {
    setEmail(e.target.value);
  };

  const useStyles = makeStyles((theme) => {
    return {
      root: {
        flexGrow: 1,
      },
      paper: {
        height: 140,
        width: 100,
      },
      control: {
        padding: theme.spacing(2),
      },
    };
  });

  const classes = useStyles();

  return (
    <div className="App">
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2">Python Class Score</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="textinput"
              label="Enter your CMU email"
              value={email}
              onChange={onChangeText}
            />
          </Grid>
          <Grid item xs={12}>
            <TabComponent email={email} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
