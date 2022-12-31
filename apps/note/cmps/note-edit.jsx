const { useState } = React

export function NoteEdit({ noteEdit: note, updateNote }) {
    const [txtNote, setTxtNote] = useState(note.info.txt)

    const NOTE_TXT = 'note-txt'
    const NOTE_IMG = 'note-img'
    const NOTE_VIDEO = 'note-video'

    function handleChange({ target }) {
        let { value } = target
        console.log(value)
        setTxtNote(value)
    }

    function onUpdateNote(ev) {
        ev.preventDefault()
        if (note.type == NOTE_TXT) {
            note.info = { 'txt': txtNote }
        }
        updateNote(note)
    }

    return <section>
        <form onSubmit={onUpdateNote} className="note-preview" style={note.style}>
            <h3>Edit</h3>
            {note.type == NOTE_IMG && <img className="note-img img-edit" src={note.info.imgUrl} />}
            {note.type == NOTE_VIDEO &&
                <iframe className="note-video video-edit" width="200" height="150" src={note.info.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            }

            {note.type == NOTE_TXT &&
                <input className="note-update-content" type="text"
                    name="noteTxt"
                    value={txtNote}
                    onChange={handleChange} />
            }
            <button > Update</button>
        </form>
    </section>
}