const { useState, Fragment } = React
import { mailService } from "../services/mail.service.js"
export function MailPreview({mail}) {

    const [isExpanded, setIsExpanded] = useState(false)
    // const [isMark,setIsMark] = useState(mailService.query())

    function onExpanded(mailId){
        console.log('mailId',mailId)
        mailService.get(mailId)
        .then(() => {
            mail.isRead = true
            console.log('mail',mail)
            setIsExpanded(!isExpanded)
        })
        
        
    }


    return <Fragment>
        <tr onClick={()=>{
            onExpanded(mail.id)}}>
            <td>{mail.subject}</td>
            <td>{mail.body}</td>
        </tr>
        <tr hidden={!isExpanded}>
            <td colSpan="2">
                <p>{mail.body}</p>
            </td>
        </tr>
    </Fragment>

}