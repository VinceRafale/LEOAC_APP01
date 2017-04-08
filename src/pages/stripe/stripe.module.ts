import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { StripePage } from './stripe.page';
import { StripeService } from './stripe.service';


@NgModule({
	imports: [IonicModule],
	declarations: [
		StripePage
	],
	entryComponents: [
		StripePage
	],
	providers: [StripeService]
})
export class StripeModule {

}