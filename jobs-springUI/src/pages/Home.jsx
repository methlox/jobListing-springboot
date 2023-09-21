import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        // backgroundColor: "black",
        background: 'rgb(2,0,36)',
        background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,118,95,1) 29%, rgba(25,141,138,1) 100%)',
      
      }}
    >
      <Typography
        sx={{ marginTop: "5%", color: "white", fontFamily: "Eczar" }}
        variant="h2"
        align="center"
      >
        Jobx
      </Typography>
      <Typography
        sx={{ color: "white", fontFamily: "Inter" }}
        variant="h6"
        align="center"
      >
        get hired, within seconds!
      </Typography>
      <div>
        <ul className="ul">
          <li>
            <Button sx={{ margin: "2% 3%" }} variant="outlined">
              <Link to="/employer/dashboard">Hire talent</Link>
            </Button>
          </li>
          <li>
            <Button sx={{ margin: "2% 3%" }} variant="outlined">
              <Link to="/employee/feed">Get Job Now</Link>
            </Button>
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default Home;
