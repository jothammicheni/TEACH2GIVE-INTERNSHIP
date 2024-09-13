"use strict";
class BowlingGame {
    constructor() {
        this.rolls = [];
    }
    roll(pins) {
        this.rolls.push(pins);
    }
    score() {
        let score = 0;
        let rollIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(rollIndex)) {
                score += this.strikeScore(rollIndex);
                rollIndex++;
            }
            else if (this.isSpare(rollIndex)) {
                score += this.spareScore(rollIndex);
                rollIndex += 2;
            }
            else {
                score += this.frameScore(rollIndex);
                rollIndex += 2;
            }
        }
        return score;
    }
    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10;
    }
    isSpare(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }
    strikeScore(rollIndex) {
        return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }
    spareScore(rollIndex) {
        return 10 + this.rolls[rollIndex + 2];
    }
    frameScore(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }
}
function runTest(rolls, expectedScore) {
    const game = new BowlingGame();
    rolls.forEach(pins => game.roll(pins));
    const actualScore = game.score();
    console.log(`Test ${expectedScore}: ${actualScore === expectedScore ? 'PASS' : 'FAIL'}`);
}
runTest(Array(12).fill(10), 300);
runTest(Array(10).fill(9, 0).flatMap(n => [n, 0]), 90);
runTest(Array(21).fill(5), 150);
