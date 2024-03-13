(function(){
    const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Route to send verification code
app.post('/sendVerificationCode', (req, res) => {
    const { email } = req.body;

    // Send email
    sendEmail(email)
        .then(() => {
            res.status(200).json({ message: 'Verification code sent successfully' });
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send verification code' });
        });
});

// Function to send email
async function sendEmail(email) {
    // Create a nodemailer transporter
    let transporter = nodemailer.createTransport({
        // Your email sending configuration (e.g., SMTP)
    });

    // Send mail with defined transport object
    await transporter.sendMail({
        from: '"aritro" <akajerkukajer@gmail.com>',
        to: email,
        subject: 'Verification Code',
        text: 'Your verification code: 87634', 
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

})();