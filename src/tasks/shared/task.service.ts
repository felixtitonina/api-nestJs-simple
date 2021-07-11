import { Task } from './task';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
    tasks: Task[] = [
        { id: 1, description: 'tarefA 1', complited: false },
        { id: 2, description: 'tarefA 2', complited: false },
        { id: 3, description: 'tarefA 3', complited: false },
        { id: 4, description: 'tarefA 4', complited: false },
        { id: 5, description: 'tarefA 5', complited: false },
        { id: 6, description: 'tarefA 6', complited: false },
        { id: 7, description: 'tarefA 7', complited: false },
        { id: 8, description: 'tarefA 8', complited: false },
        { id: 9, description: 'tarefA 9', complited: false },
        { id: 10, description: 'tarefA 10', complited: false },
    ]
    /**
     * Metodos CRUD
     */
    getAll() {
        return this.tasks
    }

    getById(id: number) {
        const task = this.tasks.find((value) => value.id == id)
        return task
    }

    create(task: Task) {
        let lastId = 0
        if (this.tasks.length > 0) {
            lastId = this.tasks[this.tasks.length - 1].id
        }
        task.id = lastId + 1
        this.tasks.push(task)
        return task
    }

    update(task: Task) {
        const taskArray = this.getById(task.id)
        if (taskArray) {
            taskArray.description = task.description
            taskArray.complited = task.complited
        }
        return taskArray
    }

    delete(id: number) {
        const index = this.tasks.findIndex((value) => value.id == id)
        this.tasks.splice(index, 1)
    }
}
