import { selectUserById } from "../../redux/entities/restaurants/user/user-slice";
import { useSelector } from "react-redux";
import { User } from "./User";

export const UserContainer = ({ userId }) => {

    const user = useSelector((state) => selectUserById(state, userId));

    if (!user) {
        return null;
    }
    return (
        <User name={user.name} />
    )
}