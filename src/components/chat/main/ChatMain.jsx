import { Box } from "@mui/material"
import IncommingMessage from "./IncommingMessage"
import SentMessage from "./SentMessage"

const ChatMain = ({chat,user}) => {
    return (
        <Box sx={{height:'100%'}} className="chat-main">
            {chat.messages.map((message,index)=> {
                if (message.sentBy !== user.id)
                    return <IncommingMessage key={index} message={message}/>
                else if (message.sentBy === user.id)
                    return <SentMessage key={index} message={message}/>
            })}
        </Box>
        
    )
}

export default ChatMain