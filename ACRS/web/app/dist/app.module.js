"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const http_1 = require('@angular/http');
const routes_config_1 = require("./routes.config");
const carsearch_component_1 = require('./carsearch.component');
const cardetail_component_1 = require("./cardetail.component");
const department_component_1 = require("./department.component");
const app_component_1 = require("./app.component");
const dept1_dentingpainting_component_1 = require("./dept1.dentingpainting.component");
const dept4_periodicServices_component_1 = require("./dept4.periodicServices.component");
const dept3_cleaningAndCare_component_1 = require("./dept3.cleaningAndCare.component");
const dept2_repairsAndFixes_component_1 = require("./dept2.repairsAndFixes.component");
const storage_service_1 = require("./storage.service");
const appointmentDTO_1 = require("./appointmentDTO");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, routes_config_1.configuredRoutes],
        providers: [storage_service_1.StorageService],
        declarations: [carsearch_component_1.CarSearchComponent, cardetail_component_1.CarDetailComponent, department_component_1.DepartmentComponent, app_component_1.AppComponent, dept1_dentingpainting_component_1.Dept1DentingpaintingComponent, dept2_repairsAndFixes_component_1.Dept2RepairsAndFixesComponent, dept3_cleaningAndCare_component_1.Dept3CleaningAndCareComponent, dept4_periodicServices_component_1.Dept4PeriodicServicesComponent, appointmentDTO_1.AppointmentDTO],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map