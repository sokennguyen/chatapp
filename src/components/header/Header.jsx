import NavHeader from "./NavHeader"
import ChatHeader from "./ChatHeader"

const Header = ({user,chat}) => {
    return <div className="header">
        <NavHeader user={user}/>
        <ChatHeader user={user} chat={chat}/>
    </div>
}

export default Header