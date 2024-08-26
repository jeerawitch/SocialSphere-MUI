import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  Home,
  Edit,
  Person,
  PeopleAlt,
  Storefront,
  Settings,
  ModeNight,
} from "@mui/icons-material/";

export const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      flex={{ sm: 0.5, md: 1 }}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText
                primary="Homepage"
                sx={{ display: { sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Edit />
              </ListItemIcon>
              <ListItemText
                primary="Post"
                sx={{ display: { sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText
                primary="Friends"
                sx={{ display: { sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText
                primary="Marketplace"
                sx={{ display: { sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <PeopleAlt />
              </ListItemIcon>
              <ListItemText
                primary="Groups"
                sx={{ display: { sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                sx={{ display: { sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon sx={{ display: { sm: "none", md: "block" } }}>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
