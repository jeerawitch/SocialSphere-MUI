import { Box } from "@mui/material";
import Post from "./Feature/Post";
import React from "react";

export const Feed = () => {
  return (
    <Box flex={{ sm: 6, md: 4 }} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
