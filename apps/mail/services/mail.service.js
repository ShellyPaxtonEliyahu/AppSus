import { utilService } from '../../../services/util.service.js'
// import {storageService} from '../services/storageService.js'
import { aStorageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
}


function query() {
    return aStorageService.query(MAIL_KEY)
        .then(mails => {
            return mails
        })
}

function get(mailId) {
    console.log('mailId',mailId)
    return aStorageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
    return aStorageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return aStorageService.put(MAIL_KEY, mail)
    } else {
        return aStorageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail(subject = '', body = '',from = '') {
    return { subject, body, isRead: false, sendAt: Date.now(), to:'shellypax@gmail.com',from }
}

function _createMails() {
    let mails = aStorageService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = [
            {
                id: 'etih55',
                subject: 'Mister E-Mail',
                body: 'Hello there, its my first E-mail app!',
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: null
            },
            {
                id: 'sru340',
                subject: 'Mister E-Mail',
                body: 'Hello there, its my first E-mail app!',
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: null
            },
            {
                id: 'iurt34',
                subject: 'Mister E-Mail',
                body: 'Hello there, its my first E-mail app!',
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: null
            },
            {
                id: 'ig9e09',
                subject: 'Mister E-Mail',
                body: 'Hello there, its my first E-mail app!',
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: null
            },
        ]
    }
    aStorageService.saveToStorage(MAIL_KEY, mails)

}
