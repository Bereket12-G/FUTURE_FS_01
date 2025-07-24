require('dotenv').config(); // MUST BE AT THE TOP to load environment variables first
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // Server will run on port 5000 by default or an environment variable

// --- Middleware ---
// CORS configuration: Important for allowing your frontend (which might be on a different domain/port)
// to make requests to this backend. Replace with your actual frontend URL in production.
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Example: your React app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow cookies to be sent (if you were using sessions, not strictly needed for contact form)
}));
app.use(express.json()); // Parses incoming requests with JSON payloads (e.g., from your React form)

// --- Nodemailer Transporter Setup ---
// This is your email sender configuration.
// It tells Nodemailer how to connect to your email service (e.g., Gmail, Outlook).
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Or 'Outlook365', 'SendGrid', 'SMTP' for custom servers
    auth: {
        user: process.env.EMAIL_USER, // Your sender email address (e.g., your_portfolio_email@gmail.com)
        pass: process.env.EMAIL_PASS // Your email password or, preferably, an App Password for Gmail
    }
});

// --- API Endpoint for Contact Form ---
// This is the route your frontend will make a POST request to.
app.post('/api/contact', async (req, res) => {
    // Extract data sent from the frontend form
    const { name, email, message } = req.body;

    // --- Basic Server-Side Validation ---
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // --- Email Content Configuration ---
    // Defines who the email is from, who it's going to, subject, and body.
    const mailOptions = {
        from: process.env.EMAIL_USER, // The email address sending the message
        to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // Your personal email to receive messages
        subject: `New Contact Form Message from ${name} (Portfolio)`,
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };

    // --- Send Email ---
    try {
        await transporter.sendMail(mailOptions);
        // If successful, send a 200 OK response to the frontend
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error); // Log the error on the server side
        // If there's an error, send a 500 Internal Server Error response
        res.status(500).json({ message: 'Failed to send message. Please try again later.' });
    }
});

// --- Start the Server ---
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
