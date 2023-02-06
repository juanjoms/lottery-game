export class LotteryGame {
  id: string;
  name: string;
  created: number;
  currentCard?: string;
  winner?: string;
  gameOver?: boolean;
  restart?: boolean;
}
