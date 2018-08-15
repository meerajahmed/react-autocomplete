import React from 'react';
import ReactDOM from 'react-dom';

import FilterableProductTable from './components/filterable-product-table';
import PRODUCTS from './data/products';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<FilterableProductTable products={PRODUCTS} />, document.getElementById('root'));