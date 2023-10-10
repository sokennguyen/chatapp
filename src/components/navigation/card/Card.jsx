import ChatAvatar from "./ChatAvatar"
import ChatName from "./ChatName"
import LatestChat from "./LatestChat"
import Read from "./Read"

const Card = ({chat,isActive,isRead}) => {
    return (
        <div className="card">
            <ChatAvatar id={chat.avatar}/>
            <div className="card-main">
                <ChatName chatName={chat.name}/>            
                <div className="card-content">
                    <LatestChat latestChat={chat.messages[chat.messages.length-1].content}/>
                    <Read isRead={isRead}/>    
                </div>
            </div>
            
            {/* <Time chat={chat.message[message.length].time}/> */}
        </div>
    )
}

export default Card