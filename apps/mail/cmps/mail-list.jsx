import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails, onRemoveMail }) {

    return <ul className="mail-list">
        {mails.map(mail => <li className="mail-item" key={mail.id}>
            <MailPreview onRemoveMail={onRemoveMail} mail={mail} />
        </li>)}
    </ul>
}