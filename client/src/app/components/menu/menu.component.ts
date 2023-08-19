import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output() toggleEdit = new EventEmitter<void>();

  toggleEditMode() {
    this.toggleEdit.emit();
  }
}
