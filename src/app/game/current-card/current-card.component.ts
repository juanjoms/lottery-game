import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'current-card',
  templateUrl: './current-card.component.html',
  styleUrls: ['./current-card.component.scss']
})
export class CurrentCardComponent {
  @Input() isCantor: boolean;
  @Input() currentCard: string;
  @Output() next: EventEmitter<void> = new EventEmitter();
  readonly CANTOR_MESSAGE: string = 'Toca aquí para iniciar juego';
  readonly PLAYER_MESSAGE: string = 'El juego está por comenzar';

  startGame() {
    this.next.emit();
  }

  onSelect() {
    if (this.isCantor) {
      this.next.emit();
    }
  }
}
