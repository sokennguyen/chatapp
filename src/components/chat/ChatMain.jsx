import IncommingMessage from "./IncommingMessage"
import SentMessage from "./SentMessage"

const ChatMain = ({chat,user}) => {
    return (
        <div className="chat-main">
            {chat.messages.map((message,index)=> {
                if (message.sentBy !== user.id)
                    return <IncommingMessage key={index} message={message}/>
                else if (message.sentBy === user.id)
                    return <SentMessage key={index} message={message}/>
            })}
        </div>
        
    )
}

export default ChatMain