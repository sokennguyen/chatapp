const avatarRouter = (userObj,chatObj) => {
    if (chatObj.members.length===1){
        return chatObj.members[0]
    }
    else if (chatObj.members.length===2){
        if (userObj.id===chatObj.members[0]) return chatObj.members[1]
        else return chatObj.members[0]
    } else return
    //TODO: resolve group avatar
}

export default avatarRouter