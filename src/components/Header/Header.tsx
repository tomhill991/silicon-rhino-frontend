

const Header = (props:any) => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <img src="./logo.png" alt="logo"/>
                </li>
                <li onClick={() => props.handleCreateEventClicked()}>
                    Create Event
                </li>
            </ul>
        </nav>
    )
}

export default Header
