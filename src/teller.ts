import { ProductCatalogue } from './product_catalogue';
import { ShoppingCart } from './shopping_cart';
import { Receipt } from './receipt';

export class Teller {

    constructor(private readonly catalogue: ProductCatalogue) {
    }

    checkOutArticlesFrom(cart: ShoppingCart) {
        return new Receipt();
    }
}
