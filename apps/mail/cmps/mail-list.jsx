const { useState, useEffect } = React

import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails, onRemoveMail }) {

    const [unread, setUnread] = useState(0)

    useEffect(() => {
        mails.filter(mail => {
            console.log('unread filter')
            if (!mail.isRead) setUnread(unread + 1)
        })
    }, [unread])


    return <ul className="mail-list">
        You have {unread} unread mails
        {mails.map(mail => <li className="mail-item" key={mail.id}>
            <MailPreview onRemoveMail={onRemoveMail} mail={mail} mails={mails} />
        </li>)}
    </ul>
}