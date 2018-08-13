import {connect} from "react-redux";
import FilterableProductTable from "../components/filterable-product-table";
import inputChange from "../actions/inputChange";

const mapStateToProps = (filterText) => ({filterText});

const mapDispatchToProps = (dispatch) => ({
  handleFilterTextChange: (filterText) => dispatch(inputChange(filterText))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterableProductTable);