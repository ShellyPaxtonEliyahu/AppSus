const { useState, useEffect } = React

import { mailService } from "../services/mail.service.jsx"

export function MailFilter({ onSetFilter }) {

    const[filterByEdit,setFilterByEdit]=useState(mailService.getDefaultFilter())

    useEffect(()=>{
        onSetFilter(filterByEdit)
    },[filterByEdit])


    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByEdit)
    }

    // function handleChange({target}) {
    //     let {value,name:field}
    // }





    return <section>
        <h3>Filter Mails</h3>
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="mark"></label>
            <input type="checkbox" id="mark" name="!isRead" value={filterByEdit.isRead} onChange={handleChange}/>
        </form>
    </section>



}