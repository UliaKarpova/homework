export const Counter = ({ decrease, increase, value }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button onClick={decrease}>-</button>
      <span style={{ margin: "0 12px" }}>{value}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};
