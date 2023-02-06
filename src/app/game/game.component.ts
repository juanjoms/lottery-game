import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Utils } from '../utils';
import { LotteryService } from '../lottery.service';
import { Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { LotteryGame } from '../models/lottery.model';
import { Card } from '../models/card.model';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  gameId: string;
  isCantor: boolean;
  playerName: string;
  currentCard: string;
  pastCards: {[index: number]: boolean} = {};
  shuffledCards: number[];
  cards: Card[];
  cardsCounter: number = 0;
  isGameOver: boolean;

  updatesSubscription: Subscription;

  constructor(private lotteryService: LotteryService, private route: ActivatedRoute,
             private playerService: PlayerService, private messages: MessagesService, private router: Router) {}

  ngOnInit(): void {
    this.isCantor = this.playerService.isCantor;
    this.playerName = this.playerService.playerName;

    this.cards = Utils
      .generateDeck()
      .map(imageIdx => ({imageIdx, marked: false}));

    this.shuffledCards = Utils.shuffle([...Array(Utils.TOTAL_CARDS).keys()]);
    this.gameId = this.route.snapshot.params.id;
    this.updatesSubscription = this.lotteryService.getGameUpdates(this.gameId).subscribe((lottery: LotteryGame) => {
      this.currentCard = lottery.currentCard;
      this.pastCards[this.currentCard] = true;

      if (lottery.winner) {
        this.messages.winner(lottery.winner);
      }
      if (lottery.gameOver) {
        this.isGameOver = true;
        this.messages.tiedGame();
      }
      if (lottery.restart) {
        this.restartGame();
      }
    });
  }

  restartGame() {
    this.pastCards = {};
    this.cardsCounter = 0;
    this.isGameOver = false;
    this.cards.forEach(card => card.marked = false);
  }

  onNextCard() {
    if (this.cardsCounter === Utils.TOTAL_CARDS) {
      this.lotteryService.endGame(this.gameId);
      return;
    }
    const currentCard: number = this.shuffledCards[this.cardsCounter++];
    this.lotteryService.updateCurrentCard(this.gameId, `${currentCard}`);
  }

  onSelectCard(cardIndex: number) {
    this.cards[cardIndex].marked = !this.cards[cardIndex].marked;
    // All cards are marked
    if (this.cards.every(card => card.marked)) {
      //All cards were announced
      if (this.cards.every( card => this.pastCards[card.imageIdx])) {
        this.lotteryService.updateGameWinner(this.gameId, this.playerName)
      } else {
        this.messages.wrongWinAttempt();
      }
    }
  }

  onRestart() {
    this.lotteryService.restartGame(this.gameId);
  }

  goBack() {
    this.router.navigate(['/'])
  }

  ngOnDestroy() {
    this.updatesSubscription.unsubscribe();
    if (this.isCantor) {
      this.lotteryService.deleteGame(this.gameId);
    }
  }
}
