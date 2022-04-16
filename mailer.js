let nodemailer = require('nodemailer');

class mailer{
    transporter = null;
    from = ""
    mailer(){
      this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'youremail@gmail.com',
              pass: 'yourpassword'
            }
          });
    }
    mailer(service,user,password){
        this.transporter = nodemailer.createTransport({
            service: service,
            auth: {
              user: user,
              pass: password
            }
          });
    }
    sendMail(to, subject, body){ //You can set this to be asynchronous
        let mailOptions = {
            from: this.from,
            to: to,
            subject: subject,
            html: body
        }
        this.transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
            }else{
                console.log("Email sent: " + info.response);
            }
        })
    }
}

module.exports = mailer;