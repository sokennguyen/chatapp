import { List, ListItem, Box } from "@mui/material"
import NavHeader from "./NavHeader"
import NavHistory from "./NavHistory"

const Navigation = ({user,chats,activeChat,setActiveChat}) => {
    return (
        <div className="nav-view">
            <NavHeader user={user}/>
            <NavHistory chats={chats} activeChat={activeChat} setActiveChat={setActiveChat}/>
        </div>
    )
}

export default Navigation