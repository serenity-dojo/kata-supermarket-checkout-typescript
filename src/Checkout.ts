import { Product } from './Product';
import { Receipt } from './Receipt';
import { ProductCatalogue } from './ProductCatalogue';

export class Checkout {

    constructor(
        private readonly catalogue: ProductCatalogue,
    ) {
    }

    scan(products: Product[]): Receipt {
        const receipt = new Receipt();

        // todo: calculate the prices, produce a receipt

        return receipt;
    }
}
