"use client"
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ThemeContextProvider } from "../ThemeContext/ThemeContextProvider";
import { AuthContextProvider } from "../AuthContext/AuthContextProvider";
import { Layout } from "../Layout/Layout";
import "./app.css";

const App = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            {children}
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

export default App;
