const { useState, useEffect } = React

import { NoteFilter } from "../cmps/note-filter.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { NotePreview } from "../cmps/note-preview.jsx"
import { noteService } from "../services/note.service.js"

export function NoteIndex() {

    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query().then(notes => setNotes(notes))
    }

    return <section>
        <NoteFilter />
        <NoteList notes={notes} />
        
    </section>

}
