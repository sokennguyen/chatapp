const Card = ({chat,isActive,isRead}) => {
    return (
        <div>
            <ChatAvatar avatar={chat.avatar}/>
            <ChatName chat={chat}/>
            <LatestChat chat={chat.message[message.length].content}/>
            <Read isRead={isRead}/>
            <Time chat={chat.message[message.length].time}/>
        </div>
    ) 
}

export default Card