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

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }
    
    function onRemoveMail(mailId) {
        mailService.remove(mailId)
            .then(()=>{
                const updateMails = mails.filter(mail=>mail.id!==mailId)
                console.log('mail removed!')
                setMails(updateMails)
            })
            .catch((err)=> console.log('error-remove...'))
    }

    function composeMail(mail) {
        mailService.save(mail)
            .then((mail) => {
                console.log('mail saved!', mail)
                setMails((prevMail)=> [mail,...prevMail])
                
            })
            .catch(err => console.log('error-compose...'))
    }
    
    return <section>
        <MailFilter onSetFilter={onSetFilter}/>
        <MailList mails={mails} onRemoveMail={onRemoveMail} />
        <Compose composeMail={composeMail} />
    </section>
}

// className="mail-index full main-layout"