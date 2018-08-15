import React, {Component} from 'react';
import SearchBar from "./search-bar";
import ProductTable from "./product-table";

export default class FilterableProductTable extends Component {

  state = {
    filterText: ''
  };

  handleFilterTextChange = (filterText) => {
    this.setState(() => ({filterText}));
  };

  render() {
    return (
      <div className="container mt-5">
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}/>
        <ProductTable
          filterText={this.state.filterText}
          products={this.props.products}/>
      </div>
    );
  }
}
