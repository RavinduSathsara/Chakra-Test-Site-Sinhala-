import React from "react";
import { Typography } from "@mui/material";

const ChakraStatusLabels = ({ root }) => {
  // Define an object to store chakra names and status levels
  const chakras = {
    root: root,
    sacral: 25,
    solarPlexus: 70,
    heart: 90,
    throat: 50,
    thirdEye: -30,
    crown: 60,
  };

  // Create an empty array to store the chakra status labels
  const chakraLabels = [];

  // Loop through the chakras object and push the status label for each chakra to the chakraLabels array
  for (const chakra in chakras) {
    if (chakras[chakra] < -10) {
      chakraLabels.push(
        <Typography variant="subtitle1">
          <span style={{ color: "#C62828" }}>
            {chakra} is under-active ({chakras[chakra]}%)
          </span>
        </Typography>
      );
    } else if (chakras[chakra] >= -10 && chakras[chakra] < 10) {
      chakraLabels.push(
        <Typography variant="subtitle1">
          <span style={{ color: "#1976D2" }}>
            {chakra} is balanced ({chakras[chakra]}%)
          </span>
        </Typography>
      );
    } else {
      chakraLabels.push(
        <Typography variant="subtitle1">
          <span style={{ color: "#43A047" }}>
            {chakra} is over-active ({chakras[chakra]}%)
          </span>
        </Typography>
      );
    }
  }

  // Return the chakra status labels array as a div
  return <div style={{ textAlign: "left" }}>{chakraLabels}</div>;
};

export default ChakraStatusLabels;
