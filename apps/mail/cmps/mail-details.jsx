import { mailService } from "../services/mail.service.js"

const { useEffect, useState } = React
const { useParams } = ReactRouterDOM


export function MailDetails() {
    const [mail, setMail] = useState(mailService.getEmptyMail())
    const { mailId } = useParams()

    useEffect(() => {
        loadMail()
    }, [])

    function loadMail() {
        mailService.get(mailId)
            .then((mail) => {
                mailService.toggleIsRead(mail)
                setMail(mail)
            })
            .catch((err) => { console.log('error with mail details') })
    }

    return <section className="mail-details">
        <h1 className="det-sub">Subject:{mail.subject}</h1>
        <h3 className="det-from">From:{mail.from}</h3>
        <h3 className="det-to">To:{mail.to}</h3>
        <hr/>
        <p className="det-body">{mail.body}</p>
    </section>
}