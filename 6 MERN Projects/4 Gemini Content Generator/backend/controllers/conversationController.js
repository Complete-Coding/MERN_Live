const Conversation = require("../models/Conversation");
const { generateContent } = require("../service/geminiService");

exports.newConversation = async (req, res, next) => {
  const { prompt, model } = req.body;
  const content = await generateContent(prompt, model);
  const conversation = new Conversation({
    title: prompt,
    model: model,
    messages: [{role: "user", content: prompt}, {role: "assistant", content: content}]
  });
  await conversation.save();
  res.json(conversation);
}

exports.newMessage = async (req, res, next) => {
  const { id } = req.params;
  const { prompt } = req.body;
  const conversation = await Conversation.findById(id);
  if (!conversation) {
    res.status(404).json({message: "Conversation not found"});
  }

  const content = await generateContent(prompt, conversation.model, conversation.messages);
  conversation.messages.push({role: "user", content: prompt});
  conversation.messages.push({role: "assistant", content: content});
  await conversation.save();
  res.json(conversation);
}