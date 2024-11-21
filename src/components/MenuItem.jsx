import { DishCounter } from "./DishCounter";
export const MenuItem = ({ menuItem }) => {
  return (
    <>
      <h4 style={{ marginBottom: 0 }}>{menuItem.name}</h4>
      <p>{menuItem.ingredients.join(", ")}</p>
      <span>
        <b>Price: {menuItem.price}</b>
      </span>
      <DishCounter />
    </>
  );
};
