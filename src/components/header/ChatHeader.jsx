import Avatar from "../misc/Avatar"
import avatarRouter from "../../services/avatar"

const ChatHeader = ({user,chat}) =>{
    const id = avatarRouter(user,chat)
    return <div className="chat-header">
        <Avatar id={id}/>
    </div>
}

export default ChatHeader