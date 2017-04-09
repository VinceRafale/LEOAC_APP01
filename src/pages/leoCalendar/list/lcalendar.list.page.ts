import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { lCalendarService } from '../lcalendar.service';
import { lCalendar } from '../models/lcalendar.model';
import { NewsItemPage } from '../item/lcalendar.item.page';

@Component({
	templateUrl: './lcalendar.list.html'
})
export class lCalendarListPage implements OnInit {
	private service: lCalendarService;
	private nav: NavController;

	public posts: lCalendar[];

	constructor(service: lCalendarService, nav: NavController) {
		this.service = service;
		this.nav = nav;
	}

	ngOnInit(): void {
		this.service.getPosts()
			.subscribe(posts => {
				this.posts = posts;
			});
	}

	public itemTapped(item) {
		this.nav.push(NewsItemPage, {
			item: item
		});
	}
}
