import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import {CarSearchComponent} from './carsearch.component';
import {CarDetailComponent} from "./cardetail.component";
import {CustomerDetailComponent} from "./customerdetail.component";



@NgModule({
	imports:[BrowserModule,FormsModule,HttpModule],
	declarations:[CarSearchComponent,CarDetailComponent,CustomerDetailComponent],
	bootstrap:[CarDetailComponent ]
})
export class AppModule{
}

