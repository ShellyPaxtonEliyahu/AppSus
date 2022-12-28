console.log('Hi from service')
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../services/storageService.js'
import { aStorageService } from '../../../services/async-storage.service.js'


const STORAGE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query
}

function query() {
    return aStorageService.query(STORAGE_KEY)
        .then(notes => {
            return notes
        })
}

function _createNotes() {
    let notes = storageService.loadFromStorage(STORAGE_KEY)
    console.log('_createNotes')
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

    storageService.saveToStorage(STORAGE_KEY, notes)
}