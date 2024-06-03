import { Injectable, computed, signal } from '@angular/core';
import { dummyTasks } from '../../dummy-data/Dummy-tasks';
import { newTask } from '../../modals/task.modal';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks = signal(dummyTasks)

  useresTasks = signal<any>('')

  constructor() {
    const tasks = localStorage.getItem('tasks')
    if (tasks) {
      this.tasks.set(JSON.parse(tasks))
    }
  }


  addTask(obj: newTask, userid: string) {
    const newTask = {
      id: new Date().getTime().toString(),
      userId: userid,
      title: obj.title,
      summary: obj.summary,
      dueDate: obj.date
    }
    this.tasks().unshift(newTask)
    this.saveTasks()



  }

  removeTask(id: string) {
    this.tasks.set(this.tasks().filter((x) => x.id !== id));
    this.saveTasks()
  }
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()))

  }
}
