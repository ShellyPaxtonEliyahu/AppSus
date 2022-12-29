const { useState, useEffect } = React

import { NoteAdd } from "../cmps/note-add.jsx"
import { NoteFilter } from "../cmps/note-filter.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { noteService } from "../services/note.service.js"
import { showSuccessMsg } from "../../../services/event-bus.service.js"

export function NoteIndex() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query().then(notes => setNotes(notes))
    }

    function onRemoveNote(noteId) {
        console.log('RemoveNote', noteId)
        noteService.remove(noteId).then(() => {
            const updatedNotes = notes.filter(Note => Note.id !== noteId)
            setNotes(updatedNotes)
            showSuccessMsg('note removed')
        })
            .catch((err) => {
                console.log('error', err)
                // showErrorMsg('Could not remove note')
            })
    }

    function addNote(newTxtNote) {
        if (newTxtNote) {
            noteService.addNote(newTxtNote).then(note => {
                setNotes(prevNotes => [...prevNotes, note])
            })
        }
        else console.log('no new note')
    }

    return <section>
        <NoteFilter />
        <NoteAdd addNote={addNote} />
        <NoteList notes={notes} onRemoveNote={onRemoveNote} />

    </section>

}
