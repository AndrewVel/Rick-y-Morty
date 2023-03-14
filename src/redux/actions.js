import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const ADD_CHARACTER = "ADD_CHARACTER";

export const getCharacters = (id) => {
  return async function (dispatch) {
    if (!id) {
      return alert(
        "Debes ingresar un numero de tarjeta para descubrir tu personaje"
      );
    } else {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        return dispatch({
          type: GET_CHARACTERS,
          payload: response.data,
        });
      } catch (error) {
        alert(error);
      }
    }
  };
};

export const deleteCharacter = (id) => {
  return {
    type: DELETE_CHARACTER,
    payload: id,
  };
};

export const addCharacter = (character) => {
  return {
    type: ADD_CHARACTER,
    payload: character,
  };
};
