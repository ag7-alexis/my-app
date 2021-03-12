const markerReducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case "add":
      return [...state, data];
    // case "remove":
    //     state
    //   return {};
    default:
      return [...state];
  }
};

export default markerReducer;
