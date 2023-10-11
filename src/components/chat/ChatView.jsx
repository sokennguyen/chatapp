import { List } from "@mui/material"
import ChatHeader from "./ChatHeader"
import ChatMain from "./ChatMain"

const ChatView = ({user,chat}) => {
    return (
        <List className="chat-view">
            <ChatHeader user={user} chat={chat}/>
            <ChatMain user={user} chat={chat}/>
        </List>
 
    )
}

export default ChatView