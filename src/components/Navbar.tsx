// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="flex bg-blue-500 justify-between px-8 h-14 items-center text-white ">
//       <h1 className="text-2xl font-medium ">MyBlog</h1>
//       <div className="flex justify-around w-40">
//         <Link to={"/"}>Home</Link>
//         <Link to={"add-post"}>Post</Link>
//       </div>
//     </nav>
//   );
// }

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Slide, Stack, useScrollTrigger } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export default function ButtonAppBar() {
  let location = useLocation();
  const navigate = useNavigate();
  const logout: any = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Box sx={{ marginBottom: "100px" }}>
      <AppBar position="fixed" sx={{ flexGrow: 1, backgroundColor: "grey" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GOORITA
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <div>
            <Stack direction="row" spacing={2}>
              <Link to={"/"}>
                <h6>Home</h6>
              </Link>
              <Link to={"/add-post"}>
                <h6>Post</h6>
              </Link>
              <Link to={"/api"}>
                <h6>API</h6>
              </Link>
              {location.pathname == "/" ? (
                <></>
              ) : (
                <Link to={"/login"}>
                  <h6>Login</h6>
                </Link>
              )}
              <Typography
                onClick={() => logout()}
                style={{ cursor: "pointer" }}
              >
                Logout
              </Typography>
            </Stack>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
