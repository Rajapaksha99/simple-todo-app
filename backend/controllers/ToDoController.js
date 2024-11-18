//define how our data is saving to databse

const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async(req, res) => {
  const toDo = await ToDoModel.find()
  res.send(toDo)
}

module.exports.saveToDo = async (req,res) => {
  
  const { text } = req.body

  ToDoModel
    .create({ text })
    .then((data) => {
      console.log("Add Successfully..");
      console.log(data);
      res.send(data)
    })
}