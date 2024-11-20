export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Список ресторанов</h1>
      </header>
      {children}
      <footer style={{ fontSize: "25px", marginTop: "50px" }}> Footer</footer>
    </>
  );
};
