console.log('Hi from service')
import { storageService } from '../services/storageService.js'
import { utilService } from '../services/utilService.js'


const STORAGE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query
}

function query() {
    return storageService.query(STORAGE_KEY)
        .then(notes => {
            // if (filterBy.txt) {
            //     const regex = new RegExp(filterBy.txt, 'i')
            //     books = books.filter(book => regex.test(book.title))
            // }
            // if (filterBy.minPrice) {
            //     books = books.filter(book => book.listPrice.amount >= filterBy.minPrice)
            // }
            // if (filterBy.pageCount) {
            //     books = books.filter(book => book.pageCount <= filterBy.pageCount)
            // }
            // if (filterBy.minYear) {
            //     books = books.filter(book => filterBy.minYear >= utilService.getYearsDistance(book.publishedDate))
            // }

            return notes
        })
}

function _createNotes() {
    const notes = [
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

    utilService.saveToStorage(STORAGE_KEY, notes)
}