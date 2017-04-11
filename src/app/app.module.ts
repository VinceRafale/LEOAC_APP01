import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { MyApp } from './app.component';
import { Config, cloudSettings } from '../config';
import { ActionsheetModule } from '../pages/actionsheet/actionsheet.module';
import { NewsModule } from '../pages/news/news.module';
import { ComponentsModule } from '../pages/components/components.module';
import { CalendarModule } from '../pages/calendar/calendar.module';
import { CallNumberModule } from '../pages/call-number/call-number.module';
// import { DateTimeModule } from '../pages/date-time/date-time.module';
import { DeviceModule } from '../pages/device/device.module';
import { DeviceMotionModule } from '../pages/device-motion/device-motion.module';
import { HomeModule } from '../pages/home/home.module';
import { LocalNotificationsModule } from '../pages/local-notifications/local-notifications.module';
import { lCalendarModule } from '../pages/leoCalendar/lcalendar.module';
import { OAuthModule } from '../pages/oauth/oauth.module';
// import { PositionModule } from '../pages/position/position.module';
import { ScreenOrientationModule } from '../pages/screen-orientation/screen-orientation.module';
import { ShakeModule } from '../pages/shake/shake.module';
import { SocialSharingModule } from '../pages/social-sharing/social-sharing.module';
import { SpinnerDialogModule } from '../pages/spinner-dialog/spinner-dialog.module';
import { ToastsModule } from '../pages/toasts/toasts.module';
import { VibrateModule } from '../pages/vibrate/vibrate.module';
import { Base64Service } from '../services/base64.service';
// import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { LaunchNavigatorModule } from '../pages/launch-navigator/launch-navigator.module';
import { AppRateModule } from '../pages/app-rate/app-rate.module';
import { CustomComponentsModule } from '../components/custom-components.module';
// import { FabToolbarModule } from '../pages/fab-toolbar/fab-toolbar.module';
import { Http } from '@angular/http';
import { CloudModule } from '@ionic/cloud-angular';
import { PushModule } from '../pages/push/push.module';
import { I18nModule } from '../pages/i18n-capabilities/i18n-capabilities.module';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TranslateLoader, TranslateStaticLoader } from 'ng2-translate/src/translate.service';
// import { LayoutsModule } from '../pages/layouts/layouts.module';

export function createTranslateLoader(http: Http) {
	return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

import { GooglePlaceAutocompleteModule } from '../pages/google-place-autocomplete/google-place-autocomplete.module';
import { GoogleAnalyticsModule } from '../pages/google-analytics/google-analytics.module';


@NgModule({
	declarations: [
		MyApp
	],
	imports: [
		IonicStorageModule.forRoot(),
		IonicModule.forRoot(MyApp),
		CloudModule.forRoot(cloudSettings),
		AgmCoreModule.forRoot(),
		TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (createTranslateLoader),
			deps: [Http]
		}),
		CustomComponentsModule,

		ActionsheetModule,
		ComponentsModule,
		GoogleAnalyticsModule,
		NewsModule,
		CalendarModule,
		CallNumberModule,
		// DateTimeModule,
		DeviceModule,
		DeviceMotionModule,
		HomeModule,
		LocalNotificationsModule,
    lCalendarModule,
		OAuthModule,
		// PositionModule,
		PushModule,
		ScreenOrientationModule,
		ShakeModule,
		SocialSharingModule,
		SpinnerDialogModule,
		ToastsModule,
		VibrateModule,
		// GoogleMapsModule,
		GooglePlaceAutocompleteModule,
		LaunchNavigatorModule,
		AppRateModule,
		// FabToolbarModule,
		I18nModule,
		// LayoutsModule,
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp
	],
	providers: [
		Config,
		Base64Service,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule {
}
