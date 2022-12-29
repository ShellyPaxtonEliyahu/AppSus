// const { useState, Fragment } = React
// const {Link} = ReactRouterDOM
import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails, onRemoveMail }) {

    // const style = {
    //     // ul : {
    //     //     listStyleType: none
    //     // }
    //     listStyleType: none
    // }

    return <ul>
        {mails.map(mail => <li key={mail.id}>
            <MailPreview onRemoveMail={onRemoveMail} mail={mail} />
            {/* <Link to={`/mail/${mail.id}`}></Link> */}
        </li>)}
    </ul>



}









{/* <table border="1">
        <thead>
            <tr>
                <th>subject</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
            {mails.map(mail => <tr key={mail.id}>
                <MailPreview key={mail.id} mail={mail} />
                <button onClick={() => onRemoveMail(mail.id)}>🗑</button>
            </tr>
            )}



        </tbody>
    </table> */}


// <div>
//     <button onClick={() => onRemoveMail(mail.id)}>🗑</button>
// </div>

// <MailPreview key={mail.id} mail={mail} />


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