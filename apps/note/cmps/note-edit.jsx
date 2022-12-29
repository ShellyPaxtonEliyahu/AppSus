const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM


export function NoteEdit({ noteEdit: note, updateNote }) {
    const [txtNote, setTxtNote] = useState(note.info.txt)


    function handleChange({ target }) {
        let { value } = target
        setTxtNote(value)
    }

    function onUpdateNote(ev) {
        ev.preventDefault()
        note.info.txt = txtNote

        updateNote(note)  
    }

    return <section>
        <form onSubmit={onUpdateNote}>
            NoteEdit
            <input type="text"
                name="noteTxt"
                value={txtNote}
                // placeholder="Enter your note"
                onChange={handleChange} />
            <button > Update</button>
        </form>
    </section>
}