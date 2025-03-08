const axios = require('axios');

exports.getDeepSeekResponse = async (userMessage) => {
    try {
        const response = await axios.post(
            `${process.env.DEEPSEEK_BASE_URL}/chat/completions`,
            {
                model: "deepseek-chat",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: userMessage }
                ],
                stream: false
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`
                }
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("Error calling DeepSeek AI:", error.response?.data || error.message);
        return "Sorry, I couldn't process your request.";
    }
};
