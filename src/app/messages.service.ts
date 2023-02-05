import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor() {}

  winner(playerName: string) {
    //this.toastr.success(`${playerName} ha completado todas sus cartas`, '', {preventDuplicates: true});
  }
  tiedGame() {
    //this.toastr.info('Todas las cartas han sido anunciadas');
  }
  wrongWinAttempt() {
    //this.toastr.warning ('Aún no se anuncian todas tus cartas');
  }
}

