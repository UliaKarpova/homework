import { useReducer } from "react";

const INITIAL_FORM_STATE = {
  name: "",
  review: "",
  rating: 1,
};

const ACTIONS = {
  change_name: "CHANGE_NAME",
  change_review: "CHANGE_REVIEW",
  change_rating: "CHANGE_RATING",
  reset_form: "RESET_FORM",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.change_name:
      return { ...state, name: payload };
    case ACTIONS.change_review:
      return { ...state, review: payload };
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

  const updateName = (payload) => {
    dispatch({ type: ACTIONS.change_name, payload });
  };
  const updateReview = (payload) => {
    dispatch({ type: ACTIONS.change_review, payload });
  };
  const updateRating = (payload) => {
    dispatch({ type: ACTIONS.change_rating, payload });
  };
  const resetForm = () => {
    dispatch({ type: ACTIONS.reset_form, payload: "" });
  };

  return { formState, updateName, updateRating, updateReview, resetForm };
};
