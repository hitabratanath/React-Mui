import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [value, setValue] = useState("");
  const handleValue = (event) => {
    setValue(event.target.value);
  };
  console.log(value);
  return (
    <Box width="150px" justifyContent="center">
      <TextField
        label="Select country"
        fullWidth
        select
        value={value}
        onChange={handleValue}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">United States</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
export default MuiSelect;
