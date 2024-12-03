const TodoItem = require("../model/TodoItem");

exports.postTodoItem = async (req, res, next) => {
 try {
  console.log(req.body);
  const todoItem = new TodoItem(req.body);
  const item = await todoItem.save();
  res.json(item);
 } catch (err) {
  res.status(500).json({message: err});
 }
}

exports.getTodoItems = async (req, res, next) => {
  try {
    const items = await TodoItem.find();
    res.json(items);
  } catch (err) {
   res.status(500).json({message: err});
  }
}

exports.deleteTodoItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedItem = await TodoItem.findByIdAndDelete(id);
    res.json(deletedItem);
  } catch (err) {
   res.status(500).json({message: err});
  }
}

exports.updateTodoItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedItem = await TodoItem.findByIdAndUpdate(id, req.body, {new: true});
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({message: err});
  }
}