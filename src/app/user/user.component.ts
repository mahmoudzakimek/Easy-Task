import { Component, computed, input, output, signal } from '@angular/core';
import { User } from '../modals/user.modal';
import { CardComponent } from "../shared/card/card.component";


// const rondomIndex = Math.floor(Math.random() * DUMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  selected = input.required<boolean>()
  user = input.required<User>()
  select = output<string>()
  imageUrl = computed(() => '../../assets/users/user.jpg')
  onSelectUser() {
    this.select.emit(this.user().id as string)
  }
}
