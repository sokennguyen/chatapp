import NavHeader from "./NavHeader"
import ChatHeader from "./ChatHeader"

const Header = (props) => {
    return <div className="header">
        <NavHeader userId={props.userId}/>
        <ChatHeader chatId={props.chatId}/>
    </div>
}

export default Header