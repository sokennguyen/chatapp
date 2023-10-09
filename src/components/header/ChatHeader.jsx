import Avatar from "../misc/Avatar"

const ChatHeader = ({chatId}) =>{
    return <div className="chat-header">
        <Avatar userId={chatId}/>
    </div>
}

export default ChatHeader