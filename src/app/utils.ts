export class Utils {
  static readonly TOTAL_CARDS = 8;
  static readonly REPEATED_CARDS = 21;

  static getRandNonRepeatedCard(currentCards: {[index: number]: boolean}) {
    let rand: number
    do {
      rand = this.getRand(this.TOTAL_CARDS);
    } while (currentCards[rand]);
    return rand;
  }

  static generateLotteryId() {
    return `${this.getRand(1000)}`;
  }

  static getRand(limit: number) {
    return Math.floor((Math.random() * limit));
  }
}
