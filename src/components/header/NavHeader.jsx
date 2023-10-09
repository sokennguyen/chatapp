import Avatar from "../misc/Avatar"
const NavHeader = ({user,chat}) =>{
    return <div className="nav-header">
        <Avatar id={user.id}/>
    </div>
}

export default NavHeader