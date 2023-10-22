import { Avatar, Box, Button, Grid, ListItem, ListItemButton, ListItemIcon } from "@mui/material"
import ChatAvatar from "./ChatAvatar"
import ChatName from "./ChatName"
import LatestChat from "./LatestChat"
import Read from "./Read"

const Card = ({chat,isActive,isRead,setActiveChat}) => {
    return (
        <ListItem >
                <ListItemButton onClick={()=>setActiveChat(chat.id)} selected={isActive} dense={true} disableGutters divider={true} variant="text">
                    <ListItemIcon>
                        <ChatAvatar id={chat.avatar}/>
                    </ListItemIcon>
                    <Grid container>
                        <Grid item xs={10}>
                            <ChatName chatName={chat.name}/>
                        </Grid>
                        <Grid item xs={2}>
                            date
                        </Grid>
                        <Grid item xs={1}>
                            <Read isRead={isRead}/>  
                        </Grid>
                        <Grid item xs={11}>
                            <LatestChat latestChat={chat.messages[chat.messages.length-1].content}/>
                        </Grid>
                    </Grid>
                </ListItemButton>
        </ListItem>
    )
    // <div className="card">
                
    //             <div className="card-main">
    //                 <ChatName chatName={chat.name}/>
    //                 <div className="card-content">
    //                     <LatestChat latestChat={chat.messages[chat.messages.length-1].content}/>
    //                     <Read isRead={isRead}/>    
    //                 </div>
    //             </div>
                
    //             {/* <Time chat={chat.message[message.length].time}/> */}
    //         </div>
    
}




export default Card