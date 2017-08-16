import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {CarComponent} from './car.component';
import {CarSearchComponent} from './carsearch.component';


@NgModule({
	imports:[BrowserModule,FormsModule,HttpModule],
	declarations:[CarComponent,CarSearchComponent],
	bootstrap:[CarSearchComponent]
})
export class AppModule{
}

