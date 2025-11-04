// src/sendEmail.jsx
import emailjs from "emailjs-com";

const SERVICE_ID = "service_dfts6oy";
const TEMPLATE_ID = "template_feeqw8h";
const PUBLIC_KEY = "xpxPaKXQ6z_qbVQaZ";

export const SendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      },
      PUBLIC_KEY
    );

    console.log("Email sent successfully:", response.status, response.text);
    return { success: true };
  } catch (error) {
    console.error(" Failed to send email:", error);
    return { success: false, error };
  }
};
