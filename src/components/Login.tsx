import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { http } from "../services/axios";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import login from "../services/login";
import { login } from "../services/login";
import * as yup from "yup";
import { useFormik } from "formik";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar, showSnackbar } from "../app/snackBarSlice";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const validationSchema = yup.object({
  email: yup
    .string()
    .max(20, "Max 20 characters")
    .required("Required")
    .email("invalid email address"),
  password: yup
    .string()
    .max(100, "Must be 15 characters or less")
    .required("Required"),
});

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const snackbarState = useSelector((state: any) => state.snackBar);
  console.log(snackbarState, "snack");

  // const Submit = async function (email: string, password: string) {
  //   const response = await login(email, password); // ini pake axios intance
  // };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: any) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
      let msg: any;
      try {
        // Submit(values.email, values.password);

        const res: any = await login(values.email, values.password);
        console.log(res, "ini resssss");

        // if (res.status === 200) {
        //   console.log("status oke");
        // }

        const access_token = localStorage.getItem("access_token");
        console.log(access_token, "access_token");

        if (res.status === 200) {
          console.log(access_token);
          navigate("/");
          dispatch(
            showSnackbar({
              isOpen: true,
              message: "Login Success",
              variant: "success",
            })
          );
        } else {
          navigate("/login");
          msg = res.error.response.data.message;
        }
      } catch (error) {
        console.log(error);
        dispatch(
          showSnackbar({
            isOpen: true,
            message: "invalid email or password",
            variant: "error",
          })
        );
        console.log(msg, "msg");
      }
    },
  });

  return (
    <>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}
            color="text.secondary"
            gutterBottom
          >
            Login Form
          </Typography>
          <form action="" onSubmit={formik.handleSubmit}>
            <FormControl style={{ width: "100%" }}>
              <TextField
                name="email"
                id="outlined-required"
                label="Email"
                style={{ width: "100%" }}
                // onChange={(e) => setEmail(e.target.value)}
                // defaultValue="Hello World"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              {/* <TextField
              type="password"
              name="password"
              id="outlined-required"
              label="Password"
              // defaultValue="Hello World"
              sx={{ marginTop: 2 }}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            /> */}
              <FormControl
                sx={{ marginTop: 1, width: "100%" }}
                variant="outlined"
              >
                {/* <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel> */}
                <TextField
                  name="password"
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  label="Password"
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </FormControl>

            {/* <CardActions> */}
            <Button
              // onClick={() => Submit(email, password)}
              size="large"
              variant="contained"
              style={{ width: "100%", marginTop: 8 }}
              type="submit"
              endIcon={<LocalPostOfficeIcon />}
            >
              Submit
            </Button>
            {/* </CardActions> */}
          </form>
        </CardContent>
      </Card>
      <div>
        <Snackbar
          open={snackbarState.isOpen}
          autoHideDuration={6000}
          onClose={() => dispatch(closeSnackbar())}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
        >
          <Alert
            onClose={() => dispatch(closeSnackbar())}
            severity={snackbarState.variant}
            sx={{ width: "100%" }}
          >
            {snackbarState.message}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}
