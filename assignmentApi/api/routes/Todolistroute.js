module.exports = function(app) {
    var todoList = require('../controller/TodoListContoller');

    //Todolist Route

    //Get all tasks
    app.route('/tasks').get(todoList.listAllTasks);

    //Create new task
    app.route('/tasks').post(todoList.createATask);

    //Get single task
    app.route('/tasks/:taskId').get(todoList.readASingleTask);

    //Edit a task
    app.route('/tasks/:taskId').put(todoList.updateATask);
    
    //Delete a task
    app.route('/tasks/:taskId').delete(todoList.deleteATask);
};