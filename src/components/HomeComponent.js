import React, { Component } from "react";
import { get, put } from "../services/apiCalls";
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

import IconButton from "@material-ui/core/IconButton";
import Header from '../layouts/HeaderComp'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

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
      cartData: []
    };
  }

  async componentDidMount() {
    this.getAllItems()
    console.log("inside the getData", this.state.data);
  }

  getAllItems=async ()=>{
    var path = "ecom/item";
    var getAllCartPath = "ecom/cart";
    var getData = await get(path);
    var getAllCart = await get(getAllCartPath);
    let cartItemsRes = getAllCart?.data[0]?.items;

    let cartItem = []
    // console.log("getAllCart ---->", cartItemsRes)
    if(cartItemsRes?.length > 0){
      cartItemsRes.map(e => {
        cartItem.push({"itemId": e.itemId, "quantity": e.quantity})
      })
    }
    this.setState({ data: getData, cartData: cartItem });
  }

  openCart = () => {
    this.props.history.push('/cart')
  }

  addToCart =async (item, key, identifier) => {
    console.log("i am here -->", this.state.cartData)
    console.log("11111 -->", item + " "+ key)

    let { cartData } = this.state
    let data = [...cartData]
    if(identifier == "inc"){

    }else if(identifier == "dec"){

    }else{

    }
    // var updateCartPath = "ecom/cart"
    // var updateCartData = await put(updateCartPath, null, {"items": data});
  }

  tableBody=(data)=> {
    return (
      <TableBody>
        {data &&
          data.data && data.data.map((row, key) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                {row.quantity > 0 ? <div>
                  <IconButton onClick={()=>this.addToCart(row, key, "dec")} edge="start" color="inherit" aria-label="menu">
                    <RemoveIcon />
                  </IconButton>
                    {row.quantity}
                  <IconButton onClick={()=>this.addToCart(row, key, "inc")} edge="end" color="inherit" aria-label="menu">
                    <AddIcon />
                  </IconButton>
                </div> : 0}
                </TableCell>    
              <TableCell align="right">
                {" "}
                {row.quantity > 0 ? "Added to cart":
                 <Button onClick={()=>this.addToCart(row, key, "init")} variant="contained" color="primary">
                  Add to Cart
                </Button>}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    )
  }

  render() {
    const { data } = this.state;
    const { classes } = this.props;

    return (
      <header>
        <div>
        <div className={classes.root}>
      <Header openCart={()=>this.openCart()} {...this.props}/>
      </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              {this.tableBody(data)}
            </Table>
          </TableContainer>
        </div>
      </header>
    );
  }
}

export default withStyles(useStyles)(HomeComponent);
