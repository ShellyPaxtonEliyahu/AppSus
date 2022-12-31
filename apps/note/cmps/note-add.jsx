const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"


export function NoteAdd({ addNote, addNoteImg }) {

    const NOTE_TXT = 'note-txt'
    const NOTE_IMG = 'note-img'
    const NOTE_VIDEO = 'note-video'

    const [noteType, setNoteType] = useState(NOTE_TXT)
    const addTxtPlaceHolder = 'Type your note...'
    const [newTxtNote, setTxtNewNote] = useState('')


    function handleChange({ target }) {
        let { value } = target
        setTxtNewNote(value)
    }

    function onAddNote(ev) {
        ev.preventDefault()

        //need to send {nodeType:, nodeInfo:}
        addNoteImg(newTxtNote)
        // addNote(newTxtNote) 
    }

    function handleChangeNoteType(newNoteType) {
        console.log(newNoteType)
        setNoteType(value)
    }

    return <section>
        <form onSubmit={onAddNote}>

           
            <input type="text"
                name="noteTxt"
                value={newTxtNote}
                placeholder={addTxtPlaceHolder}
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


// function DynamicCmp(props) {
//     switch (props.noteType) {
//         case 'note-txt':
//             console.log('note-txt')
//             return <p> 'note-txt'</p>
//         case 'note-img':
//             return <p> 'note-img'</p>
//         case 'note-video':
//             return <p> 'note-video'</p>
//     }
// }