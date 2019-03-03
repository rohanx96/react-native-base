import { connect } from "react-redux";
import {
  setLoading,
  setTopSafeAreaView,
  setBottomSafeAreaView
} from "../app/AppAction";

export const withStore = (
  component,
  mapState = () => ({}),
  mapDispatch = () => ({})
) => {
  function mapStateToProps(state) {
    return {
      loading: state.app.loading,
      ...mapState(state)
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      setLoading: isLoading => dispatch(setLoading(isLoading)),
      ...mapDispatch(dispatch)
    };
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
};

export const withSafeAreaActions = (
  component,
  mapState = () => ({}),
  mapDispatch = () => ({})
) => {
  function mapStateToProps(state) {
    return {
      loading: state.app.loading,
      ...mapState(state)
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      setLoading: isLoading => dispatch(setLoading(isLoading)),
      setTopSafeAreaView: color => dispatch(setTopSafeAreaView(color)),
      setBottomSafeAreaView: color => dispatch(setBottomSafeAreaView(color)),
      ...mapDispatch(dispatch)
    };
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
};
