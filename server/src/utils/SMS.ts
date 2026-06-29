import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const sendWhatsAppMessage = async (
  phone: string,
  message: string
): Promise<void> => {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/v23.0/${process.env.PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: phone,
        type: "text",
        text: {
          body: message,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ WhatsApp message sent");
    console.log(response.data);
  } catch (error: any) {
    console.error(
      "❌ WhatsApp Error:",
      error.response?.data || error.message
    );
  }
};