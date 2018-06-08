export default function(state = null, action) {
  switch (action.type) {
    case "BACK_TO_LIST":
      console.log("backlist action.payload");
      console.log(action.payload);
      return action.payload;
    // default:
    //   return state;
  }
  return state;
}
