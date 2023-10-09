import Card from "./Card"

const NavHistory = ({chats,activeChat}) => {
    return (
        chats.forEach(chat => {
            if (chat.id !== activeChat && chat.read===false)
                <Card isActive={false} isRead={false} chat={chat}/>
            else if (chat.id !== activeChat && chat.read===true)
                <Card isActive={false} isRead={true} chat={chat}/>
            else if (chat.id === activeChat)
                <Card isActive={true} isRead={true} chat={chat}/>

        })
    )
}

export default NavHistory