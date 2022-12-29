const { useState, useEffect } = React

export function NotePreviewTools({note, onRemoveNote, changeBGColor }) {

    const [newColor, setNewColor] = useState('')

    function handleChangeBGColor({ target }) {
        let { value } = target
        setNewColor(value)
        changeBGColor(value)
    }

    return <div className="note-preview-tools">
        <div className="">
            <button onClick={() => onRemoveNote(note.id)}> X </button>
        </div>

        <div className="">
            <button type="color" className="tool-btn">
                <input type="color"
                    name="tool-bgcolor"
                    value={newColor}
                    onChange={handleChangeBGColor} />
                <i className="fa fa-palette btn tool-btn" ></i>
            </button>
        </div>
        
    </div>
}