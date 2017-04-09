import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { lCalendar } from '../models/lcalendar.model';

@Component({
	templateUrl: './lcalendar.item.html'
})
export class NewsItemPage {
	post: lCalendar;

	constructor(navParams: NavParams) {
		this.post = <lCalendar>navParams.get('item');
	}
}
