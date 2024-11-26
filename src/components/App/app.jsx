import { Layout } from "../Layout/Layout";
import { Restaurants } from "../Restaurants/Restaurants";
import { ThemeContextProvider } from "../ThemeContext/ThemeContextProvider";
import { AuthContextProvider } from "../AuthContext/AuthContextProvider";
import "./app.css";

export const App = () => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Layout>
          <Restaurants />
        </Layout>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};
