import { Component } from '@angular/core';
import { Card } from './models/card';
import { StripeService } from './stripe.service';

@Component({
	templateUrl: 'stripe.html'
})
export class StripePage {
	types: string[] = ['Visa', 'American Express', 'MasterCard'];
	months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	years: number[] = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2025];
	card: Card;

	private stripeService: StripeService;

	constructor(stripeService: StripeService) {
		this.card = {
			cardType: this.types[0],
			holder: 'John Doe',
			amount: '1000',
			number: '4111111111111111',
			cvc: '123',
			exp_month: 1,
			exp_year: 2020
		};
		this.stripeService = stripeService;
	}

	makeStripePayment() {
		this.stripeService.makePayment(this.card, 'Barebone Ionic stripe integration test')
			.then(
				response => alert('The payment has been made. Status = ' + response.status),
				response => alert(response)
			);
	}
}
