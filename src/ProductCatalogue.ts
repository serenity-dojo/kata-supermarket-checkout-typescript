import { Product } from './Product';

export class ProductCatalogue {

    private readonly priceList: Map<Product, number> = new Map<Product, number>();

    setPriceOf(product: Product, price: number) {
        this.priceList.set(product, price);
    }

    getPriceOf(product: Product) {
        return this.priceList.get(product);
    }

    reset() {
        this.priceList.clear();
    }
}
