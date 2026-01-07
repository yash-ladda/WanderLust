const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});

module.exports.sendOTP = async (toEmail, otp) => {
    await transporter.sendMail({
        from: process.env.EMAIL,
        to: toEmail,
        subject: "Verify Your Email Address",
        text: `
            Welcome to WanderLust 👋

            Your One-Time Password (OTP) is:

            👉 ${otp}

            This OTP is valid for the next 10 minutes.
            Please do not share this code with anyone.

            If you did not create this account, you can safely ignore this email.

            Thanks,
            Team WanderLust
`
    })
}