import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent {
  @Input() cards: Card[];
  @Output() select: EventEmitter<number> = new EventEmitter();

  onSelect(cardIndex: number) {
    this.select.emit(cardIndex);
  }
}
