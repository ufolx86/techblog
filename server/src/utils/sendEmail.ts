import nodemailer from "nodemailer";

export async function sendEmail(to: string, html: string) {
  let transponder = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "geovanny.bradtke56@ethereal.email",
      pass: "xkbqE1mKkRbYztzWU1",
    },
  });
  let resetPassWordMail = await transponder.sendMail({
    from: "Security Blog",
    to: to,
    subject: "Password Reset",
    html: html,
  });
  console.log("Message sent: %s", resetPassWordMail.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log(
    "Preview URL: %s",
    nodemailer.getTestMessageUrl(resetPassWordMail)
  );
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
