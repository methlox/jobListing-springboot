import React, { useEffect, useState } from "react";
import { Typography, Button, Box, Grid, Card } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";
import { IoIosArrowForward } from "react-icons/io";
import ui from "../assets/images/ui.png";
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    display: "inline-block",
    backgroundColor: isHovered ? "#F27457" : "#BF665E",
    color: "black",
    textDecoration: "none",
    fontFamily: "Inter",
    fontSize: "1.3em",
    padding: "10px 20px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease-in-out",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundColor: "#000000",
        // background:
        //   "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,118,95,1) 29%, rgba(25,141,138,1) 100%)",
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
        {/* <Link to="/employer/dashboard">
          Looking to hire someone? Post here.
        </Link> */}

        <Grid xs={12} md={6} lg={4}>
          <Card
            sx={{
              marginTop: "35px",
              padding: "3%",
              overflow: "hidden",
              width: "65%",
              backgroundColor: "#F2AE30",

              padding: "50px",
            }}
          >
            <Typography
              sx={{
                color: "black",
                fontFamily: "IBM Plex Sans",
                marginBottom: "10px",
              }}
              variant="h4"
              align="left"
            >
              Browse through thousands of jobx
            </Typography>

            <a
              href="/employee/feed"
              style={buttonStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} // Add rounded corners  }}
            >
              Get Started
            </a>
            <img
              src={ui}
              style={{
                maxWidth: "70rem",
                maxHeight: "60rem",
                marginTop: "2em",
              }}
            />
          </Card>
        </Grid>
      </div>
    </Box>
  );
};

export default Home;
