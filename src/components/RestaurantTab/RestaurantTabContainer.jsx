import { NavLink } from "react-router-dom";
import { Tab } from "../Tab/Tab";

export const RestaurantTabContainer = ({ name, id }) => {

  return (
    <NavLink to={`/restaurants/${id}/menu`}>
      <Tab text={name} />
    </NavLink>
  );
};
