import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import FilterableProductTable from './containers/filterable-product-table';
import PRODUCTS from './data/products';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={store}>
    <FilterableProductTable products={PRODUCTS}/>
  </Provider>,
  document.getElementById('root'));