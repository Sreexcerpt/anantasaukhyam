var bodyParser = require("body-parser");
// Importing express module
const express = require("express")

const nodemailer = require("nodemailer");
  
// Creating express router
const router = express.Router()

const contactEmail = nodemailer.createTransport({
    host: "mail5017.site4now.net",
    //host: "https://mail5010.site4now.net", 
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'info@excerptech.COM',
      pass: 'Excerpt#2023'
      // user: 'info@itdeskmahadevpura.com',
      // pass: 'Excerpt#2023'
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  
  
  router.post("/api/contactuspage", (req, res,next) => {
    const fname = req.body.fname;
    const lname = ' ' + req.body.lname;
    const subject = req.body.subject; 
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: fname,
      to: "info@excerptech.com",
      subject: "IT Desk Contact US Form Submission",
      html: `<p>Name: ${fname} ${lname}</p>
             <p>Subject: ${subject}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.log('error');
        res.json({ status: "ERROR" });
      } else {
        console.log('Successful');
        res.json({ status: "Message Sent" });
       //res.end();
      }
    });
  });
  
// Exporting router
module.exports = router