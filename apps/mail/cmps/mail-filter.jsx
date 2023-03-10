const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js"

export function MailFilter({ onSetFilter }) {

    const [filterByEdit, setFilterByEdit] = useState(mailService.getDefaultFilter())

    useEffect(()=>{
        onSetFilter(filterByEdit)
    },[filterByEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        onSetFilter(value)

    }

    return <section className="mail-filter">
        <h3 className="filter-title">Filter Mails</h3>
        <label htmlFor="mail-read">Read/Unread:</label>
        <select className="filter-select" name="isRead" id="mail-read" type="text" onChange={handleChange}>
            <option value="all">All</option>
            <option value="true">Read</option>
            <option value="false">Unread</option>
        </select>
    </section>



}