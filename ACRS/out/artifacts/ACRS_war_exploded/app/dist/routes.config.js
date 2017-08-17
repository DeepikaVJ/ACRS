"use strict";
const router_1 = require('@angular/router');
const cardetail_component_1 = require("./cardetail.component");
const department_component_1 = require("./department.component");
let routes = [
    { path: 'departments', component: department_component_1.DepartmentComponent },
    { path: 'cardetail', component: cardetail_component_1.CarDetailComponent },
    // // {path:'movie/:mid',component:MovieComponent},
    { path: '', redirectTo: '/cardetail', pathMatch: 'full' },
];
exports.configuredRoutes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=routes.config.js.map