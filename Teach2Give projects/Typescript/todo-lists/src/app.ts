interface Task {
    id: number;
    text: string;
    completed: boolean;
}

class ToDoList {
    private tasks: Task[] = [];
    private taskIdCounter: number = 0;

    constructor() {
        this.loadTasks();
        this.renderTasks();
        this.attachEventListeners();
    }

    private attachEventListeners(): void {
        const addTaskButton = document.getElementById('add-task') as HTMLButtonElement;
        const newTaskInput = document.getElementById('new-task') as HTMLInputElement;

        addTaskButton.addEventListener('click', () => {
            const taskText = newTaskInput.value.trim();
            if (taskText) {
                this.addTask(taskText);
                newTaskInput.value = '';
            }

            
        });

        document.getElementById('task-list')?.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            const taskId = Number(target.getAttribute('data-id'));
            
            if (target.classList.contains('task-checkbox')) {
                this.toggleTaskCompletion(taskId);
            } else if (target.classList.contains('task-delete')) {
                this.deleteTask(taskId);
            }
        });
    }

    private addTask(text: string): void {
        const newTask: Task = {
            id: this.taskIdCounter++,
            text,
            completed: false
        };
        this.tasks.push(newTask);
        this.saveTasks();
        this.renderTasks();
    }

    private toggleTaskCompletion(id: number): void {
        for (const task of this.tasks) {
            if (task.id === id) {
                task.completed = !task.completed;
                this.saveTasks();
                this.renderTasks();
                break;
            }
        }
    }
    

    private deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.renderTasks();
    }

    private saveTasks(): void {
        try {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        } catch (error) {
            console.error('Failed to save tasks:', error);
        }
    }

    private loadTasks(): void {
        try {
            const tasks = localStorage.getItem('tasks');
            if (tasks) {
                this.tasks = JSON.parse(tasks);
                this.taskIdCounter = this.tasks.length > 0
                    ? Math.max(...this.tasks.map(task => task.id)) + 1
                    : 0;
            }
        } catch (error) {
            console.error('Failed to load tasks:', error);
        }
    }

    private renderTasks(): void {
        const taskList = document.getElementById('task-list') as HTMLUListElement;
        taskList.innerHTML = '';

        this.tasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''}>
                ${task.text}
                <button class="task-delete" data-id="${task.id}">Delete</button>
            `;
            taskList.appendChild(listItem);
        });
    }
}

// Initialize the ToDoList application
new ToDoList();
