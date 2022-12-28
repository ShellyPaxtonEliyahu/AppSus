import { aStorageService } from '../../../services/async-storage.service.js'


const STORAGE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    remove
}

function query() {
    return aStorageService.query(STORAGE_KEY)
        .then(notes => {
            return notes
        })
}

function remove(noteId) {
    return aStorageService.remove(STORAGE_KEY, noteId)
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
                }
            },
            {
                id: "n102",
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "Fullstack you !"
                }
            }
        ]
    }

    aStorageService.saveToStorage(STORAGE_KEY, notes)
}