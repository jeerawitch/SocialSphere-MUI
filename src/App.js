import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { Feed, Navbar, Rightbar, Sidebar } from "./components";
import { Add } from "./components/Feature/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack
          direction="row"
          spacing={{ xs: 0, sm: 0, md: 2 }}
          justifyContent="space-between"
        >
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
