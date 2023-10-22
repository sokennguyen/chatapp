import { Avatar, ListItem } from "@mui/material"

const ChatHeader = ({chat}) =>{
    const imgLink = `/avatar/${chat.avatar}.png`
    return <ListItem className="header">
            <Avatar src={imgLink} alt="chat avatar"/>
        </ListItem>
}

export default ChatHeader