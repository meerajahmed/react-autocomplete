import React from 'react';

const ProductRow = (props) => {
  return (
    <tr>
       <td>{props.product.name}</td>
       <td>{props.product.category}</td>
    </tr>
  );
};

export default ProductRow;