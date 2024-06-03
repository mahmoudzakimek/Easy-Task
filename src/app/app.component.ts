import { Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMY_USERS } from './dummy-data/Dummy-user';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {

  userList = DUMY_USERS
  chosenName = signal<string>('')
  userId = signal<any>('')

  selectId(id: string) {
    debugger
    console.log('the id is going to be ..........', id);
    const name = DUMY_USERS.filter(elem => elem.id == id)[0].name
    const userId = DUMY_USERS.filter(elem => elem.id == id)[0].id
    this.chosenName.set(name as string)
    this.userId.set(userId as string)


  }
}
