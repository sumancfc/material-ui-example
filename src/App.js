import "./App.css";
import { CssBaseline, makeStyles } from "@material-ui/core";
import SidebarMenu from "./components/SidebarMenu";
import Header from "./components/Header";

const useStyles = makeStyles({
  appMain: {
    width: "100%",
    paddingLeft: "300px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <SidebarMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
