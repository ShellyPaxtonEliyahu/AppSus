const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"


export function NoteAdd({ addNote }) {


    const [newTxtNote, setTxtNewNote] = useState('')



    function handleChange({ target }) {
        let { value } = target

        console.log(value)
        setTxtNewNote(value)
    }

    function onAddNote(ev) {
        ev.preventDefault()

        addNote(newTxtNote)
    }

    return <section>
        <form onSubmit={onAddNote}>
            <input type="text"
                name="noteTxt"
                value={newTxtNote}
                placeholder="Enter your note"
                onChange={handleChange} />
            <button > Add </button>
        </form>
    </section>
}