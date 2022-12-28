const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"


export function NoteAdd({ loadNotes }) {
   
    const [newNote, setNewNote] = useState({
        type: "note-txt",
        isPinned: false,
        info: {
            txt: ''
        }
    })
    const [newTxtNote, setTxtNewNote] = useState({ txt: '' })

    function onAddNote(ev) {
        ev.preventDefault()

        console.log('newTxtNote', newTxtNote)
        if (newTxtNote.txt) {
            // יש דיליי בהכנסת כל הטקסט לתוך הTODO
            setNewNote((prevNote) => ({ ...prevNote, info: newTxtNote }))
            noteService.save(newNote).then((note) => {
                console.log('note saved !', note)
            })
            //יש לאתחל את הVALUE
            // loadNotes()
            
        }
        else console.log('no new note')
    }

    function handleChange({ target }) {
        let { value } = target

        console.log(value)
        setTxtNewNote((prevTxtNote) => ({ ...prevTxtNote, txt: value }))
    }

    return <section>
        <form onSubmit={onAddNote}>
            <input type="text"
                name="noteTxt"
                value={setTxtNewNote.txt}
                placeholder="Enter your note"
                onChange={handleChange} />
            <button > Add </button>
        </form>
    </section>
}