const { useState, useEffect } = React

import { NoteAdd } from "../cmps/note-add.jsx"
import { NoteFilter } from "../cmps/note-filter.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { noteService } from "../services/note.service.js"


export function NoteIndex() {

    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query().then(notes => setNotes(notes))
    }

    function onRemoveNote(noteId) {
        console.log('onRemoveNote')
        noteService.remove(noteId).then(() => {
            const updatedNotes = notes.filter(Note => Note.id !== noteId)
            setNotes(updatedNotes)
            // showSuccessMsg('Book removed')
        })
        .catch((err) =>{
            console.log('error', err)
            // showErrorMsg('Could not remove note')
        })
    }

    function onAddNote(){
        console.log('onAddNote')
    }

    return <section>
        <NoteFilter />
        <NoteAdd />
        <button onClick={() => onAddNote()}> Add Note </button>
        <NoteList notes={notes} onRemoveNote={onRemoveNote} />
        
    </section>

}
