const { useState, Fragment } = React
const { Link } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"

export function MailPreview({ mail, onRemoveMail }) {

    const [isExpanded, setIsExpanded] = useState(false)

    function onExpanded(mailId) {
        mailService.get(mailId)
            .then(() => {
                mail.isRead = true
                setIsExpanded(!isExpanded)
            })
    }

    return <Fragment>
        <div>
            {mail.subject}
        </div>
        <div>
            <Link to={`/mail/${mail.id}`}>📂</Link>
        </div>


        <div>
            <button onClick={() => onRemoveMail(mail.id)} title="remove mail">🗑</button>
        </div>
        <div>
            {mail.sendAt}
        </div>
    </Fragment>

}
