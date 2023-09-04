import 

export const transporter = nodemailer.createTransport({
    host: "mail.cooperativasion.com.br",
    port: 25,
    secure: false,
    auth: {
      user: "noreply@cooperativasion.com.br",
      pass: ",2Fc2K[TXT?C",
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: '"Teste" <noreply@cooperativasion.com.br>',
    to: user.email,
    subject: "Recuperação de senha",
    html: `
      <p>Olá ${user.name},</p>
      <p>Clique <a href="${recoveryLink}">aqui</a> para redefinir sua senha.</p>
      `,
  };

  transporter.sendMail