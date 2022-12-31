import { aStorageService } from '../../../services/async-storage.service.js'

const STORAGE_KEY = 'noteDB'
_createNotes()

const NOTE_TXT = 'note-txt'
const NOTE_IMG = 'note-img'
const NOTE_VIDEO = 'note-video'


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

function addNote(shortNote) {
    console.log('addNote', shortNote)
    var note = null
    switch (shortNote.noteType) {
        case NOTE_TXT:
            note = getEmptyNote(shortNote.noteType, false, { 'txt': shortNote.info })
            return save(note)
        case NOTE_IMG:
            note = getEmptyNote(shortNote.noteType, false, { 'imgUrl': shortNote.info })
            return save(note)
        case NOTE_VIDEO:
            note = getEmptyNote(shortNote.noteType, false, { 'videoUrl': shortNote.info })
            return save(note)
    }
}

function duplicateNote(note) {
    var note = getEmptyNote(note.type, note.isPinned, note.info.txt, note.style)
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

function getEmptyNote(type = "note-txt", isPinned = false, info = null, style = { backgroundColor: 'blue' }) {
    return { type: type, isPinned: isPinned, info: info, style: style }
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
                type: "note-img",
                isPinned: false,
                info: {
                    imgUrl: "https://picsum.photos/id/237/200/300"
                },
                style: {
                    backgroundColor: 'pink'
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
            },
            {
                id: "n103",
                type: "note-video",
                isPinned: false,
                info: {
                    videoUrl: "https://www.youtube.com/embed/ig5oMN4XQz4"
                },
                style: {
                    backgroundColor: 'pink'
                }
            }
        ]
    }

    aStorageService.saveToStorage(STORAGE_KEY, notes)
}