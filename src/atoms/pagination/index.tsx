import React from "react";
import { Box, Pagination } from "@mui/material";

type Props = {
  length: number;
  page: number;
  onChange: (e:any, p:any) => void;
}
const CustomPagination = ({
  length,
  page,
  onChange
}: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="1rem"
    >
      <Pagination
        count={Math.ceil(length / 8)}
        size="medium"
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={onChange}
      />
    </Box>
  );
};

export default CustomPagination;
