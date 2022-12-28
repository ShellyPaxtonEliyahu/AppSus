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
    function composeMail(mail) {
        mailService.save(mail)
            .then((mail) => {
                console.log('mail saved!', mail)
                setMails((prevMail)=> [mail,...prevMail])
                
            })
            .catch(err => console.log('error'))


    }
    
    
    return <section>
        <MailList mails={mails} onRemoveMail={onRemoveMail} />
        <Compose composeMail={composeMail} />
    </section>
}

// className="mail-index full main-layout"