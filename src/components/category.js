import React from "react";

const Category = props => {
  const { active, item, index, handleSelection } = props;
  return (
    <div
      className={active ? "active" : ""}
      key={index}
      index={index}
      onClick={handleSelection}
    >
      {item.name} ({item.products.length})
    </div>
  );
};

export default Category;
