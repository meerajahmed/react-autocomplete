import {connect} from "react-redux";
import setFilterText from "../actions/setFilterText";
import FilterableProductTable from "../components/filterable-product-table";

const mapStateToProps = (filterText) => ({filterText});

const mapDispatchToProps = (dispatch) => ({
  handleFilterTextChange: (filterText) => dispatch(setFilterText(filterText))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterableProductTable)