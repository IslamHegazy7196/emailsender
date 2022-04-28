const nodemailer=require('nodemailer')
const sgMail=require('@sendgrid/mail')

const sendEmail=async(req,res)=>{
    let testAccount=await nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    });
    let info=await transporter.sendMail({
        from:'islam <islamfathihegazy04@gmail.com>',
        to:'bar@example',
        subject:'hello',
        html:'<h2>Sending Emails with Node.js</h2>'
    })
    res.json(info)
}
const sendEmailsg=(req,res)=>{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'islamfathialwakeel@gmail.com', // Change to your recipient
        from: 'islamfathihegazy04@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      const info=sgMail.send(msg)
      res.json(info)
}
module.exports=sendEmailsg;