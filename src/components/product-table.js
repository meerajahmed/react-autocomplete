import React from 'react';
import ProductRow from "./product-row";

const ProductTable = (props) => {
  const rows = props.products
    .filter((product) =>
      (!props.filterText || product.category.startsWith(props.filterText)) )
    .map((product) =>
      <ProductRow key={product.id} product={product}/>);

  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Category</th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;