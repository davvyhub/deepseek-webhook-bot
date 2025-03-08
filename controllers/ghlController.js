const deepseekController = require('./deepseekController');
const ghlService = require('../services/ghlService');

exports.handleWebhook = async (req, res) => {
    try {
        const { message, user } = req.body; // Extract message and user details from GHL

        if (!message || !user) {
            return res.status(400).json({ error: "Missing message or user data" });
        }

        console.log(`Received message from ${user.name}: ${message}`);

        // Send message to DeepSeek AI for response
        const aiResponse = await deepseekController.getDeepSeekResponse(message);

        // Send AI response back to GHL
        await ghlService.sendMessageToGHL(user.id, aiResponse);

        res.status(200).json({ success: true, response: aiResponse });
    } catch (error) {
        console.error("Error handling webhook:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
