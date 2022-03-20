import { Paper, Box, Button } from "@mui/material";

const MuiPaper = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7]
        }
      }}
    >
      <Button variant="contained" color="secondary">
        Click
      </Button>
    </Box>
  );
};
export default MuiPaper;
