import { Layout } from "../Layout/Layout";
import { Restaurants } from "../Restaurants/Restaurants";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ThemeContextProvider } from "../ThemeContext/ThemeContextProvider";
import { AuthContextProvider } from "../AuthContext/AuthContextProvider";
import "./app.css";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <Restaurants />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
