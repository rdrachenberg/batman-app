const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        user: 'kevin@thecouch.nyc',
        refreshToken: '',
        accessToken: '',
        clientId: '',
        clientSecret: ''
    }
})

const send = ({
    email,
    name,
    text
}) => {
    const from = name && email ? `${name} <${email}>` : `${name || email}`
    const message = {
        from,
        to: 'kevin@thecouch.nyc',
        subject: `New message from ${from}`,
        text,
        replyTo: from
    }

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}

module.exports = send