import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles,
} from "@material-ui/core";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ChatIcon from "@material-ui/icons/Chat";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffffff",
  },
  search: {
    "&:hover": {
      backgroundColor: "#eaeaea",
      width: "100%",
      padding: "0 10px",
      borderRadius: "6px",
    },
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item sm={10}>
            <InputBase
              placeholder='Search here'
              startAdornment={
                <SearchIcon fontSize='small' style={{ marginRight: "10px" }} />
              }
              className={classes.search}
            />
          </Grid>

          <Grid item sm={2} justify='flex-end'>
            <IconButton>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsActiveIcon fontSize='small' />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color='secondary'>
                <ChatIcon fontSize='small' />
              </Badge>
            </IconButton>

            <IconButton>
              <PowerSettingsNewIcon fontSize='small' />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
