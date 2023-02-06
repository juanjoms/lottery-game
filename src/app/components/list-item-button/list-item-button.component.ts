import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'list-item-button',
  templateUrl: './list-item-button.component.html',
  styleUrls: ['./list-item-button.component.scss']
})
export class ListItemButtonComponent {
  @Input() text: string;
  @Input() selected: boolean;
  @Output() selectItem: EventEmitter<void> = new EventEmitter();;
}

