import { Component, inject, input, output } from '@angular/core';
import { task } from '../../modals/task.modal';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../service/tasks.service';




@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe]
})
export class TaskComponent {


  private _taskService = inject(TasksService)
  task = input.required<task>()
  complete = output<string>()

  onComplete() {
    this._taskService.removeTask(this.task().id)
  }
}
