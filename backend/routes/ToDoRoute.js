const { Router } = require("express");
const { getToDo, saveToDo } = require("../controllers/ToDoController");

const router = Router();

router.get('/', getToDo); // Correctly references the controller function
router.post('/save', saveToDo); // Correctly references the controller function

module.exports = router;
