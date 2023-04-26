import React from "react";
import { Typography } from "@mui/material";

const ChakraStatusLabels = () => {
  return (
    <>
      <Typography variant="subtitle1">
        Root: <span style={{ color: "#f44336" }}>under-active (-12%)</span>
      </Typography>
      <Typography variant="subtitle1">
        Sacral: <span style={{ color: "#4caf50" }}>open (19%)</span>
      </Typography>
      <Typography variant="subtitle1">
        Navel: <span style={{ color: "#f44336" }}>under-active (-19%)</span>
      </Typography>
      <Typography variant="subtitle1">
        Heart: <span style={{ color: "#4caf50" }}>open (50%)</span>
      </Typography>
      <Typography variant="subtitle1">
        Throat: <span style={{ color: "#f44336" }}>under-active (-44%)</span>
      </Typography>
      <Typography variant="subtitle1">
        Third Eye: <span style={{ color: "#f44336" }}>under-active (-19%)</span>
      </Typography>
      <Typography variant="subtitle1">
        Crown: <span style={{ color: "#4caf50" }}>open (25%)</span>
      </Typography>
    </>
  );
};

export default ChakraStatusLabels;
