const axios = require('axios');

exports.sendMessageToGHL = async (userId, message) => {
    try {
        const ghlWebhookUrl = "https://services.leadconnectorhq.com/hooks/3twxFPtNcicszVrQsCyy/webhook-trigger/23a30530-ddcb-482d-aab2-cf4619057aab"; // Replace with actual GHL webhook

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
