import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab } from "../Tab/Tab";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/slices/restaurants-slice";
import { Outlet } from 'react-router-dom';
import styles from "./restaurantItem.module.css";

export const RestaurantTabContainer = ({ restaurantId }) => {
  const [activeTab, setActiveTab] = useState('menu')
  const { menu, reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const data = activeTab === 'menu' ? menu : reviews
  return (
    <>
      <NavLink to={`/restaurants/${restaurantId}/menu`} onClick={() => setActiveTab('menu')} className={styles.link}>
        <Tab text={"МЕНЮ"} extraClass={`${activeTab === 'menu' ? styles.active : ''}`} />
      </NavLink>
      <NavLink
        to={`/restaurants/${restaurantId}/reviews`}
        onClick={() => setActiveTab('reviews')}
        className={styles.link}
      >
        <Tab text={"ОТЗЫВЫ"} extraClass={`${activeTab === 'reviews' ? styles.active : ''}`} />
      </NavLink>
      <Outlet context={[data]} />
    </>
  );
};
