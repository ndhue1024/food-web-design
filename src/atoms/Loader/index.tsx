import { Box, CircularProgress } from "@mui/material";
const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default Loader;
