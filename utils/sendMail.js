const nodemailer = require("nodemailer");

// Updated Transporter Configuration
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // Use Port 465 for Secure SSL connection
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});

module.exports.sendOTP = async (toEmail, otp) => {
    // Debugging: Check if Env vars are loaded (Don't log the password!)
    if (!process.env.EMAIL || !process.env.EMAIL_PASS) {
        throw new Error("EMAIL or EMAIL_PASS environment variables are missing!");
    }

    await transporter.sendMail({
        from: `"WanderLust Support" <${process.env.EMAIL}>`, // Thoda professional naam add kiya
        to: toEmail,
        subject: "Verify Your Email Address - WanderLust",
        text: `
            Welcome to WanderLust 👋

            Your One-Time Password (OTP) is:

            👉 ${otp}

            This OTP is valid for the next 10 minutes.
            Please do not share this code with anyone.

            If you did not create this account, you can safely ignore this email.

            Thanks,
            Team WanderLust
        `,
        // HTML body bhi add kar sakte ho agar chaho, par text is fine for now
    });
};