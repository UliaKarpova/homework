export const RestaurantTab = ({ isCurrentTab, title, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ width: '250px', height: '70px', color: `${isCurrentTab ? 'red' : 'black'}` }}>
            <h2>{title}</h2>
        </button>
    )
}