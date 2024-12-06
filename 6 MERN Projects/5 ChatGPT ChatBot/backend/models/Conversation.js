import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
  title : {type: String, required: true},
  model: {type: String, required: true},
  startTime: {type: Date, required: true, default: Date.now},
  messages: [{
    role: {type: String, required: true},
    content: {type: String, required: true}
  }]
});

export default mongoose.model("Conversation", conversationSchema);