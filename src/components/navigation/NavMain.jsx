import NavHistory from "./NavHistory"

const NavMain = ({chats,activeChat}) => {
    return <div className="nav-main">
        <NavHistory chats={chats} activeChat={activeChat}/>
    </div>
}

export default NavMain