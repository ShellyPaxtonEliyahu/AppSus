const { useState, useEffect } = React
import { NotePreviewTools } from './note-preview-tools.jsx'
import { noteService } from '../services/note.service.js'

export function NotePreview({ note, onRemoveNote }) {

    const [style, setStyle] = useState(note.style)

    function changeBGColor(txtColor) {
        setStyle({ backgroundColor: txtColor })
        note.style = { backgroundColor: txtColor } //changing note
        noteService.save(note).then()
    }

    return <article className="note-preview" style={style}>
        {/* <h2> {note.type} </h2> */}
        <p className="note-content"> {note.info.txt}</p>

        <NotePreviewTools note={note} onRemoveNote={onRemoveNote} changeBGColor={changeBGColor} />



    </article>
}