const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"


export function NoteAdd({ addNote, addNoteImg }) {

    const [newTxtNote, setTxtNewNote] = useState('')

    function handleChange({ target }) {
        let { value } = target
        setTxtNewNote(value)
    }

    function onAddNote(ev) {
        ev.preventDefault()

        addNoteImg(newTxtNote)
        // addNote(newTxtNote)
    }

    return <section>
        <form onSubmit={onAddNote}>
            <i className ="fa-solid fa-a"></i>
            <i className="fa-regular fa-image"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-solid fa-microphone"></i>
            <i className="fa-solid fa-list-check"></i>

            <input type="text"
                name="noteTxt"
                value={newTxtNote}
                placeholder="Enter your note"
                onChange={handleChange} />
            <button > Add </button>
        </form>
    </section>
}