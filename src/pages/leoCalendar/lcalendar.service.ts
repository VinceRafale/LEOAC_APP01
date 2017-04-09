import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';
import { lCalendar } from './models/lcalendar.model';

@Injectable()
export class lCalendarService {
	private http: Http;
	private config: Config;

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config;
	}

	public getPosts(): Observable<lCalendar[]> {
    let header = new Headers({ 'Authorization': 'Bearer NWVjNTllYTgtZWE0Yy00YTYzLWIzM2ItN2M1NWYzMzFhNWVk' });
    let options = new RequestOptions({ headers: header });
		return this.http.get(this.config.calendarUrl, options)
    .map(x => <lCalendar[]>x.json());
	}
}
