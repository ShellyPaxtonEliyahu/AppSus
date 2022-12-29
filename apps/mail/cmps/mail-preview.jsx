const { useState, Fragment } = React
const { Link } = ReactRouterDOM

// import { MailDetails } from "../cmps/mail-details.jsx"
import { mailService } from "../services/mail.service.js"

export function MailPreview({ mail, onRemoveMail }) {
    console.log('mail', mail)
    const [isExpanded, setIsExpanded] = useState(false)

    function onExpanded(mailId) {
        console.log('mailId', mailId)
        mailService.get(mailId)
            .then(() => {
                mail.isRead = true
                console.log('mail', mail)
                setIsExpanded(!isExpanded)
            })
    }

    return <Fragment>
        <div>
            {mail.subject}
        </div>
        <div>
            {/* <button onClick={() => { onExpanded(mail.id) }} title="show mail">
                📂
            </button> */}
            <Link to={`/mail/${mail.id}`}>📂</Link>
        </div>


        <div>
            <button onClick={() => onRemoveMail(mail.id)} title="remove mail">🗑</button>
        </div>
        <div>
            {mail.sendAt}
        </div>
        {/* {isExpanded && <MailDetails />} */}
    </Fragment>

}










// <tr onClick={()=>{
//             onExpanded(mail.id)}}>
//             <td>{mail.subject}</td>
//             <td>{mail.body}</td>
//         </tr>
//         <tr hidden={!isExpanded}>
//             <td colSpan="2">
//                 <p>{mail.body}</p>
//             </td>
//         </tr>