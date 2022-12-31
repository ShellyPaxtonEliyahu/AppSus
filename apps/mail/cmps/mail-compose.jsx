import { mailService } from "../services/mail.service.js"

const { useState } = React

export function Compose({ composeMail }) {

    const [newMail, setNewMail] = useState(mailService.getEmptyMail())
    // const [showCompose,setShowCompose] = useState(false)

    // function showComposeSection() {
    //     setShowCompose(true)
    // }

    function onComposeMail(ev) {
        ev.preventDefault()
        composeMail(newMail)
    }

    function handleChange({ target }) {
        let { value, type, name: field } = target
        setNewMail((prevNewMail) => ({ ...prevNewMail, [field]: value }))
    }

    return <section className="mail-comp">
        <h2>Compose</h2>
        <form className="comp-form" onSubmit={onComposeMail}>
            <label htmlFor="email">From:</label>
            <input type="email" name="from" id="email" placeholder="Enter your email..." value={newMail.from} onChange={handleChange} />
            <br />

            <label htmlFor="subject">Subject:</label>
            <input type="text" name="subject" id="subject" placeholder="Subject" value={newMail.subject} onChange={handleChange} />
            <br />

            <label htmlFor="body">Body:</label>
            <input type="textarea" name="body" id="body" placeholder="Enter your thought..." value={newMail.body} onChange={handleChange} />

            <div>
                <button className="comp-btn">Add ➕</button>
            </div>
        </form>
    </section>


}