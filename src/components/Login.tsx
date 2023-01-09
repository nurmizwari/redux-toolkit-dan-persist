import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import { http } from "../services/axios";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../services/login";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const Submit = async function (email: string, password: string) {
    const response = await login(email, password); // ini pake axios intance
  };
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
          //   alignItems={"center"}
        >
          Login Form
        </Typography>
        <FormControl
          style={{ width: "100%" }}
          //   onSubmit={() => Submit(email, password)}
        >
          {/* <InputLabel htmlFor="my-input">Email address</InputLabel> */}
          <TextField
            required
            id="outlined-required"
            label="Email"
            style={{ width: "100%" }}
            onChange={(e) => setEmail(e.target.value)}
            // defaultValue="Hello World"
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            // defaultValue="Hello World"
            sx={{ marginTop: 2 }}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText> */}
        </FormControl>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => Submit(email, password)}
          size="large"
          variant="contained"
          style={{ width: "100%" }}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
