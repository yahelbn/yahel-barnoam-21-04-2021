export default function ToolbarLocationReducer(
  state = localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
  action
) {
  switch (action.type) {
    case "ADD_FAV":
      var favorites = contains(state, "name", action.favorite.name)
        ? state
        : state.concat([action.favorite]);
      insertDataToStorage(favorites);
      return favorites;

    case "DELETE_FAV":
      favorites = state.filter((favorite) => favorite.id !== action.id);
      insertDataToStorage(favorites);
      return favorites;

    default:
      favorites = state;
      return favorites;
  }
}

function insertDataToStorage(data) {
  localStorage.setItem("favorites", JSON.stringify(data));
}

function contains(arr, key, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) return true;
  }
  return false;
}
