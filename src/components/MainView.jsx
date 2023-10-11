import ChatMain from "./chat/ChatMain"
import NavMain from "./navigation/NavMain"

const MainView = ({chats,activeChat,user}) => {
    const currentChat = chats.find(chat=>activeChat===chat.id)
    return (
        <div className="main-view">
            <ChatMain chat={currentChat} user={user}/>
        </div>
    )
}

export default MainView