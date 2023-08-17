import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import CommonImage from "../CommonImage";
import { logo } from "../../assets/images";
const mainWrapper = {
  display: "flex",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "6px",
};
const NoPageFound: React.FC = () => {
  return (
    <Box sx={mainWrapper}>
      <CommonImage
        width="100px"
        height="100px"
        src={logo}
        alt="Custom Icon"
        marginRight="10px"
      />
      <Typography variant="h1" color="primary" sx={{ textAlign: "center" }}>
        Page Not Found
      </Typography>
      <Typography gutterBottom variant="h4" sx={{ textAlign: "center" }}>
        The requested page does not exist.
      </Typography>
      <Button component={Link} to="/" variant="contained">
        Back to Home
      </Button>
    </Box>
  );
};

export default NoPageFound;
