import { List, ListItem } from "@mui/material"
import NavHeader from "./NavHeader"
import NavHistory from "./NavHistory"

const Navigation = ({user,chats,activeChat}) => {
    return (
        <List className="nav-view">
            <NavHeader user={user}/>
            <ListItem>
                <NavHistory chats={chats} activeChat={activeChat}/>
            </ListItem>
        </List>
    )
}

export default Navigation