
function Email(props) {
    const { index, email, onChangeRead, onChangeStarred, open } = props
    return <li
        key={index}
        className={`email ${email.read ? 'read' : 'unread'}`}
        onClick={() => { open(email) }}>
        <div className="select">
            <input
                className="select-checkbox"
                type="checkbox"
                checked={email.read}
                onChange={() => onChangeRead(email)} />
        </div>
        <div className="star">
            <input
                className="star-checkbox"
                type="checkbox"
                checked={email.starred}
                onChange={() => onChangeStarred(email)} />
        </div>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
    </li>
}

export default Email