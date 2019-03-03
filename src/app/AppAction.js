export const ACTION_TYPE = {
  openBottomSheet: "OPEN_BOTTOMSHEET",
  closeBottomSheet: "CLOSE_BOTTOMSHEET",
  setLoading: "SET_LOADING",
  setTopSafeAreaView: "SET_TOP_SAFE_AREA",
  setBottomSafeAreaView: "SET_BOTTOM_SAFE_AREA"
};

export function openBottomSheet(
  renderBottomsheet,
  isBackClose,
  isTouchoutsideClose
) {
  return {
    type: ACTION_TYPE.openBottomSheet,
    payload: {
      renderBottomsheet,
      isBackClose,
      isTouchoutsideClose
    }
  };
}

export function closeBottomSheet() {
  return {
    type: ACTION_TYPE.closeBottomSheet,
    payload: () => {}
  };
}

export const setLoading = isLoading => ({
  type: ACTION_TYPE.setLoading,
  payload: isLoading
});

export const setTopSafeAreaView = color => ({
  type: ACTION_TYPE.setTopSafeAreaView,
  payload: color
});

export const setBottomSafeAreaView = color => ({
  type: ACTION_TYPE.setBottomSafeAreaView,
  payload: color
});
