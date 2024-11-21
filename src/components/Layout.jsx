import { ProgressScrollBar } from "./ProgressScrollBar";

export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Список ресторанов</h1>
      </header>
      <ProgressScrollBar />
      {children}
      <footer style={{ fontSize: "25px", marginTop: "50px" }}> Footer</footer>
    </>
  );
};
