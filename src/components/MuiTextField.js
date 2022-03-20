import { InputAdornment, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import BatteryCharging80Icon from "@mui/icons-material/BatteryCharging80";
const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2} justifyContent="center">
        <TextField
          id="fname"
          label="First Name"
          variant="outlined"
          size="small"
        />
        <TextField
          id="lname"
          label="Last Name"
          variant="outlined"
          size="small"
        />
        <TextField id="email" label="Email" variant="outlined" size="small" />
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center">
        <TextField
          id="fname"
          label="Address"
          variant="standard"
          size="medium"
        />
        <TextField
          id="fname"
          label="Address one"
          variant="standard"
          size="medium"
        />
        <TextField
          id="fname"
          label="Address two"
          variant="standard"
          size="medium"
        />
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center">
        <TextField
          label="User name"
          required
          helperText="Enter your user name"
        />
        <TextField
          label="Password"
          type="password"
          required
          helperText="Do not share your password!"
        />
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="center">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>
          }}
        />
        <TextField
          label="Weight"
          color="error"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <BatteryCharging80Icon />
              </InputAdornment>
            )
          }}
        />
      </Stack>
    </Stack>
  );
};
export default MuiTextField;
