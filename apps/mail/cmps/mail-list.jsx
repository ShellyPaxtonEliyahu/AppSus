import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails }) {
    return <section className="mail-list">
        <ul>
            {mails.map(mail => <li key={mail.id}>
                {mail.subject}
                <MailPreview mail={mail} showDetails={showDetails}/>
                <button onClick={showDetails}>Show Details</button>
            </li>)}

        </ul>
    </section>

}
