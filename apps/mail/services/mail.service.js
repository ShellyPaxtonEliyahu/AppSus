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
    getDefaultFilter,
    toggleIsRead
}

function getDefaultFilter() {
    return { subject: '', body: '', isRead: true, sendAt: Date.now(), to: 'shellypax@gmail.com', from: 'danayani@gmail.com' }
}

function toggleIsRead(mail){
    mail.isRead = !mail.isRead
    save(mail)
}

function query(filterBy = getDefaultFilter()) {
    // console.log('filterby', filterBy)
    return aStorageService.query(MAIL_KEY)
        .then(mails => {
            if (filterBy.isRead) {
                if (filterBy.isRead === 'all') {
                    console.log('showing akk mails')
                } else {
                    const regex = new RegExp(filterBy.isRead, 'i')
                    mails = mails.filter(mail => regex.test(mail.isRead))
                }
                // console.log('filterby is read =true')


            }
            if (!filterBy.isRead) {
                console.log('filterby is read =false')
                // const regex = new RegExp(filterBy.isRead,'i')
                // mails = mails.filter(mail=>regex.test(mail.isRead))
                mails = mails.filter(mail => mail.isRead === false)
            }
            if (filterBy.body) {
                mails = mails.filter(mail => regex.test(mail.body))
            }
            mails = mails.sort((m1, m2) => m1.sendAt - m2.sendAt)
            return mails
        })
}

function get(mailId) {
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

function getEmptyMail(subject = '', body = '') {
    return { subject, body, isRead: false, sendAt: Date.now(), to: 'shellypax@gmail.com', from: 'danayani@gmail.com' }
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
                from: 'danayani@gmail.com'
            },
            {
                id: 'sru340',
                subject: 'Mister E-Mail',
                body: 'Hello there, its my first E-mail app!',
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'danayani@gmail.com'
            },
            {
                id: 'iurt34',
                subject: 'Mister E-Mail',
                body: 'Hello there, its my first E-mail app!',
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'danayani@gmail.com'
            },
            {
                id: 'ig9e09',
                subject: 'Mister E-Mail',
                body: 'Hello there, its my first E-mail app!',
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'danayani@gmail.com'
            },
        ]
    }
    aStorageService.saveToStorage(MAIL_KEY, mails)

}
