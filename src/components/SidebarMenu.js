import React from "react";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  sidebarMenu: {
    position: "absolute",
    width: "300px",
    height: "100%",
    left: "0px",
    display: "flex",
    flexDirection: "column-reverse",
    backgroundColor: "#f5f5f5",
  },
});

const SidebarMenu = () => {
  const classes = styles();
  return <div className={classes.sidebarMenu}>Sidebar Menu</div>;
};

export default SidebarMenu;
