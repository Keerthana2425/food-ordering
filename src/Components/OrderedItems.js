import { makeStyles } from "@material-ui/core";

import React, { useState } from "react";
import { itemsSelected } from "./SelectedItems";

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: "3%",
    display: "flex",
    padding: "3% 0% 3% 1%",
    alignItems: "center",
  },
  titles: {
    width: "100px",

    display: "flex",
    justifyContent: "flex-start",
    fontSize: "0.9rem",
    paddingLeft: "7%",
    fontWeight: "350",
  },
  itemNum: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1.8px solid #00E06B",
    borderRadius: "15px",

    width: "46%",
    height: "2.9vh",
  },
  dragDrop: {
    height: "5vh",
    padding: "1% 0% 0% 0%",
    margin: "2% 0% 2% 0%",
    border: "2px solid #00E06B",
    borderStyle: "dashed",
    color: "#00E06B",

    display: "flex",
    justifyContent: "center",

    fontSize: "1.3rem",
  },
  total: {
    height: "8vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.2rem",

    fontWeight: "bold",
  },
  btn: {
    width: "100%",
    height: "5.6vh",
    fontSize: "1.15rem",
    backgroundColor: "#00E06B",
    border: "none",
    marginTop: "3%",
    color: "white",
    borderRadius: "15px",
  },
}));

const OrderedItems = () => {
  const [checkOut, setCheckOut] = useState(false);
  const [itemNos, setItemNos] = useState(1);
  const classes = useStyles();

  const handleCheckout = () => {
    setCheckOut(!checkOut);
  };

  const lessItem = () => {
    setItemNos((prevstate) => prevstate - 1);
  };
  const addItem = () => {
    setItemNos((prevstate) => prevstate + 1);
  };

  return (
    <div>
      {checkOut && (
        <div>
          <div className={classes.orderedItems}>
            {itemsSelected.map((item) => (
              <div className={classes.itemsContainer}>
                <img
                  src={item.img}
                  alt={item.title}
                  height="40"
                  width="40"
                ></img>
                <div>
                  <div className={classes.titles}>
                    <div>{item.title}</div>
                  </div>

                  <div
                    style={{
                      fontSize: "0.85rem",
                      float: "left",
                      paddingLeft: "7%",
                      color: "gray",
                    }}
                  >
                    {item.quantity}
                  </div>
                </div>
                <div
                  style={{
                    width: "170px",
                    display: "flex",
                    marginLeft: "4px",
                    justifyContent: "space-between",
                  }}
                >
                  <div className={classes.itemNum}>
                    <button
                      style={{ border: "none", fontSize: "1rem" }}
                      onClick={lessItem}
                    >
                      -
                    </button>
                    <div style={{ padding: "0px 5px" }}>{itemNos}</div>
                    <button
                      style={{ border: "none", fontSize: "1rem" }}
                      onClick={addItem}
                    >
                      +
                    </button>
                  </div>
                  <div style={{ fontWeight: "700" }}>{item.price}</div>
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "grey",
                    padding: "0% 2% 0% 2%",
                  }}
                >
                  X
                </div>
              </div>
            ))}
          </div>
          <div className={classes.dragDrop}>Drag&Drop</div>
          <div className={classes.total}>
            <div>Total</div>
            <div> $15.49</div>
          </div>
        </div>
      )}
      <div>
        <button className={classes.btn} onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderedItems;
