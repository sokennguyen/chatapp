const Avatar = ({id}) => {
    const imgLink = `/avatar/${id}.png`
    return <>
        <a href="#">
            <img className="avatar" src={imgLink} alt="user avatar" />
        </a>
    </>
}

export default Avatar