const { useState } = React



export function NoteAdd() {
    const [newNote, setNewNote] = useState({
        txt: ''
    })

    function onAddNote(ev) {
        ev.preventDefault()
        
        console.log(newNote.txt)

    }

    function handleChange({ target }) {
        let { value } = target
        setNewNote((prevNote) => ({ ...prevNote, txt: value }))
    }

    return <section>
        <form onSubmit={onAddNote}>
            <input type="text"
                name="noteTxt"
                value={setNewNote.txt}
                placeholder="Enter your note" 
                onChange={handleChange}/>
            <button > Add </button>
        </form>
    </section>
}