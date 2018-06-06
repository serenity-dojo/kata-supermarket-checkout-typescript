import { expect } from './expect';
import { Checkout, Product, ProductCatalogue } from '../src';

describe('Checking out articles at the supermarket', () => {

    const
        Apples   = new Product('Apples'),
        Bananas  = new Product('Lemons'),
        Coffee   = new Product('Coffee'),
        Rice     = new Product('Rice');

    const catalogue = new ProductCatalogue();

    beforeEach(() => {
        catalogue.setPriceOf(Apples,  2.00);
        catalogue.setPriceOf(Bananas, 1.50);
        catalogue.setPriceOf(Rice,    2.70);
        catalogue.setPriceOf(Coffee,  4.50);
    });

    afterEach(() => catalogue.reset());

    describe(`The receipt`, () => {

        it(`should show the total price of £0 when the shopping cart is empty`, () => {
            const checkout = new Checkout(catalogue);

            const receipt = checkout.scan([
                /* no products in the basket */
            ]);

            expect(receipt.totalPrice()).to.equal(0);
        });

        describe(`with no special offers`, () => {

            it(`should show the total price equal to the total price of individual items`, () => {
                const checkout = new Checkout(catalogue);

                const receipt = checkout.scan([
                    Apples,
                ]);

                expect(receipt.totalPrice()).to.equal(2.00);
            });

            it(`should show the quantity and a total price per product type`, () => {
                const checkout = new Checkout(catalogue);

                const receipt = checkout.scan([
                    Apples,
                    Apples,
                ]);

                const lineItem = receipt.lineItems[0];

                expect(lineItem).to.not.be.undefined;

                expect(lineItem.product.name).to.equal(Apples.name);
                expect(lineItem.quantity).to.equal(2);
                expect(lineItem.totalPrice).to.equal(2 * 2.00);
            })
        });

        describe(`with "fixed discount" offer`, () => {

        });

        describe(`with "Buy 2 get 1 free" offer`, () => {

        });

        describe(`with "Buy 4 get 1 free" offer`, () => {

        });

        describe(`with "10% discount" offer`, () => {

        });

        describe(`with "20% discount when you buy more than 10" offer`, () => {

        });
    });
});
