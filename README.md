# Serenity Dojo Katas

This repository contains training materials used as part of the [Serenity Dojo](http://serenity.io) mentoring programme.

## The Supermarket Checkout Kata in TypeScript

This is a variation of a popular kata described in 
http://codekata.com/kata/kata01-supermarket-pricing/. 
The aim of the exercise is to build an automated teller that can check out articles from a shopping cart. 

The supermarket has a catalogue with different types of products (rice, apples, milk, toothbrushes,...). 
Each product has a price, and the total price of the shopping cart is the total of all the prices.

But the supermarket also runs special deals, for example:
 - Buy two toothbrushes, get one free
 - 10% discount on rice
 - 20% discount on apples if you buy more than 10
 - Bags of 1 kg of oranges $4 instead of $5.

These are just examples: the actual special deals change each week, so need to be easily configurable.

### Goal

The goal of the exercise is to implement a `Teller` that can handle the following scenarios (and more - use your imagination!):

 - The teller should be able to handle a shopping cart with no special deals
 - The client should get a receipt with the list of purchases and the total price.
 - The teller should be able to handle the following special deals:
    - Buy 2 get one free
    - Buy 4 get one free
    - 10% discount on a certain product (e.g. 10% discount on 1kg packets of rice)
    - 20% discount on a certain product if you buy more than 10 (e.g 20% discount on apples for 11 or more apples)
    - Fixed discounts (e.g. bag of 1kg of oranges costs $4 instead of $5).
 - The system can be configured with multiple different special deals, 
   so the teller should be able to correctly detect and apply all the special deals applicable to a given shopping cart.
   To keep things simple you can assume that there will be up to one deal per product category.

There is a simple failing test in `spec/checking_out.spec.ts` to get you started.

### Running the tests

The tests that you'll find under `spec` directory are written using [Mocha](https://mochajs.org/) test framework 
and [Chai](http://chaijs.com/) assertion library. 
They are configured to use Chai's [`expect`](http://chaijs.com/api/bdd/) assertion style and can be executed as follows:

- to run the tests once and generate the test coverage report (`coverage/index.html`), run the following command:
```
npm test
```

- to re-run the tests automatically as soon as you save your changes, run:
```
npm run test:watch
```
