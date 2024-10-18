const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Change to your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Nodemailer configuration with hardcoded credentials
const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'krupalsavaliya0pvt@gmail.com', // Your Gmail address
    pass: 'akqeyjfmcrdtvdre', // Your Gmail App Password
  },
});

// Verify email transport
contactEmail.verify((error) => {
  if (error) {
    console.error("Error in email setup: ", error);
  } else {
    console.log("Ready to send emails");
  }
});

app.get("/",(req,res)=>{
  console.log("hello")
})
// Endpoint to handle contact form submissions
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  // Validate input
  if (!firstName || !lastName || !email || !message || !phone) {
    return res.status(400).json({ code: 400, status: "Missing required fields" });
  }

  const name = `${firstName} ${lastName}`;

  const mail = {
    from: 'moharanapritam585@gmail.com', // Sender's email
    to: 'krupalsavaliya0@gmail.com', // Recipient's email
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send the email
  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ code: 500, status: "Failed to send message", error: error.message });
    }
    console.log('Email sent successfully:', info.response);
    res.status(200).json({ code: 200, status: "Message Sent" });
  });
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
