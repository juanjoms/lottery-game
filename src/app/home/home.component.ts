import { Component, OnInit } from '@angular/core';
import { LotteryService } from '../lottery.service';
import { LotteryGame } from '../models/lottery.model';
import { Utils } from '../utils';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showCreateGameSection: boolean;
  showJoinGameSection: boolean;
  gameName: string;
  cantorName: string;
  playerName: string;
  lotteryList: LotteryGame[];
  lotteryList$: Observable<unknown>;

  constructor(private lotteryService: LotteryService, private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.lotteryList$ = this.lotteryService.getLotteryGameList();
  }

  createGame() {
    const lotteryId = Utils.generateLotteryId();
    const game: LotteryGame = {
      id: lotteryId,
      name: this.gameName || lotteryId,
    }
    this.lotteryService.createLotteryGame(game);
    this.playerService.setCantorRole();
    this.playerService.setPlayerName(this.cantorName);
    this.router.navigate(['/juego', lotteryId])
  }

  joinGame() {
    this.playerService.setPlayerName(this.playerName);
  }
}
