import express from "express";
import Task from "../models/task.js";

const router = express.Router();



router.get('/', async (req, res) => {

    const tasks = await Task.find();
    res.json(tasks);

});


router.post('/', async (req, res) => {
    const task = new Task(req.body);
    console.log(task);
    await task.save();
    res.json({
        status: 'Task saved'
    });
});


router.put('/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Task updated'
    })
})

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        status: 'Task deleted'
    });
});



export default router;