import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, onRemoveNote }) {
    return <ul className="note-list">
        {
            notes.map(note => <li key={note.id}>
                <div>
                <NotePreview note={note} onRemoveNote={onRemoveNote}/>
                {/* <button onClick={() => onRemoveNote(note.id)}> X </button> */}
                </div>
            </li>)
        }
    </ul>

}
