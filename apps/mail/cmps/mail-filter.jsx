const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js"

export function MailFilter({ onSetFilter }) {

    const [filterByEdit, setFilterByEdit] = useState(mailService.getDefaultFilter())

    // useEffect(()=>{
        // onSetFilter(filterByEdit)
    // },[filterByEdit])

    function handleChange({ target }) {
        // debugger
        let { value, name: field, type } = target
    //    console.log('fueld', field)
    //    console.log('value', value)
    //     setFilterByEdit((prevFilter) => { ({ ...prevFilter, [field]: !!value }) })
    //     console.log('filterByEdit',filterByEdit)
        onSetFilter(value)

    }

    return <section>
        <h3>Filter Mails</h3>
        <label htmlFor="mail-read">Read/Unread:</label>
        <select name="isRead" id="mail-read" type="text" onChange={handleChange}>
            <option value="true">Read</option>
            <option value="false">Unread</option>
            <option value="all">All</option>
        </select>
    </section>



}