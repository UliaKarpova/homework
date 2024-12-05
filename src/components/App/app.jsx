import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "../../constants/router";
import { store } from "../../redux/store";
import { ThemeContextProvider } from "../ThemeContext/ThemeContextProvider";
import { AuthContextProvider } from "../AuthContext/AuthContextProvider";
import { Layout } from "../Layout/Layout";
import "./app.css";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
