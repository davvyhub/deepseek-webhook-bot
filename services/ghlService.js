const axios = require('axios');

exports.sendMessageToGHL = async (userId, message) => {
    try {
        const ghlWebhookUrl = "https://your-ghl-webhook-url.com/send"; // Replace with actual GHL webhook

        const payload = {
            userId: userId,
            message: message
        };

        const response = await axios.post(ghlWebhookUrl, payload, {
            headers: { "Content-Type": "application/json" }
        });

        console.log("Message sent to GHL:", response.data);
    } catch (error) {
        console.error("Error sending message to GHL:", error.response?.data || error.message);
    }
};
