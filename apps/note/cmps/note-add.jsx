const { useState, useEffect } = React

export function NoteAdd({ addNote }) {

    const NOTE_TXT = 'note-txt'
    const NOTE_IMG = 'note-img'
    const NOTE_VIDEO = 'note-video'

    const [noteType, setNoteType] = useState(NOTE_TXT)
    const [txtPlaceHolder, setTxtPlaceHolder] = useState('Type your note...')
    const [newTxtNote, setTxtNewNote] = useState('')


    function handleChange({ target }) {
        let { value } = target
        setTxtNewNote(value)
    }

    function onAddNote(ev) {
        ev.preventDefault()
        var sendNode = null
        switch (noteType) {
            case NOTE_TXT:
                console.log('onAddNote txt')
                sendNode = { noteType: 'note-txt', info: newTxtNote }
                console.log(sendNode)
                addNote(sendNode)
                break
            case NOTE_IMG:
                console.log('onAddNote img')
                sendNode = { noteType: 'note-img', info: newTxtNote }
                console.log(sendNode)
                addNote(sendNode)
                break
            case NOTE_VIDEO:
                console.log('onAddNote video')
                var upgreadTxt = newTxtNote.replace("watch?v=", "embed/")
                sendNode = { noteType: 'note-video', info: upgreadTxt }
                console.log(sendNode)
                addNote(sendNode)
                break
        }


        setNoteType(NOTE_TXT)
        setTxtPlaceHolder('Type your note...')
        setTxtNewNote('')
    }

    function handleChangeNoteType(newNoteType) {
        console.log(newNoteType)
        setNoteType(newNoteType)
        switch (newNoteType) {
            case NOTE_TXT:
                setTxtPlaceHolder('Type your note...')
                break
            case NOTE_IMG:
                setTxtPlaceHolder('Enter img url...')
                break
            case NOTE_VIDEO:
                setTxtPlaceHolder('Enter video url...')
                break
        }
        setTxtNewNote('')
    }

    return <section>
        <form onSubmit={onAddNote}>
            <input type="text"
                name="noteTxt"
                value={newTxtNote}
                placeholder={txtPlaceHolder}
                onChange={handleChange} />
            <button><i className="fa-solid fa-arrow-right"></i> </button>
        </form>

        <div className="note-type-options">
            <button onClick={() => handleChangeNoteType(NOTE_TXT)}>
                <i className="fa-solid fa-a"></i>
            </button>
            <button onClick={() => handleChangeNoteType(NOTE_IMG)}>
                <i className="fa-regular fa-image"></i>
            </button>
            <button onClick={() => handleChangeNoteType(NOTE_VIDEO)}>
                <i className="fa-brands fa-youtube"></i>
            </button>
            {/* <i className="fa-solid fa-microphone"></i>
            <i className="fa-solid fa-list-check"></i> */}
        </div>



    </section>
}
