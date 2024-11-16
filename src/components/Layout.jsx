export const Layout = ({ children }) => {
    return (
        <>
            <header><h1>Список ресторанов</h1></header>
            {children}
            <footer style={{ position: 'fixed', bottom: '25px', fontSize: '25px' }} > Footer</footer>
        </>

    )
}