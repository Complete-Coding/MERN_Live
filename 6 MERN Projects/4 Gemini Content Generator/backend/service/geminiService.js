const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPT = {
  role: 'system',
  content: 'Behave like a programming teacher and your answers should be simple and small'
}

const createMessageString = (messages) => {
  return messages.map(message => `${message.role}: ${message.content}`).join("\n");
}

const generateContent = async (prompt, modelName = "gemini-1.5-flash", messages = []) => {
  const newPrompt = {
    role: 'user',
    content: prompt
  }
  const finalPrompt = createMessageString([SYSTEM_PROMPT, ...messages, newPrompt]);
  console.log(finalPrompt);
  const model = genAI.getGenerativeModel({ model: modelName });
  const result = await model.generateContent(finalPrompt);
  return result.response.text();
}

module.exports = {
  generateContent
}