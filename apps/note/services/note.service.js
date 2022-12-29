import { aStorageService } from '../../../services/async-storage.service.js'


const STORAGE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    addNote,
    duplicateNote,
    save,
    remove,
    get,
    getEmptyNote,
    changeNoteStyle
}

function query() {
    return aStorageService.query(STORAGE_KEY)
        .then(notes => {
            return notes
        })
}

function addNote(txt) {
    var note = getEmptyNote(undefined, false, txt)
    return save(note)
}

function duplicateNote(note){
    var note = getEmptyNote(note.type,note.isPinned, note.info.txt, note.style )
    return save(note)
}

function save(note) {
    console.log('note save', note)
    if (note.id) {
        return aStorageService.put(STORAGE_KEY, note)
    } else {
        return aStorageService.post(STORAGE_KEY, note)
    }
}

function remove(noteId) {
    return aStorageService.remove(STORAGE_KEY, noteId)
}

function get(noteId) {
    return aStorageService.get(STORAGE_KEY, noteId)

}

function getEmptyNote(type = "note-txt", isPinned = false, txt = '', style = { backgroundColor: 'blue' }) {
    return { type: type, isPinned: isPinned, info: { txt: txt }, style: style }
}

function changeNoteStyle(channgedNote) {
    return save(channgedNote)
}

function _createNotes() {
    let notes = aStorageService.loadFromStorage(STORAGE_KEY)
    // console.log('_createNotes')
    if (!notes || !notes.length) {
        notes = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "Fullstack Me Baby!"
                },
                style: {
                    backgroundColor: 'blue'
                }
            },
            {
                id: "n102",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "Fullstack you !"
                },
                style: {
                    backgroundColor: 'green'
                }
            }
        ]
    }

    aStorageService.saveToStorage(STORAGE_KEY, notes)
}