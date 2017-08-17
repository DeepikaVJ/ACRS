import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {configuredRoutes} from "./routes.config";


import {CarSearchComponent} from './carsearch.component';
import {CarDetailComponent} from "./cardetail.component";
import {CustomerDetailComponent} from "./customerdetail.component";
import {DepartmentComponent} from "./department.component";
import {AppComponent} from "./app.component";


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, configuredRoutes],
    declarations: [CarSearchComponent, CarDetailComponent, CustomerDetailComponent, DepartmentComponent, AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}

