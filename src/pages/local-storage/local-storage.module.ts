import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { LocalStorageEditPage } from './edit/local-storage.edit.page';
import { LocalStorageListPage } from './list/local-storage.list.page';

@NgModule({
	imports: [IonicModule],
	declarations: [
		LocalStorageEditPage,
		LocalStorageListPage
	],
	entryComponents: [
		LocalStorageEditPage,
		LocalStorageListPage
	]
})
export class LocalStorageModule {

}