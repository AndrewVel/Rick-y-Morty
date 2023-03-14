import { GET_CHARACTERS, ADD_CHARACTER, DELETE_CHARACTER } from "./actions";

const initialState = {
  characters: [],
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      const characterExists = state.characters.find(
        (character) => character.id === action.payload.id
      );
      if (!characterExists) {
        console.log("get");
        return {
          ...state,
          characters: [action.payload, ...state.characters],
        };
      }
      return state;

    case DELETE_CHARACTER:
      console.log("delete");
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };

    case ADD_CHARACTER:
      console.log("add");
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
