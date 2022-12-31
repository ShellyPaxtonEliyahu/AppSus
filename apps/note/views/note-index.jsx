const { useState, useEffect } = React

import { NoteAdd } from "../cmps/note-add.jsx"
import { NoteFilter } from "../cmps/note-filter.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { noteService } from "../services/note.service.js"
import { showSuccessMsg } from "../../../services/event-bus.service.js"
import { NoteEdit } from "../cmps/note-edit.jsx"

// import { NoteEdit } from "../cmps/note-edit.jsx"

export function NoteIndex() {

    const [notes, setNotes] = useState([])
    const [noteEdit, setNoteEdit] = useState(null) //if != null, open comp

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
            // showSuccessMsg('note removed')
        })
            .catch((err) => {
                console.log('error', err)
                // showErrorMsg('Could not remove note')
            })
    }

    function onEditNote(noteId) {
        noteService.get(noteId).then((note) => {
            setNoteEdit(note)
            // console.log('onEditNote', note)
            onRemoveNote(noteId)
        })
            .catch((err) => {
                console.log('onEditNote-not good', err)
            })
    }

    function addNote(shortNote) { //resive {nodeType:, nodeInfo:}
        console.log(shortNote)
        if (shortNote) {
            console.log('if (shortNote)')
            noteService.addNote(shortNote).then(note => {
                console.log('add from index', note)
                setNotes(prevNotes => [...prevNotes, note])
            })
        }
        else console.log('no new note')
    }



    function updateNote(note) {
        console.log('updateNote')
        noteService.duplicateNote(note).then((note) => {
            setNotes(prevNotes => [note, ...prevNotes])
            setNoteEdit(null)
        })
            .catch((err) => {
                console.log('no update note')
            })
    }


    return <section>
        {/* <NoteFilter /> */}
        <NoteAdd addNote={addNote} />
        {noteEdit && <NoteEdit noteEdit={noteEdit} updateNote={updateNote} />}
        <NoteList notes={notes} onRemoveNote={onRemoveNote} onEditNote={onEditNote} />


    </section>

}
