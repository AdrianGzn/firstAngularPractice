import { Component, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() person = { name: '', lastName: '', age: 0 };

  @Output() messageEvent = new EventEmitter <String>();

  sendMessage() {
    this.messageEvent.emit(this.person.name);
  }
}
