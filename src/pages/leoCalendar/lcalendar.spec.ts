import { lCalendarService } from './lcalendar.service';
import { Config } from '../../config';
import { TestUtils } from '../../test';
import { TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';

describe('NewsService', () => {
	beforeEach(() => TestUtils.configureIonicTestingModule([]));

	describe('getPosts()', () => {
		it('should load list of news', (done) => {
			// Arrange
			let http = TestBed.get(Http);
			let service = new lCalendarService(http, new Config());

			// Act
			let news$ = service.getPosts();

			// Assert
			news$.subscribe(items => {
				expect(items.length).toBe(5);
				//expect(items[0].subject).toBe('WISI CONSEQUAT SIT ZZRIL.');

				done();
			});
		});
	});
});
