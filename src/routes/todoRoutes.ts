import express from 'express';
import { TodoManager } from '../models/TodoManager';

const router = express.Router();
const todoManager = new TodoManager();

router.get('/', (req, res) => {

    const allTodos = todoManager.getTodos();
    const completedTodos = allTodos.filter(todo => todo.completed);
    console.log("completedTodos", completedTodos);
    const incompleteTodos = allTodos.filter(todo => !todo.completed);     
    res.render('index', {todos:allTodos, completedTodos, incompleteTodos});
});

router.post("/add", (req, res) => {
    const { title, description, priority } = req.body; 
    todoManager.addTodo(title, description, priority ? Number(priority) : undefined);
    res.redirect("/");
});

router.post("/complete/:id", (req, res) => {
    const todoId = Number(req.params.id);
    console.log("todoId", todoId)
    console.log("todoId", todoId);
    const success = todoManager.makeTodoAsCompleted(todoId);
    console.log("success", success);
    if (!success) {
        res.status(404).send("Todo not found");
    } else {
        res.redirect("/");
    }
});

router.post("/delete/:id", (req, res) => {
    const todoId = Number(req.params.id);
    const success = todoManager.deleteTodo(todoId);
    if (!success) {
        res.status(404).send("Todo not found");
    } else {
        res.redirect("/");
    }
});

export default router;
