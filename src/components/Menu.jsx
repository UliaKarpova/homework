import { MenuItem } from "./MenuItem";
export const Menu = ({ menu }) => {
    return (
        <>
            <h3>Меню</h3>
            <ul>
                {menu.map((menuItem, index) => {
                    return (
                      <li
                        key={index}
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <MenuItem menuItem={menuItem} />
                      </li>
                    );
                })}
            </ul>
        </>
    )
} 