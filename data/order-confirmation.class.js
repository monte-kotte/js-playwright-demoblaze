export class OrderConfirmation {
    constructor(amount, cardNumber, name) {
        this.amount = amount;
        this.cardNumber = cardNumber;
        this.name = name;
    }

    static fromConfirmationText(text) {
        const match = text.match(/Id:.+?Amount: (\d+).+?Card Number: (\d+).+?Name: (.+)/s);
        if (!match) {
            console.log('Confirmation text:', text);
            throw new Error('Confirmation message format not recognized');
        }

        return new OrderConfirmation(
            parseInt(match[1]),
            match[2],
            match[3].trim()
        );
    }

    validate(expectedAmount) {
        if (this.amount !== expectedAmount) {
            throw new Error(`Expected amount ${expectedAmount}, but got ${this.amount}`);
        }
        if (!this.cardNumber.match(/\d{4,}/)) {
            throw new Error('Card number should contain at least 4 digits');
        }
        if (!this.name) {
            throw new Error('Name should not be empty');
        }
    }
}