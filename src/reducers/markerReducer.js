const markerReducer = (state, action) => {
  const { type, data, index } = action;
  switch (type) {
    case "add":
      return [...state, data];
    case "remove":
      let res = [...state];
      res.splice(index, 1);
      return res;
    default:
      return [...state];
  }
};

export default markerReducer;
