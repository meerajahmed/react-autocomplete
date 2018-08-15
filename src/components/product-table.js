import React from 'react';
import ProductRow from "./product-row";
import selectProducts from '../selectors/products';

const ProductTable = (props) => {
  const rowMap = selectProducts(props.products, props.filterText)
    .map((product) =>
      <ProductRow key={product.id} product={product}/>);

  return (
    <table className="table table-borderless table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Category</th>
      </tr>
      </thead>
      <tbody>{rowMap}</tbody>
    </table>
  );
};

export default ProductTable;