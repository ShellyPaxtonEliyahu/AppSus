const { Fragment } = React
const { Link } = ReactRouterDOM

export function MailPreview({ mail, onRemoveMail }) {

    function relativeTime() {
        const date = new Date()
        const timestamp = date.getTime()

        const seconds = Math.floor(timestamp / 1000)
        const oldTimestemp = seconds - 86400

        const diff = seconds - oldTimestemp
        let output = ``

        if(diff<60){
            output = `${diff} seconds ago`
        }
        else if(diff <3600) {
            output = `${Math.floor(diff/60)} minutes ago`
        } else if(diff<86400) {
            output = `${Math.floor(diff/3600)} hours ago`
        } else if(diff<2620800){
            output = `${Math.floor(diff/86400)} days ago`
        } else if(diff<31449600){
            output = `${Math.floor(diff/2620800)} months ago`
        } else {
            output = `${Math.floor(diff/31449600)} years ago`
        }
        return output
    }

    const icon = (mail.isRead) ? '💌' : '📧'

    return <Fragment>
        <div className="mail-sub">
            {mail.subject}
        </div>
        <div className="mail-show-det">
            <Link title="show details" to={`/mail/${mail.id}`}>📂</Link>
        </div>
        <div className="read-icon">
            {icon}
        </div>

        <div>
            <button className="remove-btn" onClick={() => onRemoveMail(mail.id)} title="remove mail">🗑</button>
        </div>
        <div className="mail-sendat">
            {relativeTime()}
        </div>
    </Fragment>

}
