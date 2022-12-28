import { Inbox } from "../cmps/inbox.jsx"
import { MailHeader } from "../cmps/mail-header.jsx"
export function MailIndex() {
    return <section className="mail-app main-layout">
        <main>
            <MailHeader />
            <Inbox />
        </main>
    </section>
}

