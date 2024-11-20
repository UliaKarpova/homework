import { useReducer } from "react";

const initialFormState = {
  name: "",
  review: "",
  rating: 1,
};

const actions = {
  change_name: "CHANGE_NAME",
  change_review: "CHANGE_REVIEW",
  change_rating: "CHANGE_RATING",
  reset_form: "RESET_FORM",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.change_name:
      return { ...state, name: payload };
    case actions.change_review:
      return { ...state, review: payload };
    case actions.change_rating:
      return { ...state, rating: payload };
    case actions.reset_form:
      return { ...initialFormState };
    default:
      return state;
  }
};

export const useForm = () => {
  const [formState, dispatch] = useReducer(reducer, initialFormState);

  const updateName = (payload) => {
    dispatch({ type: actions.change_name, payload });
  };
  const updateReview = (payload) => {
    dispatch({ type: actions.change_review, payload });
  };
  const updateRating = (payload) => {
    dispatch({ type: actions.change_rating, payload });
  };
  const resetForm = () => {
    dispatch({ type: actions.reset_form, payload: "" });
  };

  return { formState, updateName, updateRating, updateReview, resetForm };
};
