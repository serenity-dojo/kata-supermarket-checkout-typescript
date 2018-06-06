import { Product } from './Product';

export class Receipt {
    constructor(public readonly lineItems: LineItem[] = []) {
    }

    addLineItem(product: Product, quantity: number, totalPrice: number) {
        this.lineItems.push(new LineItem(product, quantity, totalPrice));
    }

    totalPrice() {
        return this.lineItems
            .reduce((total, li) => total + li.totalPrice, 0);
    }
}

class LineItem {
    constructor(
        public readonly product: Product,
        public readonly quantity: number,
        public readonly totalPrice: number,
    ) {
    }
}