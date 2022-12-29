const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js"

export function MailFilter({ onSetFilter }) {

    const[filterByEdit,setFilterByEdit]=useState(mailService.getDefaultFilter())

    useEffect(()=>{
        onSetFilter(filterByEdit)
    },[filterByEdit])


    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByEdit)
    }

    function handleChange({target}) {
        // console.log('field',field)
        // let {value,name:field} = target
        // value=()
    }





    return <section>
        <h3>Filter Mails</h3>
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="mark"></label>
            <input type="checkbox" id="mark" name="!isRead" value={filterByEdit.isRead} onChange={handleChange}/>
        </form>
    </section>



}