import { Avatar } from "@mui/material"

const ChatAvatar = ({id}) => {
    const imgLink = `/avatar/${id}.png`
    return <Avatar src={imgLink} alt="user avatar"/>
}

export default ChatAvatar