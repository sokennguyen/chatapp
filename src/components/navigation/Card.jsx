const Card = ({chat,isActive,isRead}) => {
    return (
        <div>
            <ChatAvatar avatar={chat.avatar}/>
            <ChatName chat={chat}/>
            <LatestChat chat={chat}/>
            <Read isRead={isRead}/>
            <Time chat={chat}/>
        </div>
    ) 
}

export default Card