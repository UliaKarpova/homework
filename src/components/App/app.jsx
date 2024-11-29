import { Layout } from "../Layout/Layout";
import { Restaurants } from "../Restaurants/Restaurants";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import "./app.css";

export const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Restaurants />
      </Layout>
    </Provider>
  );
};
