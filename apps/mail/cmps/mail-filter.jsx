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
        console.log('field',field)
        let {value,name:field,type} = target
        if(value==='unread')
        setFilterByEdit((prevFilter)=>{({...prevFilter,[field]:value})}) 
        
    }





    return <section>
        <h3>Filter Mails</h3>
        <label htmlFor="mail-read">Read/Unread:</label>
        <select name="isRead" id="mail-read" type="text" onChange={handleChange}>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
        </select>


        {/* <form onSubmit={onSubmitFilter}>
            <label htmlFor="mark"></label>
            <input type="checkbox" id="mark" name="!isRead" value={filterByEdit.isRead} onChange={handleChange}/>
        </form> */}
    </section>



}