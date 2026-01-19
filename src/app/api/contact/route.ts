import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, company } = await req.json();
  
    // Honeypot check
    if (company) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    // Transporter setup (example: Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL_USER, // your Gmail
        pass: process.env.CONTACT_EMAIL_PASS, // app password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.CONTACT_EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL_RECEIVER, // your inbox
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
    });
  }
}