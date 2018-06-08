export default function(state = null, action) {
  switch (action.type) {
    case "SELECT_POST":
      console.log("select action.payload");
      console.log(action.payload);
      return action.payload;
    // default:
    //   return state;
  }
  return state;
}
