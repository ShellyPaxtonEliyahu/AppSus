import { mailService } from "../services/mail.service.js"

const { useEffect,useState } = React
const { useParams } = ReactRouterDOM


export function MailDetails() {
    const [mail,setMail] = useState(mailService.getEmptyMail())
    const { mailId } = useParams()
    { console.log('mailId', mailId) }

    useEffect(()=>{
        loadMail()
        console.log(mail)
    },[])

    function loadMail(){
        mailService.get(mailId)
            .then((mail)=>{
                console.log('mail',mail)
                setMail(mail)})
            .catch((err)=>{console.log('error with mail details')})
    }


    return <section>
        <h1>Subject:{mail.subject}</h1>
        <h3>From:{mail.from}</h3>
        

    </section>
}