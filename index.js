const express = require('express');

const app = express();
let tasks = [];
let nextId = 1;

app.use(express.json());


// Get Request
app.get('/tasks', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const task = tasks.slice(startIndex, endIndex);

    res.status(200).json(task);
});


// Post Request
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ Error: 'Title and Description both are required.' })
    }

    const newTasks = {
        id: nextId++,
        title,
        description,
    };

    tasks.push(newTasks);

    res.status(201).json(newTasks);
})


// Get request by ID
app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);

    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({ error: "Task not found!" })
    }

    res.status(200).json(task);
})


// PUT request by ID
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description } = req.body;

    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({ Error: 'Task not found!' });
    }

    if (!task || !description) {
        return res.status(400).json({ Error: 'Task and description both are required.' })
    }

    task.title = title;
    task.description = description;

    res.status(200).json(task);
})


// DELETE request by Id
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);

    const index = tasks.findIndex(t => t.id === taskId);

    if (index === -1) {
        return res.status(404).json({ Error: "task not found" })
    }

    tasks.splice(index, 1)

    res.status(200).json("Task is deleted successfully..")
})


const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
})