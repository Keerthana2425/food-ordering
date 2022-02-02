import { CardContent, Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Card, Chip } from "@material-ui/core";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { items } from "./data";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    padding: "0px 25px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56%",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
  },
  bottomGridItems: {
    display: "flex",
    justifyContent: "flex-start",
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <Container className={classes.cardContainer}>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent style={item.style} className={classes.cardContent}>
                <Grid container spacing={0} className={classes.gridContainer}>
                  <Grid item conatiner className={classes.top}>
                    <Grid item>
                      <Chip
                        label={item.rating}
                        size="small"
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          fontSize: "0.7rem",
                        }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item>
                      <FavoriteBorderIcon style={{ color: "#F50057" }} />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <img
                      //   src="https://source.unsplash.com/random"
                      src={item.img}
                      alt={item.title}
                      height="70"
                      width="75"
                    ></img>
                  </Grid>
                  <Grid item container className={classes.bottom}>
                    <Grid item className={classes.bottomGridItems}>
                      <div style={{ marginRight: "10px" }}>{item.title}</div>
                      <div>
                        <Chip
                          label={item.quantity}
                          size="small"
                          style={{
                            backgroundColor: "white",
                            color: "grey",
                            fontSize: "0.6rem",
                          }}
                          variant="outlined"
                        />
                      </div>
                    </Grid>
                    <Grid item className={classes.bottomGridItems}>
                      <div style={{ fontWeight: "680" }}>{item.price}</div>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Main;
