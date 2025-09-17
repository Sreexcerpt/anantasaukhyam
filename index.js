
const expressAsyncHandler = require('express-async-handler');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');


// Importing all the routes
// const homeroute = require("./routes/ContactForm.js")
// const contactroute = require("./routes/ContactUs.js")

const app = express()
app.use(cors())

// const methodNotAllowed = (req, res, next) => res.status(405).send();

// router
// .route(`/api/contact`)
// .post(homeroute)
// .all(methodNotAllowed);

// app.use(homeroute);

// router
// .route(`/api/contactuspage`)
// .post(contactroute)
// .all(methodNotAllowed);

// // Handling routes request
// app.use("/api/", homeroute)
// app.use("/", contactroute)



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



const contactEmail = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port:587,
  auth: {
    user: 'anantasaukhyam@gmail.com',
    pass: 'ktwk edwu ehpv agxq'
    // user: "kavanajs123456@gmail.com",
  
    // pass: "xeml hnbg jxeb xkyi",
  },
});





contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});



app.get("/send-email", function (req, res) {
  const mailOptions = {
    from: gmailEmail,
    to: 'anantasaukhyam@gmail.com', // Replace with the recipient's email
    subject: 'Test Email',
    text: 'This is a test email from your Node.js app using Gmail SMTP.'
  };

  contactEmail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error('Email sending error:', error);
      res.status(500).json({ status: 'ERROR' });
    } else {
      console.log('Email sent successfully!');
      res.json({ status: 'Message Sent' });
    }
  })})
// app.listen(4001, () => {
//   console.log("Server is running on port 4001");
//}
// );




app.post("/api/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const course =req.body.course;
    const message = req.body.message;
    //console.log(req.body);
    console.log(phone);
    const mail = {
      from: name,
      to: "anantasaukhyam@gmail.com",
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






app.post("/api/blogpage", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const website = req.body.website;
    
    const message = req.body.message;
    //console.log(req.body);
    // console.log(phone);
    const mail = {
      from: name,
      to: "anantasaukhyam@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>website: ${website}</p>
             
             <p>Message: ${message}</p>`,
    };
    
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.log('error');
        res.json({ status: "ERROR" });
      } else {
        console.log('blog comments sent successful');
        res.header("Access-Control-Allow-Origin");
        res.json({ status: "Message Sent" });
       res.end();
      }
    });
  });


  app.post(`/api/contactuspage`,expressAsyncHandler (async(req, res) => {
    const name = req.body.name;
   // const lname = ' ' + req.body.lname;
    const email = req.body.email;
    const subject = req.body.subject; 
    const mobileNumber = req.body.mobileNumber; 
   
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "anantasaukhyam@gmail.com",
      subject: "Ananta Saukyam Contact US Form Submission",
      html: `<p>Name: ${name} </p>
             <p>Subject: ${subject}</p>
             <p>Mobilenumber: ${mobileNumber}</p>
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
       res.end();
      }
    });
  }));



  app.post("/api/testiMonialspage", (req, res) => {
   
    const fname = req.body. firstName;
    const sname = req.body. secondName;
    const phone = req.body. mobilenumber;
    const email = req.body.email;
    const gender = req.body.gender;
    const age= req.body.age;
    const service = req.body.service;
   const complaints = ' ' + req.body.complaints;
  
   
   
    
   
    const mail = {
      from: fnamesname,
      to: "anantasaukhyam@gmail.com",
      subject: "AnantaSaukyam appointment  Form Submission",
      html: `<p>Name: ${fname} ${sname}</p>
             <p>Mobilenumber: ${phone}</p>
             <p>Email: ${email}</p>
              <p>Gender: ${gender}</p>
               <p>Age: ${age}</p>
                <p>Complaints: ${complaints}</p>
            
             <p>service: ${service}</p>`

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


  app.post("/api/inquiry", (req, res) => {
    const name = req.body.name;
   // const lname = ' ' + req.body.lname;
    
    const mobilenumber = req.body.mobilenumber; 
    const email = req.body.email;
    const service = req.body.service;
     
    const query = req.body.query;
    const mail = {
      from: name,
      to: "anantasaukhyam@gmail.com",
      subject: "inquiry",
      html: `<p>Name: ${name} </p>
             <p>Mobilenumber: ${mobilenumber}</p>
             <p>email: ${email}</p>
            
             <p>service: ${service}</p>
             <p>query: ${query}</p>`

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

app.use(express.static(path.join(__dirname + "/dist")))

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

const PORT = process.env.PORT || 4003
app.listen(PORT, () => console.log("Server Running"));