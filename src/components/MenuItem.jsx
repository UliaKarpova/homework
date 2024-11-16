import { Count } from "./Count"
export const MenuItem = ({ menuItem }) => {
    return (
        <li style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ marginBottom: 0 }}>{menuItem.name}</h4>
            <p>{menuItem.ingredients.join(", ")}</p>
            <span>
                <b>Price: {menuItem.price}</b>
            </span>
            <Count />
        </li>
    )
} 