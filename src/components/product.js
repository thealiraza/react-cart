import React from "react";
import { connect } from "react-redux";
import { addProductToCart } from "../actions/cart";

const Product = props => {
  const { item } = props;
  return (
    <div>
      <span>{item.name}</span>
      <span>${item.price}</span>
      <button onClick={() => props.addProduct(item)}>Add to cart</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProductToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
