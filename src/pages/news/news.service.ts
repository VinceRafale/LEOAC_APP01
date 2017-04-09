import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Config } from '../../config';
import { Observable } from 'rxjs';
import { News } from './models/news.model';

@Injectable()
export class NewsService {
	private http: Http;
	private config: Config;

	constructor(http: Http, config: Config) {
		this.http = http;
		this.config = config;
	}

	public getPosts(): Observable<News[]> {
    let header = new Headers({ 'Authorization': 'Bearer NWVjNTllYTgtZWE0Yy00YTYzLWIzM2ItN2M1NWYzMzFhNWVk' });
    let options = new RequestOptions({ headers: header });
		return this.http.get(this.config.newsUrl, options)
    .map(x => <News[]>x.json());
	}
}
