const markerReducer = (state, action) => {
  const { type, data, index } = action;
  switch (type) {
    case "add":
      return [...state, data];
    case "remove":
      let resRM = [...state];
      resRM.splice(index, 1);
      return resRM;
    case "editPhoto":
      let resED = [...state];
      resED[index][2] = data.urlPhoto;
      return resED;
    default:
      return [...state];
  }
};

export default markerReducer;
