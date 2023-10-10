import Card from "./card/Card"

const NavHistory = ({chats,activeChat}) => {
    return chats.map(chat => {
        const isRead = chat.messages[chat.messages.length-1].readBy.length===chat.members.length-1
            ? true : false
        if (chat.id !== activeChat && isRead===false)
            return <Card key={chat.id} isActive={false} isRead={false} chat={chat}/>
        else if (chat.id !== activeChat && isRead===true)
            return <Card key={chat.id} isActive={false} isRead={true} chat={chat}/>
        else if (chat.id === activeChat)
            return <Card key={chat.id} isActive={true} isRead={true} chat={chat}/>
    })
}

export default NavHistory