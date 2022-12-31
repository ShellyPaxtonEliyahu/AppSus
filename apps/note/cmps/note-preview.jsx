const { useState, useEffect } = React
import { NotePreviewTools } from './note-preview-tools.jsx'
import { noteService } from '../services/note.service.js'

export function NotePreview({ note, onRemoveNote, onEditNote }) {
    const NOTE_TXT = 'note-txt'
    const NOTE_IMG = 'note-img'
    const NOTE_VIDEO = 'note-video'
    const [style, setStyle] = useState(note.style)

    function changeBGColor(txtColor) {
        setStyle({ backgroundColor: txtColor })
        note.style = { backgroundColor: txtColor } //changing note
        noteService.save(note).then()
    }

    return <article className="note-preview" style={style}>



        <p> {note.type}</p>

        {note.type == NOTE_TXT && <p className="note-content"> {note.info.txt}</p>}
        {note.type == NOTE_IMG && <img src={note.info.imgUrl} />}
        {note.type == NOTE_VIDEO && <video controls
            src={note.info.videoUrl} type="video/mp4" >
        </video>}

        <NotePreviewTools note={note} onRemoveNote={onRemoveNote} changeBGColor={changeBGColor} onEditNote={onEditNote} />



    </article>
}