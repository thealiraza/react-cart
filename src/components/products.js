import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { categoriesFetchData } from "../actions/categories";
import Category from "./category";
import Product from "./product";

const Products = props => {
  const [active, setActive] = useState(0);

  const handleSelection = e => {
    e.preventDefault();
    const index = parseInt(e.target.getAttribute("index"), 10);
    return setActive(index);
  };

  const isActive = index => {
    return index === active;
  };

  const renderCategory = (item, index) => (
    <Category
      key={index}
      active={isActive(index)}
      item={item}
      index={index}
      handleSelection={handleSelection}
    />
  );
  const renderProduct = (item, index) => <Product key={index} item={item} />;
  const url =
    "https://my-json-server.typicode.com/fmartinsba/shopping-cart/categories";

  useEffect(() => {
    props.fetchData(url);
    return () => {};
  }, []);

  if (props.isLoading) return <span>loading...</span>;
  return (
    <div>
      <div className="categories">{props.categories.map(renderCategory)}</div>
      <div className="products">
        {props.categories[active]
          ? props.categories[active].products.map(renderProduct)
          : false}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
    isLoading: state.categoriesIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(categoriesFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
