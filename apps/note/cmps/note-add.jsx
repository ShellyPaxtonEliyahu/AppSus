const { useState } = React

import { noteService } from "../services/note.service.js"


export function NoteAdd() {
    const [newNote, setNewNote] = useState({
        type: "note-txt",
        isPinned: false,
        info: {
            txt: ''
        }
    })
    const [newTxtNote, setTxtNewNote] = useState({txt:''})
    // const [newNote, setNewNote] = useState(noteService.getEmptyNote())

    function onAddNote(ev) {
        ev.preventDefault()

        console.log(newTxtNote)
        console.log(newNote)

        // יש דיליי בהכנסת כל הטקסט לתוך הTODO

        noteService.save(newNote).then((note) => {
            console.log('note saved !', note)
        })

        //יש לאתחל את הVALUE
    }

    function handleChange({ target }) {
        let { value } = target
        setTxtNewNote((prevTxtNote) => ({...prevTxtNote, txt:value}))
        setNewNote((prevNote) => ({...prevNote, info:newTxtNote}))
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