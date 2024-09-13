class BowlingGame {
    private rolls: number[] = [];

    roll(pins: number): void {
        this.rolls.push(pins);
    }

    score(): number {
        let score = 0;
        let rollIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(rollIndex)) {
                score += this.strikeScore(rollIndex);
                rollIndex++;
            } else if (this.isSpare(rollIndex)) {
                score += this.spareScore(rollIndex);
                rollIndex += 2;
            } else {
                score += this.frameScore(rollIndex);
                rollIndex += 2;
            }
        }

        return score;
    }

    private isStrike(rollIndex: number): boolean {
        return this.rolls[rollIndex] === 10;
    }

    private isSpare(rollIndex: number): boolean {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }

    private strikeScore(rollIndex: number): number {
        return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }

    private spareScore(rollIndex: number): number {
        return 10 + this.rolls[rollIndex + 2];
    }

    private frameScore(rollIndex: number): number {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }
}

// Test case
function runTest(rolls: number[], expectedScore: number): void {
    const game = new BowlingGame();
    rolls.forEach(pins => game.roll(pins));
    const actualScore = game.score();
    console.log(`Test ${expectedScore}: ${actualScore === expectedScore ? 'PASS' : 'FAIL'}`);
}

// Perfect game
runTest(Array(12).fill(10), 300);

// All nines
runTest(Array(10).fill(9, 0).flatMap(n => [n, 0]), 90);

// All spares
runTest(Array(21).fill(5), 150);