import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        px: 2,
        py: 2,
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
        position: "sticky",
      }}
    >
      <Link to={"/"}>
        <Typography fontSize={20} fontWeight={600}>
          Todo App
        </Typography>
      </Link>
    </Stack>
  );
};

export default Header;
