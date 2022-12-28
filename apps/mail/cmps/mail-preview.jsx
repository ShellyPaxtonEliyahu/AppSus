const { useState, Fragment } = React

export function MailPreview({mail}) {

    const [isExpanded, setIsExpanded] = useState(false)

    return <Fragment>
        <tr onClick={() => {
            setIsExpanded(!isExpanded)
        }}>
            <td>{mail.subject}</td>
            <td>{mail.body}</td>
        </tr>
        <tr hidden={!isExpanded}>
            <td colSpan="2">
                <p>{mail.body}</p>
            </td>
        </tr>
    </Fragment>

}