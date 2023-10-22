import { Box, Grid, List } from "@mui/material"
import ChatHeader from "./ChatHeader"
import ChatMain from "./main/ChatMain"
import InputField from "./InputField"

const ChatView = ({user,chat}) => {
    return (
        <Box className="chat-view">
            <ChatHeader user={user} chat={chat}/>
            <ChatMain user={user} chat={chat}/>
            <InputField/>
        </Box>
 
    )
}

export default ChatView