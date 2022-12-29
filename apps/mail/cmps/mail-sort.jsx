import { mailService } from "../services/mail.service.js"



export function MailSort(){

     function getSort(){
        mailService.query()
            .then((x)=>console.log('x',x))
     }


    return <section>
        <h3>sorting:</h3>
        <select name="isRead" id="mail-read" type="text" onChange={getSort}>
            
        </select>
    </section>
}