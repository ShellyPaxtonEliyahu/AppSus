import { NotePreview } from "./note-preview.jsx";
import { NotePreviewTools } from "./note-preview-tools.jsx";

export function NoteList({ notes, onRemoveNote, onEditNote}) {
    return <ul className="note-list">
        {
            
            notes.map(note => <li key={note.id}>
                <NotePreview note={note} onRemoveNote={onRemoveNote} onEditNote={onEditNote} /> 
            </li>)
        }
    </ul>

}
