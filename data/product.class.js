export class Product {
    constructor(id, title, price, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
    }

    get numericPrice() {
        // Convert price from format '$XXX' to number
        return parseInt(this.price.replace('$', ''));
    }
}