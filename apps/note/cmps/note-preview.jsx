const { useState, useEffect } = React
import { NotePreviewTools } from './note-preview-tools.jsx'

export function NotePreview({ note, onRemoveNote }) {

const [style, setStyle] = useState({
    backgroundColor: 'pink'
})

function changeBGColor(txtColor) {
    console.log('changeBGColor', txtColor)
    setStyle.backgroundColor = txtColor
    setStyle(prevNotes => [...prevNotes, backgroundColor:txtColor])
    
}



    return <article className="note-preview" style={style}>
        {/* <h2> {note.type} </h2> */}
        <p className="note-content"> {note.info.txt}</p>

        <NotePreviewTools changeBGColor={changeBGColor} />



    </article>
}