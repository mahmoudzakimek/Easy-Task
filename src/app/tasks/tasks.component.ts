import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-data/Dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTask, task } from '../modals/task.modal';
import { TasksService } from './service/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  name = input.required();
  userid = input.required<string>();
  addTask = signal<boolean>(false);

  private _taskService = inject(TasksService);

  tasks = this._taskService.tasks;

  useresTasks = computed(() =>
    this.tasks().filter((x) => x.userId == this.userid())
  );

  onCloseDialog() {
    this.addTask.set(false);
    this.useresTasks = computed(() =>
      this.tasks().filter((x) => x.userId == this.userid())
    );
  }

  addNewTask() {
    this.addTask.set(true);
  }
}
