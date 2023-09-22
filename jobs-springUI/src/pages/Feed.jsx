import {
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { MdArrowBackIos } from "react-icons/md";
import "../App.css";

const Feed = () => {
  const [isHovered, setIsHovered] = useState(false);

  const iconStyle = {
    verticalAlign: "middle",
    marginRight: "5px",
  };

  const buttonStyle = {
    display: "inline-block",
    backgroundColor: isHovered ? "#F2526E" : "#E81557",
    color: "black",
    padding: "10px 20px",
    transition: "background-color 0.1s ease-in-out",
    marginBottom: "10px",
    verticalAlign: "middle",
    borderRadius: "5px",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [query, setQuery] = useState("");
  const [post, setPost] = useState();

  //
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`http://localhost:8080/posts/${query}`);
      setPost(response.data);
    };
    const fetchInitialPosts = async () => {
      const response = await axios.get(`http://localhost:8080/allPosts`);
      console.log(response);
      setPost(response.data);
    };
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);
  return (
    <div>
      <Grid container spacing={2} sx={{ marginLeft:'0.8em', marginTop:'2%' }}>
        <Grid item xs={12} sx={12} md={12} lg={12}>
          <a
            href="/"
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <MdArrowBackIos style={iconStyle} />
          </a>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              label="Search"
              placeholder=""
              sx={{ width: "39%",}}
              fullWidth
              onChange={(e) => setQuery(e.target.value)}
              
            />
            <a
              href="/employer/dashboard"
              style={{
                marginLeft: "5rem",
                color: "white",
                fontFamily: "IBM Plex Sans",
                fontSize: "2em",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Looking to hire?
            </a>
          </div>
        </Grid>
        {post &&
          post.map((p) => {
            return (
              <Grid key={p.id} item xs={12} md={6} lg={4}>
                <Card
                  sx={{
                    padding: "3%",
                    overflow: "hidden",
                    width: "84%",
                    backgroundColor: "#65BF8F",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "2rem", fontWeight: "600" }}
                  >
                    {p.profile}
                  </Typography>
                  <Typography
                    sx={{ color: "#585858", marginTop: "2%" }}
                    variant="body"
                  >
                    Description: {p.desc}
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="h6">
                    Experience: {p.exp} years
                  </Typography>
                  <Typography gutterBottom variant="body">
                    Skills :{" "}
                  </Typography>
                  {p.techs.map((s, i) => {
                    return (
                      <Typography variant="body" gutterBottom key={i}>
                        {s} .{` `}
                      </Typography>
                    );
                  })}
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Feed;
