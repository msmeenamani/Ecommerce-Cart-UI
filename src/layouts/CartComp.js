import React, { Component } from "react";
import { get } from "../services/apiCalls";
import Header from '../layouts/HeaderComp'
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


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

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
  }

  async componentDidMount() {
    var path = "ecom/checkout";
    var getData = await get(path);
    this.setState({ data: getData });
  }

  render() {
    const { data } = this.state;
    const { classes } = this.props;

    return (
      <header>
        <div>
        <Header titleName={"Cart"} {...this.props}/>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total</TableCell>
                  <TableCell align="right">Subtotal</TableCell>
                  <TableCell align="right"></TableCell>


                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.data &&
                  data.data.items.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">{row.total}</TableCell>
                      <TableCell align="right">{row.subTotal}</TableCell>
                      <TableCell align="right"></TableCell>

                      {/* <TableCell align="right">
                        <Button variant="contained" color="primary">
                          Add to Cart
                        </Button>
                      </TableCell> */}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <Paper elevation={0} />
            <div style={{float:'right', backgroundColor:'#aeafbd', width: '10em'}}>
            <div>Subtotal: $ {data && data.data && data.data.subTotal}</div><br />
            <div><span style={{color:'red'}}>Discount:</span> ${data && data.data && data.data.discount}%</div><br />
            <div>Total: $ {data && data.data && data.data.total}</div>
            </div>
      <Paper elevation={3} />
          

          </TableContainer>


        </div>
      </header>
    );
  }
}

export default withStyles(useStyles)(Cart);
