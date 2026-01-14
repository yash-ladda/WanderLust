const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com", // Brevo ka host
    port: 587,
    secure: false, // TLS ke liye false
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});

module.exports.sendOTP = async (toEmail, otp) => {
    if (!process.env.EMAIL || !process.env.EMAIL_PASS) {
        throw new Error("EMAIL or EMAIL_PASS environment variables are missing!");
    }

    await transporter.sendMail({
        from: `"WanderLust Support" <${process.env.EMAIL}>`,
        to: toEmail,
        subject: "Verify Your Email Address - WanderLust",
        html: `
            <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
                <div style="margin:50px auto;width:70%;padding:20px 0">
                    <div style="border-bottom:1px solid #eee">
                        <a href="" style="font-size:1.4em;color: #fe424d;text-decoration:none;font-weight:600">WanderLust</a>
                    </div>
                    <p style="font-size:1.1em">Hi,</p>
                    <p>Use the following OTP to complete your Sign Up procedures. OTP is valid for 10 minutes</p>
                    <h2 style="background: #fe424d;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
                    <p style="font-size:0.9em;">Regards,<br />Team WanderLust</p>
                </div>
            </div>
        `
    });
};