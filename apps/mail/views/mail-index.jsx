const { useState, useEffect } = React

import {MailFilter} from "../cmps/mail-filter.jsx"
import { Compose } from "../cmps/mail-compose.jsx";
import { MailList } from "../cmps/mail-list.jsx";
import { mailService } from "../services/mail.service.js";

export function MailIndex() {
    const [mails,setMails] = useState([])
    const [filterBy,setFilterBy]=useState(mailService.getDefaultFilter())

  
    useEffect(()=> {
        loadMails()
    },[filterBy])
    
    function loadMails(){
        mailService.query(filterBy)
            .then((mails) => {
                setMails(mails)
            })
    }

    function onSetFilter(isRead) {
        setFilterBy(prev=>({...prev, ['isRead']:isRead}))
    }
    
    function onRemoveMail(mailId) {
        mailService.remove(mailId)
            .then(()=>{
                const updateMails = mails.filter(mail=>mail.id!==mailId)
                setMails(updateMails)
            })
            .catch((err)=> console.log('error-remove...'))
    }

    function composeMail(mail) {
        mailService.save(mail)
            .then((mail) => {
                setMails((prevMail)=> [mail,...prevMail])
            })
            .catch(err => console.log('error-compose...'))
    }
    
    return <section className="mail-index main-layout">
        <MailFilter onSetFilter={onSetFilter}/>
        <Compose composeMail={composeMail} />
        <MailList mails={mails} onRemoveMail={onRemoveMail} />
    </section>
}
