import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() image: number;
  @Input() marked: boolean;
  @Output() select: EventEmitter<void> = new EventEmitter();
}
