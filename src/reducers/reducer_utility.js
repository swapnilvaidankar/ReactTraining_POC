export default function(state = false, action) {
  switch (action.type) {
    case "SHOW_ADD":
      console.log("Show action.payload");
      console.log(action.payload);
      return action.payload;
    // default:
    //   return state;
  }
  return state;
}
