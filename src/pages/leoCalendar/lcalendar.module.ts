import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NewsItemPage } from './item/lcalendar.item.page';
import { lCalendarListPage } from './list/lcalendar.list.page';
import { PipesModule } from '../../pipes/pipes.module';
import { lCalendarService } from './lcalendar.service';

@NgModule({
	imports: [IonicModule, PipesModule],
	declarations: [
		lCalendarListPage,
		NewsItemPage
	],
	entryComponents: [
		lCalendarListPage,
		NewsItemPage
	],
	providers: [lCalendarService]
})
export class lCalendarModule {

}
