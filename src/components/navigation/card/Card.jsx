import ChatAvatar from "./ChatAvatar"
import ChatName from "./ChatName"
import LatestChat from "./LatestChat"
import Read from "./Read"

const Card = ({chat,isActive,isRead}) => {
    return (
        <div>
            <ChatAvatar id={chat.avatar}/>
            <ChatName chatName={chat.name}/>
            <LatestChat latestChat={chat.messages[chat.messages.length-1].content}/>
            <Read isRead={isRead}/>
            {/* <Time chat={chat.message[message.length].time}/> */}
        </div>
    )
}

export default Card