let nodemailer = require('nodemailer');

export default function handler(req, res) {
  try {
    if (req.method == 'POST') {
      const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        secure: true,
      });
      const mailData = {
        from: process.env.SMTP_USER,
        to: 'fatehconsultants@outlook.com',
        subject: 'fatehconsultants.com - Enquiry',
        text: 'Hello. This email is for your website enquiry form.',
        html: `<div> <h3>Name : ${req.body.name}</h3><br> <h3>Email : ${req.body.email}</h3><br><h3>Contact : ${req.body.phone}</h3><br><h3>Subject : ${req.body.subject}</h3><br><h3>Message :  </h3><p>${req.body.message}</p></div>`,
      };
      transporter.sendMail(mailData, function (err, info) {
        if (err) console.log(err);
        return res.status(200).json({ success: true });
      });
    } else {
      return res.status(400).send('Invalid Request');
    }
  } catch (error) {
    console.log(error);
    return res.end('Internal Server Error');
  }
}
