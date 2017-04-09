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
import { ClipboardModule } from '../pages/clipboard/clipboard.module';
import { ContactsModule } from '../pages/contacts/contacts.module';
// import { DateTimeModule } from '../pages/date-time/date-time.module';
import { DeviceModule } from '../pages/device/device.module';
import { DeviceMotionModule } from '../pages/device-motion/device-motion.module';
import { HomeModule } from '../pages/home/home.module';
import { LocalNotificationsModule } from '../pages/local-notifications/local-notifications.module';
import { NativeStorageModule } from '../pages/native-storage/native-storage.module';
import { LocalStorageModule } from '../pages/local-storage/local-storage.module';
import { NetworkModule } from '../pages/network/network.module';
import { OAuthModule } from '../pages/oauth/oauth.module';
import { PhotoViewerModule } from '../pages/photo-viewer/photo-viewer.module';
// import { PositionModule } from '../pages/position/position.module';
import { ProductsModule } from '../pages/products/products.module';
import { ScreenOrientationModule } from '../pages/screen-orientation/screen-orientation.module';
import { ShakeModule } from '../pages/shake/shake.module';
import { SlideBoxModule } from '../pages/slide-box/slide-box.module';
import { SocialSharingModule } from '../pages/social-sharing/social-sharing.module';
import { SpinnerDialogModule } from '../pages/spinner-dialog/spinner-dialog.module';
import { ToastsModule } from '../pages/toasts/toasts.module';
import { VibrateModule } from '../pages/vibrate/vibrate.module';
import { VimeoModule } from '../pages/vimeo/vimeo.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { RssFeedsModule } from '../pages/rss-feeds/rss-feeds.module';
import { Base64Service } from '../services/base64.service';
// import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { LaunchNavigatorModule } from '../pages/launch-navigator/launch-navigator.module';
import { AppRateModule } from '../pages/app-rate/app-rate.module';
import { CustomComponentsModule } from '../components/custom-components.module';
// import { FabToolbarModule } from '../pages/fab-toolbar/fab-toolbar.module';
import { ChartsPageModule } from '../pages/charts-page/charts-page.module';
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
import { BadgedTabsModule } from '../pages/badged-tabs/badged-tabs.module';
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
		BadgedTabsModule,
		GoogleAnalyticsModule,
		NewsModule,
		CalendarModule,
		CallNumberModule,
		ClipboardModule,
		ContactsModule,
		// DateTimeModule,
		DeviceModule,
		DeviceMotionModule,
		HomeModule,
		LocalNotificationsModule,
		NativeStorageModule,
		LocalStorageModule,
		NetworkModule,
		OAuthModule,
		PhotoViewerModule,
		// PositionModule,
		ProductsModule,
		PushModule,
		ScreenOrientationModule,
		ShakeModule,
		SlideBoxModule,
		SocialSharingModule,
		SpinnerDialogModule,
		ToastsModule,
		VibrateModule,
		VimeoModule,
		WordpressModule,
		RssFeedsModule,
		// GoogleMapsModule,
		GooglePlaceAutocompleteModule,
		LaunchNavigatorModule,
		AppRateModule,
		// FabToolbarModule,
		ChartsPageModule,
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
