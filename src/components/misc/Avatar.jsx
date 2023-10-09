const Avatar = ({userId}) => {
    const imgLink = `/avatar/${userId}.png`
    return <>
        <a href="#">
            <img className="avatar" src={imgLink} alt="user avatar" />
        </a>
    </>
}

export default Avatar