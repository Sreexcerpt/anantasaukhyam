var bodyParser = require("body-parser");
// Importing express module
const express = require("express")

const nodemailer = require("nodemailer");

const app = express()
  
// Creating express router
 router = express.Router()


//app.use(cors({origin:true,credentials:true}));
app.use(express.json());
app.use("/", router);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


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

  
  router.post("/api/contact", (req, res,next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const course =req.body.course;
    const message = req.body.message;
    //console.log(req.body);
    console.log(phone);
    const mail = {
      from: name,
      to: "info@excerptech.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Course: ${course}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.log('error');
        res.json({ status: "ERROR" });
      } else {
        console.log('Successful');
        res.header("Access-Control-Allow-Origin");
        res.json({ status: "Message Sent" });
       res.end();
      }
    });
  });
  
// Exporting router
module.exports = router