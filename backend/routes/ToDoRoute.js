const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo} = require("../controllers/ToDoController");

const router = Router();

router.get('/', getToDo); // Correctly references the controller function
router.post('/save', saveToDo);
router.post('/update', updateToDo);
router.post('/delete', deleteToDo);

module.exports = router;
