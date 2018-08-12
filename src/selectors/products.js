export default (products, filterText) =>
  products.filter((product) =>
    (!filterText || product.category.startsWith(filterText)));