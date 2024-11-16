import { MenuItem } from "./MenuItem";
export const Menu = ({ menu }) => {
    return (
        <>
            <h3>Меню</h3>
            <ul>
                {menu.map((menuItem, index) => {
                    return <MenuItem menuItem={menuItem} key={index} />
                })}
            </ul>
        </>
    )
} 