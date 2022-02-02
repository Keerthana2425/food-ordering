import "./App.css";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Main from "./Components/Main";
import RightSidebar from "./Components/RightSidebar";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: " 1fr 3.2fr 1.3fr",
    gridAutoRows: "120vh",
    // height: "100vh",
  },
  gridItem1: {
    backgroundColor: "#00E06B",
  },
  menu: {
    backgroundColor: "white",
    width: "80%",
    float: "right",

    borderRadius: "20px 0px 0px 20px",
    padding: "3%",
    fontSize: "1rem",
    display: "flex",

    position: "relative",
    top: "10%",
  },
  menuBtn: {
    textDecoration: "none",
    color: "#00E06B",
    fontSize: "1.2rem",
    fontWeight: "400",
    width: "40%",
    border: "none",
    backgroundColor: "white",
  },
  cardContainer: {
    position: "relative",
    top: "10%",
  },
}));
function App() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(true);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="App">
      <div className={classes.gridContainer}>
        <div className={classes.gridItem1}>
          <div className={classes.menu}>
            <MenuBookIcon style={{ color: "#00E06B", paddingLeft: "10px" }} />
            <button onClick={handleClick} className={classes.menuBtn}>
              Menu
            </button>
          </div>
        </div>
        <div className="grid-item-2">
          <div className={classes.cardContainer}>{openMenu && <Main />}</div>
        </div>
        <div className="grid-item-3">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
