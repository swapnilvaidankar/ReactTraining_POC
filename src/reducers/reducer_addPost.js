export default function(state = null, action) {
  switch (action.type) {
    case "ADD_POST":
      console.log("Reducer ADD_POST");
      return action.payload;
  }
  return state;
}
