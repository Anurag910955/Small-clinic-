const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const chatWithAI = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });

    const aiResponse = chatCompletion.choices[0].message.content;
    res.status(200).json({ response: aiResponse });
  } catch (error) {
    console.error("AI error:", error.message);
    res.status(500).json({ error: "Failed to get AI response" });
  }
};

module.exports = { chatWithAI };
