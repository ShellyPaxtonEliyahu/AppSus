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
        console.log('loadNotes')
        noteService.query().then(notes => setNotes(notes))
    }

    function onRemoveNote(noteId) {
        console.log('onRemoveNote')
        noteService.remove(noteId).then(() => {
            const updatedNotes = notes.filter(Note => Note.id !== noteId)
            setNotes(updatedNotes)
            // showSuccessMsg('Book removed')
        })
            .catch((err) => {
                console.log('error', err)
                // showErrorMsg('Could not remove note')
            })
    }

    function addNote(newTxtNote) {
        console.log('newTxtNote', newTxtNote)

        if (newTxtNote) {

            noteService.addNote(newTxtNote).then(note => {
                console.log(note)
                setNotes(prevNotes => [...prevNotes, note])
            })

            

            // setNewNote((prevNote) => ({ ...prevNote, info: newTxtNote }))
            // const newNote = noteService.getEmptyNote('note-txt', 'newTxtNote.txt')
            // noteService.save(newNote).then((note) => {
            //     console.log('note saved !', note)
            // })

            // loadNotes()

        }
        else console.log('no new note')
    }

    return <section>
        <NoteFilter />
        <NoteAdd addNote={addNote} />
        <NoteList notes={notes} onRemoveNote={onRemoveNote} />

    </section>

}
