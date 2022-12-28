import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, onRemoveNote }) {
    return <ul>
        {
            notes.map(note => <li key={note.id}>
                <NotePreview note={note} />
                <div>
                <button onClick={() => onRemoveNote(note.id)}> X </button>
                </div>
            </li>)
        }
    </ul>

}
