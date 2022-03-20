import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";
const MuiToggleButton = () => {
  const [formats, setFormats] = useState([]);
  const handleFormatChange = (events, updatedFormats) => {
    setFormats(updatedFormats);
  };
  console.log(formats);
  return (
    <Stack direction="row">
      <ToggleButtonGroup
        color="primary"
        value={formats}
        onChange={handleFormatChange}
      >
        <ToggleButton value="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};
export default MuiToggleButton;
