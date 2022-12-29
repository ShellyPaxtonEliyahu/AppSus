import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails, onRemoveMail }) {

    return <ul>
        {mails.map(mail => <li key={mail.id}>
            <MailPreview onRemoveMail={onRemoveMail} mail={mail} />
        </li>)}
    </ul>
}