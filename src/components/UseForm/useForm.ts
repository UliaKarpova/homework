import { useReducer } from "react";

const INITIAL_FORM_STATE = {
  text: "",
  rating: 5,
};

const ACTIONS = {
  change_text: "CHANGE_TEXT",
  change_rating: "CHANGE_RATING",
  reset_form: "RESET_FORM",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.change_text:
      return { ...state, text: payload };
    case ACTIONS.change_rating:
      return { ...state, rating: payload };
    case ACTIONS.reset_form:
      return { ...INITIAL_FORM_STATE };
    default:
      return state;
  }
};

export const useForm = () => {
  const [formState, dispatch] = useReducer(reducer, INITIAL_FORM_STATE);

  const updateText = (payload) => {
    dispatch({ type: ACTIONS.change_text, payload });
  };
  const updateRating = (payload) => {
    dispatch({ type: ACTIONS.change_rating, payload });
  };
  const resetForm = () => {
    dispatch({ type: ACTIONS.reset_form, payload: "" });
  };

  return { formState, updateRating, updateText, resetForm };
};
