import React from 'react';
import SearchBar from "./search-bar";
import ProductTable from "./product-table";

const FilterableProductTable = (props) => (
  <div className="container mt-5">
    <SearchBar
      filterText={props.filterText}
      onFilterTextChange={props.handleFilterTextChange}/>
    <ProductTable
      filterText={props.filterText}
      products={props.products}/>
  </div>
);

export default FilterableProductTable;