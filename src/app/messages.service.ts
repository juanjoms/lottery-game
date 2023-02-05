import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private toastr: ToastrService) {}

  winner(playerName: string) {
    this.toastr.success(`${playerName} ha completado todas sus cartas`);
  }
  tiedGame() {
    this.toastr.info('Todas las cartas han sido anunciadas');
  }
  wrongWinAttempt() {
    this.toastr.warning ('Aún no se anuncian todas tus cartas');
  }
}

