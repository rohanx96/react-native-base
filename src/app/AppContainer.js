import { connect } from "react-redux";
import AppComponent from "./AppComponent";
import { closeBottomSheet } from "./AppAction";

const mapStateToProps = state => ({
  isBSOpen: state.app.isBSOpen,
  isBSBackClose: state.app.isBSBackClose,
  isBSTouchoutsideClose: state.app.isBSTouchoutsideClose,
  renderBottomsheet: state.app.renderBottomsheet,
  loading: state.app.isLoading,
  topSafeAreaView: state.app.topSafeAreaView,
  bottomSafeAreaView: state.app.bottomSafeAreaView,
  isRehydrated: state.app.isRehydrated
});

const mapDispatchToProps = dispatch => ({
  closeBottomSheet: () => dispatch(closeBottomSheet())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
