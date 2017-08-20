"use strict";
const router_1 = require('@angular/router');
const cardetail_component_1 = require("./cardetail.component");
const department_component_1 = require("./department.component");
const dept4_periodicServices_component_1 = require("./dept4.periodicServices.component");
const dept3_cleaningAndCare_component_1 = require("./dept3.cleaningAndCare.component");
const dept2_repairsAndFixes_component_1 = require("./dept2.repairsAndFixes.component");
const dept1_dentingpainting_component_1 = require("./dept1.dentingpainting.component");
let routes = [
    { path: 'departments', component: department_component_1.DepartmentComponent },
    { path: 'departments/:vin', component: department_component_1.DepartmentComponent },
    { path: 'dept1', component: dept1_dentingpainting_component_1.Dept1DentingpaintingComponent },
    { path: 'dept2', component: dept2_repairsAndFixes_component_1.Dept2RepairsAndFixesComponent },
    { path: 'dept3', component: dept3_cleaningAndCare_component_1.Dept3CleaningAndCareComponent },
    { path: 'dept4', component: dept4_periodicServices_component_1.Dept4PeriodicServicesComponent },
    { path: 'cardetail', component: cardetail_component_1.CarDetailComponent },
    // // {path:'movie/:mid',component:MovieComponent},
    { path: '', redirectTo: '/cardetail', pathMatch: 'full' },
];
exports.configuredRoutes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=routes.config.js.map