import { Component, OnInit } from '@angular/core';
import { LotteryService } from '../lottery.service';
import { LotteryGame } from '../models/lottery.model';
import { Utils } from '../utils';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isCantorPlayer: boolean;
  isRegularPlayer: boolean;
  isCantorFormSubmitted: boolean;
  isRegularFormSubmitted: boolean;
  gameName: string;
  cantorName: string;
  playerName: string;
  lotteryList: LotteryGame[];
  activeGameIndex: number = -1;

  constructor(private lotteryService: LotteryService, private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.lotteryService.getLotteryGameList().subscribe((lotteryList: LotteryGame[]) => {
      this.lotteryList = lotteryList;
    })
  }

  showCantorPlayerForm() {
    this.isCantorPlayer = true;
    this.isRegularPlayer = false;
  }

  showRegularPlayerForm() {
    this.isRegularPlayer = true;
    this.isCantorPlayer = false;
  }

  createGame() {
    this.isCantorFormSubmitted = true;
    if (!this.gameName || !this.cantorName) {
      return;
    }
    const lotteryId = Utils.generateLotteryId();
    const game: LotteryGame = {
      id: lotteryId,
      name: this.gameName || lotteryId,
      created: new Date().getTime()
    }
    this.lotteryService.createLotteryGame(game);
    this.playerService.savePlayer(this.cantorName, true);
    this.router.navigate(['/juego', lotteryId])
  }

  selectGame(index: number) {
    this.activeGameIndex = index;
  }

  joinGame() {
    this.isRegularFormSubmitted = true;
    if (this.activeGameIndex === -1 || !this.playerName) {
      return;
    }
    this.playerService.savePlayer(this.playerName, false);
    const lottery = this.lotteryList[this.activeGameIndex];
    this.router.navigate([`/juego/${lottery.id}`])
  }
}
