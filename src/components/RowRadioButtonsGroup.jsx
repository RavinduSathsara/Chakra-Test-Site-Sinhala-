import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RowRadioButtonsGroup({ Label }) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{Label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{ mb: 5 }}
      >
        <FormControlLabel
          value="-2"
          control={<Radio />}
          label="not at all"
          labelPlacement="start"
        />
        <FormControlLabel
          sx={{ ml: 2 }}
          value="-1"
          control={<Radio />}
          label=""
        />
        <FormControlLabel value="0" control={<Radio />} label="" />
        <FormControlLabel value="1" control={<Radio />} label="" />
        <FormControlLabel value="2" control={<Radio />} label="definitely" />
      </RadioGroup>
    </FormControl>
  );
}
