import OpenAI from "openai";

const SYSTEM_PROMPT = {
  role: 'system',
  content: 'Behave like a programming teacher and your answers should be simple and small'
}

const TITLE_PROMPT = {
  role: 'system',
  content: 'Generate a title for the conversation in no more than 4 words'
}

let openai;

export const initAIAssistant = async (cb) => {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
  cb();
}

export const generateContent = async (prompt, modelName, messages = []) => {
  const newPrompt = {
    role: 'user',
    content: prompt
  }
  const completion = await openai.chat.completions.create({
    model: modelName,
    messages: [SYSTEM_PROMPT, ...messages, newPrompt]
  });

  return completion.choices[0].message.content;
}

export const generateTitle = async (messages) => {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [TITLE_PROMPT, ...messages]
  });
  return completion.choices[0].message.content;
}