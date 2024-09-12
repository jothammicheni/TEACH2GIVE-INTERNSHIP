var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.tasks = [];
        this.taskIdCounter = 0;
        this.loadTasks();
        this.renderTasks();
        this.attachEventListeners();
    }
    ToDoList.prototype.attachEventListeners = function () {
        var _this = this;
        var _a;
        var addTaskButton = document.getElementById('add-task');
        var newTaskInput = document.getElementById('new-task');
        addTaskButton.addEventListener('click', function () {
            var taskText = newTaskInput.value.trim();
            if (taskText) {
                _this.addTask(taskText);
                newTaskInput.value = '';
            }
            alert(44444);
        });
        (_a = document.getElementById('task-list')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
            var target = event.target;
            var taskId = Number(target.getAttribute('data-id'));
            if (target.classList.contains('task-checkbox')) {
                _this.toggleTaskCompletion(taskId);
            }
            else if (target.classList.contains('task-delete')) {
                _this.deleteTask(taskId);
            }
        });
    };
    ToDoList.prototype.addTask = function (text) {
        var newTask = {
            id: this.taskIdCounter++,
            text: text,
            completed: false
        };
        this.tasks.push(newTask);
        this.saveTasks();
        this.renderTasks();
    };
    ToDoList.prototype.toggleTaskCompletion = function (id) {
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var task = _a[_i];
            if (task.id === id) {
                task.completed = !task.completed;
                this.saveTasks();
                this.renderTasks();
                break;
            }
        }
    };
    ToDoList.prototype.deleteTask = function (id) {
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
        this.saveTasks();
        this.renderTasks();
    };
    ToDoList.prototype.saveTasks = function () {
        try {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
        catch (error) {
            console.error('Failed to save tasks:', error);
        }
    };
    ToDoList.prototype.loadTasks = function () {
        try {
            var tasks = localStorage.getItem('tasks');
            if (tasks) {
                this.tasks = JSON.parse(tasks);
                this.taskIdCounter = this.tasks.length > 0
                    ? Math.max.apply(Math, this.tasks.map(function (task) { return task.id; })) + 1
                    : 0;
            }
        }
        catch (error) {
            console.error('Failed to load tasks:', error);
        }
    };
    ToDoList.prototype.renderTasks = function () {
        var taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        this.tasks.forEach(function (task) {
            var listItem = document.createElement('li');
            listItem.innerHTML = "\n                <input type=\"checkbox\" class=\"task-checkbox\" data-id=\"".concat(task.id, "\" ").concat(task.completed ? 'checked' : '', ">\n                ").concat(task.text, "\n                <button class=\"task-delete\" data-id=\"").concat(task.id, "\">Delete</button>\n            ");
            taskList.appendChild(listItem);
        });
    };
    return ToDoList;
}());
// Initialize the ToDoList application
new ToDoList();
