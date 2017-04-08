import { Component } from '@angular/core';
import { AdMob } from 'ionic-native';
import { isCordovaAvailable } from '../../services/is-cordova-available';
import { Config } from '../../config';
import { Platform } from 'ionic-angular';

@Component({
	templateUrl: 'adMob.html'
})
export class AdMobPage {
	platform: Platform

	constructor(platform: Platform) {
		this.platform = platform;
	}

	ionViewDidEnter() {
		this.showBanner();
	}

	ionViewWillLeave() {
		AdMob.hideBanner();
	}

	showBanner() {
		if (!isCordovaAvailable()) {
			return false;
		}

		let admobid;
		if (this.platform.is('android')) {
			admobid = {
				banner: Config.androidPublisherKey
			};
		} else if (this.platform.is('ios')) {
			admobid = {
				banner: Config.iosPublisherKey
			};
		}

		AdMob.createBanner({
			adId: admobid.banner,
			position: 8, // BOTTOM_CENTER
			autoShow: true
		});
	}
}
