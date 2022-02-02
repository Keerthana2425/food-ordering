import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Card } from "@material-ui/core";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import OrderedItems from "./OrderedItems";

const useStyles = makeStyles((theme) => ({
  orders: {
    paddingLeft: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
  },
  editBtn: {
    padding: "10px 20px 0px 20px",
    fontSize: "0.99rem",
    color: "#00E06B",

    backgroundColor: "white",
    textAlign: "center",
    border: "none",
  },
  showTime: {
    paddingLeft: theme.spacing(1),
    float: "left",
    fontSize: "1.2rem",
  },
  accessTime: {
    display: "flex",
    paddingLeft: theme.spacing(2),
  },
  ordersTitle: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(7),
  },
}));

const RightSidebar = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("My Orders");

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  const today = new Date();
  const getTime = formatAMPM(today);
  return (
    <>
      <Card className={classes.ordersTitle}>
        <div className={classes.orders}>
          <h1>{title}</h1>
          <button className={classes.editBtn}>Edit</button>
        </div>
        <div className={classes.accessTime}>
          <AccessTimeFilledIcon
            style={{ color: "#00E06B", paddingTop: "1%" }}
          />
          <div className={classes.showTime}>{getTime}</div>
        </div>
      </Card>
      <OrderedItems />
    </>
  );
};

export default RightSidebar;
