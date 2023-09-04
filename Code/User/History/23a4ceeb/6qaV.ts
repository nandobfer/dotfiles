import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

const transporter = nodemailer.createTransport({
    host: "mail.agenciaboz.com.br",
    port: 25,
    secure: false,
    auth: {
        user: "pedido@app.mirasuprimentos.com.br",
        pass: "4B@4FgLhCs^=",
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    },
})

export const sendMail = async (destination: string, subject: string, text?: string, html?: string) => {
    const mailOptions: Mail.Options = {
        from: "Cooperativa Sion <noreply@cooperativasion.com.br>",
        to: destination,
        subject,
        html,
        text,
    }

    const response = await transporter.sendMail(mailOptions)
    return response
}
