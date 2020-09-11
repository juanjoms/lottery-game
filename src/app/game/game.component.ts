import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from '../role.service';
import { Utils } from '../utils';
import { AngularFirestore } from '@angular/fire/firestore';
import { LotteryService } from '../lottery.service';
import { Subscription, Observable } from 'rxjs';
import { LotteryGame } from '../models/lottery.model';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  gameId: string;
  isCantor: boolean;
  currentCard: string;
  pastCards: {[index: number]: boolean} = {};
  cardsCounter: number = 0;

  subscription: Subscription;

  constructor(private lotteryService: LotteryService, private route: ActivatedRoute, private role: RoleService) { }

  ngOnInit(): void {
    this.isCantor = this.role.isCantor;
    this.gameId = this.route.snapshot.params.id;
    this.subscription = this.lotteryService.getLotteryGameUpdates(this.gameId).subscribe((lottery: LotteryGame) => {
      this.currentCard = lottery.currentCard;
    });
  }

  onNextCard() {
    if (this.cardsCounter === Utils.TOTAL_CARDS) {
      return;
    }
    let rand = Utils.getRandNonRepeatedCard(this.pastCards);
    this.pastCards[rand] = true;
    this.cardsCounter += 1;
    this.lotteryService.updateCurrentCard(this.gameId, `img${rand}.jpg`);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
