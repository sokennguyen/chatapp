import Avatar from "../misc/Avatar"

const NavHeader = ({userId}) =>{
    return <div className="nav-header">
        <Avatar userId={userId}/>
    </div>
}

export default NavHeader