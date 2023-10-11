import { Avatar, ListItem } from "@mui/material"
const NavHeader = ({user}) =>{
    const imgLink = `/avatar/${user.id}.png`
    return <ListItem className="header">
        <Avatar src={imgLink}/>
    </ListItem>

}

export default NavHeader