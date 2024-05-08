function EmailDetails(props) {
    const { email, dismiss } = props
    return <>
        <div>
            <button onClick={dismiss}>Go Back</button>
            <div className="sender">Sender: {email.sender}</div>
            <div className="title">Title: {email.title}</div>
        </div>
    </>
}

export default EmailDetails