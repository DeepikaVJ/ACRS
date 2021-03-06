import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {configuredRoutes} from "./routes.config";


import {CarSearchComponent} from './carsearch.component';
import {CarDetailComponent} from "./cardetail.component";
import {DepartmentComponent} from "./department.component";
import {AppComponent} from "./app.component";
import {Dept1DentingpaintingComponent} from "./dept1.dentingpainting.component";
import {Dept4PeriodicServicesComponent} from "./dept4.periodicServices.component";
import {Dept3CleaningAndCareComponent} from "./dept3.cleaningAndCare.component";
import {Dept2RepairsAndFixesComponent} from "./dept2.repairsAndFixes.component";
import {StatusComponent} from "./status.component";


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, configuredRoutes],
    declarations: [CarSearchComponent, CarDetailComponent, DepartmentComponent, AppComponent, Dept1DentingpaintingComponent,Dept2RepairsAndFixesComponent,Dept3CleaningAndCareComponent,Dept4PeriodicServicesComponent,StatusComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}

