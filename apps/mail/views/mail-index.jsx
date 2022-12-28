const { useState, useEffect } = React
import { Compose } from "../cmps/mail-compose.jsx";
import { MailList } from "../cmps/mail-list.jsx";
import { mailService } from "../services/mail.service.js";



export function MailIndex() {
    const [mails,setMails] = useState([])

    useEffect(()=> {
        loadMails()
    },[])

    function loadMails(){
        mailService.query()
            .then((mails) => {
                setMails(mails)
            })
    }
    
    function onRemoveMail(mailId) {
        mailService.remove(mailId)
            .then(()=>{
                const updateMails = mails.filter(mail=>mail.id!==mailId)
                setMails(updateMails)
            })
    }
    
    
    return <section>
        <MailList mails={mails} onRemoveMail={onRemoveMail} />
        <Compose />
    </section>
}

// className="mail-index full main-layout"