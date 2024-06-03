import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from '../../modals/task.modal';
import { TasksService } from '../service/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  userId = input.required<string>()
  add = output<newTask>()
  close = output<boolean>()
  enteredTitle = signal<string>('')
  enteredSummary = signal<string>('')
  enteredDate = signal<string>('')

  private _tasksService = inject(TasksService)
  onCancel() {
    this.close.emit(false)
  }

  onSubmitForm() {
    if (this.enteredSummary() == '' || this.enteredTitle() == '' || this.enteredDate() == '') {
      alert('Please Full The Form 😊😊 ')
    } else {
      this._tasksService.addTask({
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      }, this.userId())
      this.onCancel()
    }

  }
}
