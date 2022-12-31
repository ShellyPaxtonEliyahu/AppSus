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

    return <section>
        <h1>Subject:{mail.subject}</h1>
        <h3>From:{mail.from}</h3>
        <h3>To:{mail.to}</h3>
        <hr/>
        <p>{mail.body}</p>
    </section>
}