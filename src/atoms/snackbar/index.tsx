import { Alert, AlertColor, Snackbar } from "@mui/material";

type SnackbarProps = {
  open: boolean;
  onClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
  severity: AlertColor;
  message: string;
};
const SubmitSnackbar = ({ open, onClose, severity, message }: SnackbarProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert severity={severity} onClose={onClose} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SubmitSnackbar;
