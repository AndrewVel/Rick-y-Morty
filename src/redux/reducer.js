import { ADD_CHARACTER, DELETE_CHARACTER } from "./actions";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };

    case ADD_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
