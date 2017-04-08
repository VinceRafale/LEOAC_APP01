import { data } from './home-data';

describe('Home data', () => {
	it('should contain valid data for the home page', () => {
		expect(data.facebook).toBe('https://www.facebook.com/ionicframework');
	});
});