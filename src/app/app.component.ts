import { Component, ViewChild } from '@angular/core';
import { Deploy } from '@ionic/cloud-angular';
import { Platform, MenuController, App, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';


import { OAuthService } from '../pages/oauth/oauth.service';
import { HomePage } from '../pages/home/home.page';
import { NewsListPage } from '../pages/news/list/news.list.page';
import { OAuthProvidersListPage } from '../pages/oauth/list/oauth-providers.list.page';
import { OAuthProfilePage } from '../pages/oauth/profile/oauth-profile.page';
// import { DateTimePage } from '../pages/date-time/date-time.page';
import { ToastsPage } from '../pages/toasts/toasts.page';
import { VibratePage } from '../pages/vibrate/vibrate.page';
import { SpinnerDialogPage } from '../pages/spinner-dialog/spinner-dialog.page';
import { SocialSharingPage } from '../pages/social-sharing/social-sharing.page';
import { ActionsheetPage } from '../pages/actionsheet/actionsheet.page';
import { CallNumberPage } from '../pages/call-number/call-number.page';
import { ScreenOrientationPage } from '../pages/screen-orientation/screen-orientation.page';
import { LocalNotificationsPage } from '../pages/local-notifications/local-notifications.page';
import { DeviceMotionPage } from '../pages/device-motion/device-motion.page';
import { CalendarPage } from '../pages/calendar/calendar.page';
import { lCalendarListPage } from '../pages/leoCalendar/list/lcalendar.list.page';
import { DevicePage } from '../pages/device/device.page';
import { ShakePage } from '../pages/shake/shake.page';
import { PushPage } from '../pages/push/push.page';
import { ComponentsListPage } from '../pages/components/list/components.list.page';
import { LaunchNavigatorPage } from '../pages/launch-navigator/launch-navigator.page';
// import { PositionPage } from '../pages/position/position.page';
// import { GoogleMapsPage } from '../pages/google-maps/google-maps.page';
// import { FabToolbarPage } from '../pages/fab-toolbar/fab-toolbar.page';
import { I18nPage } from '../pages/i18n-capabilities/i18n.page';
// import { LayoutsListPage } from '../pages/layouts/list/layouts.list.page';
import { GooglePlaceAutocompletePage } from '../pages/google-place-autocomplete/google-place-autocomplete.page';
import { GoogleAnalyticsPage } from '../pages/google-analytics/google-analytics.page';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	wide: boolean = false;
	genericPages;
	nativePages;
	thirdpartyPages;
	paymentsPages;
	cssComponentsPages;
	homePage;
	rootPage;

	private app;
	private platform;
	private menu: MenuController;
	private oauthService: OAuthService;

	@ViewChild(Nav) nav: Nav;

	constructor(platform: Platform, menu: MenuController, oauthService: OAuthService, app: App, public deploy: Deploy) {

		this.menu = menu;
		this.oauthService = oauthService;
		// set up our app
		this.app = app;
		this.platform = platform;
		this.initializeApp();

		// set our app's pages
		this.homePage = { title: 'Home', component: HomePage, icon: 'home' };

		this.genericPages = [
      { title: 'News', component: NewsListPage, icon: 'paper' },
		  { title: 'Calendar', component: lCalendarListPage, icon: 'calendar' },
			// { title: 'DateTime', component: DateTimePage, icon: 'time' },
			// { title: 'Google maps', component: GoogleMapsPage, icon: 'map' },

		];
/*
		this.nativePages = [
			{ title: 'Action sheet', component: ActionsheetPage, icon: 'list-box' },
			{ title: 'Calendar', component: CalendarPage, icon: 'calendar' },
			{ title: 'Call number', component: CallNumberPage, icon: 'call' },
			{ title: 'Device', component: DevicePage, icon: 'logo-android' },
			{ title: 'Device motion', component: DeviceMotionPage, icon: 'contract' },
			{ title: 'Google analytics', component: GoogleAnalyticsPage, icon: 'logo-google' },
			{ title: 'Launch navigator', component: LaunchNavigatorPage, icon: 'pin' },
			{ title: 'Local notifications', component: LocalNotificationsPage, icon: 'notifications' },
			// { title: 'Position', component: PositionPage, icon: 'compass' },
			{ title: 'Push', component: PushPage, icon: 'notifications' },
			{ title: 'Screen orientation', component: ScreenOrientationPage, icon: 'expand' },
			{ title: 'Shake', component: ShakePage, icon: 'hand' },
			{ title: 'SocialSharing', component: SocialSharingPage, icon: 'share' },
			{ title: 'SpinnerDialog', component: SpinnerDialogPage, icon: 'sync' },
			{ title: 'Toasts', component: ToastsPage, icon: 'information-circle' },
			{ title: 'Vibrate', component: VibratePage, icon: 'phone-portrait' },
		];

		this.thirdpartyPages = [
			// { title: 'Fab toolbar', component: FabToolbarPage, icon: 'list-box' },
			{ title: 'i18n', component: I18nPage, icon: 'globe' },
			{ title: 'Google places', component: GooglePlaceAutocompletePage, icon: 'locate' }
		];

		this.cssComponentsPages = [
			{ title: 'Components', component: ComponentsListPage, icon: 'grid' },
			// { title: 'Layouts', component: LayoutsListPage, icon: 'flower' }
		];
*/
		this.rootPage = HomePage;
	}

	initializeApp() {
		this.platform.ready().then(() => {
			StatusBar.styleDefault();
		});
	}

	openPage(page) {
		// close the menu when clicking a link from the menu
		this.menu.close();
		// navigate to the new page if it is not the current page
		let component = page.component;
		if (component === OAuthProvidersListPage && this.oauthService.isAuthorized()) {
			component = OAuthProfilePage;
		}

		this.nav.setRoot(component);
	}

	setWidth() {
		if (this.platform.width() > 767) {
			this.wide = true;
			this.menu.open();
		} else {
			this.wide = false;
			this.menu.close();
		}
	};

	listenToEvents() {
		window.addEventListener('resize', () => {
			this.setWidth();
		});
	}
}
