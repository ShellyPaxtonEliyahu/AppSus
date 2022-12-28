const { Link } = ReactRouterDOM
const { useState, Fragment } = React
import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails }) {
    const [isExpanded, setIsExpanded] = useState(false)
    return <table border="1">
    <thead>
        <tr>
            <th>subject</th>
            <th>body</th>
        </tr>
    </thead>
    <tbody>
        {mails.map(mail => <MailPreview key={mail.id} mail={mail} />)}
    </tbody>
</table>

  

}










// <section className="mail-list">
//         <table border="1">
//             <thead>Mails:</thead>
//             <tbody>
//                 {mails.map(mail => <tr key={mail.id}>
//                     {mail.subject}
//                     <MailPreview mail={mail} />
//                     <Link to={`/mail/${mail.id}`}>Details</Link>
//                 </tr>)}

//             </tbody>

//         </table>
//     </section>