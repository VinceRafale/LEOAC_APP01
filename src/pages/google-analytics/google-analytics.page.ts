import { Component } from '@angular/core';
import { GoogleAnalytics } from 'ionic-native';
import { LoadingController } from 'ionic-angular';
import { isCordovaAvailable } from '../../services/is-cordova-available';

@Component({
	selector: 'google-analytics',
	templateUrl: 'google-analytics.page.html'
})
export class GoogleAnalyticsPage {
	exception: string = 'An error message';

	category: string = 'OCR';
	action: string = 'Parse invoice amount';
	label: string = 'Accuracy';
	value: string = '8';

	timingLabel: string = 'Loading';
	timingVariable: string = 'News';

	metricKey: string = 'Inactivity';
	metricValue: string = '50';

	constructor(private loadingCtrl: LoadingController) {
	}

	ionViewDidLoad() {
		if (!isCordovaAvailable()) {
			return false;
		}
		GoogleAnalytics.trackView('GoogleAnalyticsPage').then(x => console.log('GA: view tracked', x));
	}

	trackTiming() {
		let loading = this.loadingCtrl.create({
			content: 'Loading...'
		});
		loading.present();

		let randomInt = this.getRandomInt();
		setTimeout(() => {
			GoogleAnalytics.trackTiming('DATA_LOADING', randomInt, this.timingVariable, this.timingLabel)
				.then(x => console.log('GA: timing tracked', x));
			loading.dismiss();
		}, randomInt);
	}

	trackMetric() {
		GoogleAnalytics.trackMetric(this.metricKey, this.metricValue)
			.then(x => console.log('GA: metric tracked', x));
	}

	logException() {
		if (!this.exception) {
			alert('Exception is required');
			return;
		}

		GoogleAnalytics.trackException(this.exception, true).then(x => console.log('GA: Exception tracked', x));
	}

	logEvent() {
		if (!this.category || !this.action) {
			alert('Category and action are required');
			return;
		}

		GoogleAnalytics.trackEvent(this.category, this.action, this.label, parseInt(this.value, 10))
			.then(x => console.log('GA: Event tracked', x));
	}

	private getRandomInt(min = 1000, max = 5000) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}