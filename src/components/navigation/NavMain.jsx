import NavHistory from "./NavHistory"

const NavMain = ({chats,activeChat}) => {
    return <>
        <NavHistory chats={chats} activeChat={activeChat}/>
    </>
}

export default NavMain