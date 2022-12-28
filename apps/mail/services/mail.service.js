import { utilService } from '../../../services/util.service.js'
import {storageService} from '../services/storageService.js'
import { aStorageService } from '../../../services/async-storage.service.js'
export const mailService = {
    query,
    get,
    remove,
    save,
}

const MAIL_KEY = 'mailDB'
_createMails()


function query () {
    return aStorageService.query(MAIL_KEY)
        .then(mails=> {
            return mails
        })
}

function get(mailId) {
    return aStorageService.get(MAIL_KEY,mailId)
}

function remove(mailId) {
    return aStorageService.remove(MAIL_KEY,mailId)
}

function save(mail) {
    if(mail.id) {
        return aStorageService.put(MAIL_KEY,mail)
    } else {
        return aStorageService.post(MAIL_KEY,mail)
    }
}



function _createMails() {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = [
            {
                id: utilService.makeId(),
                subject:'Mister E-Mail',
                body: Txt,
                isRead: false,
                sendAt: Date.now(),
                to:'shellypax@gmail.com'
            },
            {
                id: utilService.makeId(),
                subject:'Mister E-Mail',
                body: Txt,
                isRead: false,
                sendAt: Date.now(),
                to:'shellypax@gmail.com'
            },
            {
                id: utilService.makeId(),
                subject:'Mister E-Mail',
                body: Txt,
                isRead: false,
                sendAt: Date.now(),
                to:'shellypax@gmail.com'
            },
            {
                id: utilService.makeId(),
                subject:'Mister E-Mail',
                body: Txt,
                isRead: false,
                sendAt: Date.now(),
                to:'shellypax@gmail.com'
            },
        ]
    } 
    
}

