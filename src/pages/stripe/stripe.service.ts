import { Injectable } from '@angular/core';

@Injectable()
export class StripeService {
	makePayment(card, description): Promise<any> {
		let payment = {
			// amount is in cents so * 100
			amount: card.amount * 100,
			currency: 'usd',
			card: {
				'number': card.number,
				'exp_month': card.exp_month,
				'exp_year': card.exp_year,
				'cvc': card.cvc,
				'name': card.holder
			},
			description: description
		};

		return new Promise<any>((resolve, reject) => {
			(<any>window).stripe.charges.create(
				payment,
				response => resolve(response),
				response => reject(response)
			);
		});
	}
}