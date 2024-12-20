import Link from "next/link";
import { Tab } from "../Tab/Tab";

export const RestaurantTabContainer = ({ name, id }) => {

  return (
    <Link href={`/restaurants/${id}/menu`}>
      <Tab text={name} />
    </Link>
  );
};
