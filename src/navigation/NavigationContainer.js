import { connect } from "react-redux";
import NavigationComponent from "./NavigationComponent";

const mapStateToProps = state => ({
  isBSOpen: state.app.isBSOpen
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationComponent);
