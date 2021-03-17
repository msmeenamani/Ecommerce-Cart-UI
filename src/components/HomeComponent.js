import React, { Component } from "react";
import { get } from "../services/apiCalls";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
  }

  async componentDidMount() {
    var path = "ecom/item";
    var getData = await get(path);
    this.setState({ data: getData });
    console.log("inside the getData", this.state.data);
  }

  render() {
    const { data } = this.state;
    const { classes } = this.props;

    return (
      <header>
        <div>
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            E-Commerce
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.data &&
                  data.data.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">
                        {" "}
                        <Button variant="contained" color="primary">
                          Add to Cart
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>


   {/* Footer */}
          <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
        </div>
      </header>
    );
  }
}

export default withStyles(useStyles)(HomeComponent);
