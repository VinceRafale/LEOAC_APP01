import { NgModule } from '@angular/core';
import { IonicModule, Platform } from 'ionic-angular';
import { GoogleAnalytics } from 'ionic-native';
import { Config } from '../../config';
import { GoogleAnalyticsPage } from './google-analytics.page';

@NgModule({
	declarations: [GoogleAnalyticsPage],
	entryComponents: [GoogleAnalyticsPage],
	imports: [IonicModule],
	providers: []
})
export class GoogleAnalyticsModule {
	constructor(platform: Platform) {
		platform.ready().then(() => {
			GoogleAnalytics.startTrackerWithId(Config.googleAnalyticsTrackedID)
				.then(() => {
					console.log('Google analytics is ready now');

					// Tracker is ready
					// You can now track pages or set additional information such as AppVersion or UserId
					GoogleAnalytics.setAppVersion(Config.googleAnalyticsAppVersion).then(x => console.log('GA: version set', x));
					GoogleAnalytics.setUserId(Config.googleAnalyticsUserID).then(x => console.log('GA: user ID set', x));
				})
				.catch(e => console.log('Error starting GoogleAnalytics', e));
		});
	}
}