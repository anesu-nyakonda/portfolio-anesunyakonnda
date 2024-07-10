const nodemailer = require("nodemailer");

async function main() {
  const transporter = await nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "nyakondaanesu@gmail.com",
      pass: "kzqz yjqy qhiz iash",
    },
  });

  const info = await transporter.sendMail({
    from: "nyakondaanesu@gmail.com",
    to: "nyakondaa@africau.edu", // list of receivers
    subject: "Hello i would like to work with you ✔", // Subject line
    text: "Hello world?", // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
module.exports = main;
