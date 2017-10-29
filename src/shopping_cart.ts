import { Product } from './product';

export class ShoppingCart {
    private products: Product[] = [];

    add = (product: Product[]): ShoppingCart => (this.products.push(product), this);
}
