
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
                body: `Hello there, its my first E-mail app!
                 i'm inviting you to try it as you see fit.
                 you can see the list of all the e-mails you've got or you can filter it so you will see only read/unread e-mails.
                 you can compose a new e-mail or to delete one.
                 by clicking the "show details" icon you will open the current mail and the body of the e-mail will be shown with all the information we've got on the current e-mail.
                 hope you would like our new app and we wish you a happy experience!`,
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'danayani@gmail.com'
            },
            {
                id: 'iurt34',
                subject: 'Order 3019279850234729: delivery update',
                body: 'your package has arrived at the local delivery office.',
                isRead: true,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'AliExpress'
            },
            {
                id: 'sru340',
                subject: 'Order 3019279850234729: delivery update',
                body: 'your package is currently going through customs.',
                isRead: true,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'AliExpress'
            },
            {
                id: 'ig9e09',
                subject: 'order cancelled',
                body: 'your order has been cancelled.',
                isRead: true,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'AliExpress'
            },
            {
                id: 'fu85f7',
                subject: 'order completed',
                body: 'your order is comleted. we hope you are happy with your purchase. if the item you recied is defective or not as described, you can open a dispute within 15 days.',
                isRead: true,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'AliExpress'
            },
            {
                id: 'vno439',
                subject: 'receipt for your payment',
                body: 'you sent a payment of $250 to Fashion Choice Pte.Ltd.(SHEIN), it may take a few moments for this transaction to appear un your account.',
                isRead: true,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'service@paypal.co.il'
            },
            {
                id: 'cnf438',
                subject: 'your recent purchasee with your Apple ID',
                body: `dear costumer,
                youre Apple ID, costumer@gmail.com, has just been used to make a purchase in ringtone for iPhone from the App Store from a computer or a device that has not previously been used.
                you may also be receiving this email if you reset your password since your last purchase.`,
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'Apple'
            },
            {
                id: 'nc3278',
                subject: '2 new jobs for "full stack developer"',
                body: '2 new job alert in center district math your preferences.',
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'LinkedIn Job Alert'
            },
            {
                id: 'v8w65y',
                subject: 'ENDS SOON! EXTRA 20% OFF 📢',
                body: 'LAST HOURS!!! extra 20% off everything',
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'TERMINAL X'
            },
            {
                id: 'v8357t',
                subject: 'you appeared in 5 searches this week',
                body: 'you appeared in 5 searches this week. you were found by people from this companies: TEVA, Trillium, Dr.Fischer,  OSEM, IDEAPRESS.',
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'LinkedIn Job Alert'
            },
            {
                id: 'vn5337',
                subject: 'combined project',
                body: `Hello Shelly,
                 can't wait to start our project together.
                 i'm sure it will be fun to work with each other.
                 see you soon,
                 Dana.`,
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'danayani@gmail.com'
            },
            {
                id: 'c84u7t',
                subject: 'joint project',
                body: 'Hello Shelly, please send me your files so i can link them to my filles.',
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'danayani@gmail.com'
            },
            {
                id: 'vvj57t',
                subject: '1 new job for "chemist"',
                body: `your job alert for chemist. 1 new job in center district, israel matches your preferences:
                Jez International Inc. (JEZ V). center district on-site`,
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'LinkedIn Job Alerts'
            },
            {
                id: 'jc4n3r',
                subject: 'GOOD JOB!',
                body: `we finish!!!! the project is done!
                we did a great job and the best we can for our state and with each project we will grow and be better.
                liked working with you and hoping to do it more at the rest of the road.
                best regards,
                Dana.`,
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'danayani@gmail.com'
            },
            {
                id: 'jnv4rj',
                subject: 'a messege about a delivery',
                body: 'hello costumer, a delivery AE006767220IL from USA is on his way and will be transfer to ש distribution point nearby.',
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'donotreply'
            },
            {
                id: 'by7ugu',
                subject: 'Hi,welcome to Dropbox',
                body: `Welcome!
                Let's get you started
                we're excited to get you up and running! Whether you're lookin to back up your devices or share pics and videos with friends and colleagues, let us show you how easy it can be.
                Dropbox is made for this stuff.`,
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'Dropbox'
            },
            {
                id: 'jh76vg',
                subject: 'time to rest',
                body: 'now, when the project is over it is time to take a nap or make a cup of coffe and do a Friends marathon!',
                isRead: false,
                sendAt: Date.now(),
                to: 'shellypax@gmail.com',
                from: 'danayani@gmail.com'
            },
        ]
    }
    aStorageService.saveToStorage(MAIL_KEY, mails)

}
