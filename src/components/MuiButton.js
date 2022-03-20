import { Button, ButtonGroup, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" display="block">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <IconButton>
          <SendIcon color="primary" />
        </IconButton>
        <Button variant="contained" color="primary" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="horizontal"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
export default MuiButton;
