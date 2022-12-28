import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes }) {
    return <ul>
        {
            notes.map(note => <li key={note.id}>
                <NotePreview note={note} />
            </li>)
        }
    </ul>

}
