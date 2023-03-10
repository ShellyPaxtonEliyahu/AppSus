const { useState, useEffect } = React


export function NotePreviewTools({ note, onRemoveNote, changeBGColor, onEditNote}) {

    const [newColor, setNewColor] = useState('')

    function handleChangeBGColor({ target }) {
        let { value } = target
        setNewColor(value)
        changeBGColor(value)
    }
    
    // function onEditNote(noteId){
    //     console.log('onEditNote', noteId)
        
    // }

    const style = {
        opacity: '0',
        position: 'absolute'
    }

    return <div className="note-preview-tools flex">
        <div className="">
            <button onClick={() => onRemoveNote(note.id)}> X </button>
        </div>

        <div>
            <button onClick={() => onEditNote(note.id)}>
                <i className="fa-regular fa-pen-to-square"></i>
            </button>
        </div>

        <div className="" >
            <button type="color" className="tool-btn">
                <input type="color"
                    name="tool-bgcolor"
                    value={newColor}
                    onChange={handleChangeBGColor}
                    style={style} />
                <i className="fa fa-palette btn tool-btn" ></i>
            </button>
        </div>



    </div>
}